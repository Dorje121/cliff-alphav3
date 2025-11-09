"use client";

import { motion, useSpring } from "framer-motion";
import { FC, JSX, useEffect, useRef, useState } from "react";
// Utility function 'cn' (classnames) - implemented directly to resolve import error
function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(" ");
}

interface Position {
  x: number;
  y: number;
}

export interface SpringConfig {
  damping: number;
  stiffness: number;
  mass: number;
  restDelta: number;
}

export interface SmoothCursorProps {
  cursor?: JSX.Element;
  springConfig?: SpringConfig;
  className?: string;
  size?: number;
  color?: string;
  hideOnLeave?: boolean;
  trailLength?: number;
  showTrail?: boolean;
  rotateOnMove?: boolean;
  scaleOnClick?: boolean;
  glowEffect?: boolean;
  magneticDistance?: number;
  magneticElements?: string;
  onCursorMove?: (position: Position) => void;
  onCursorEnter?: () => void;
  onCursorLeave?: () => void;
  disabled?: boolean;
}

const DefaultCursorSVG: FC<{ size?: number; color?: string; className?: string }> = ({
  size = 25,
  color = "white",
  className
}) => {
  return (
    <div 
      className={cn("pointer-events-none rounded-full bg-white mix-blend-difference", className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: '0 0 0 1px rgba(0,0,0,0.1)'
      }}
    />
  );
};

export function SmoothCursor({
  cursor,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
  className,
  size = 25,
  color = "black",
  hideOnLeave = true,
  trailLength = 5,
  showTrail = false,
  rotateOnMove = true,
  scaleOnClick = true,
  glowEffect = false,
  magneticDistance = 50,
  magneticElements = "[data-magnetic]",
  onCursorMove,
  onCursorEnter,
  onCursorLeave,
  disabled = false,
}: SmoothCursorProps) {
  const [isMoving, setIsMoving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Position[]>([]);

  const lastMousePos = useRef<Position>({ x: 0, y: 0 });
  const velocity = useRef<Position>({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotation = useSpring(0, {
    ...springConfig,
    damping: 60,
    stiffness: 300,
  });
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 500,
    damping: 35,
  });

  const defaultCursor = <DefaultCursorSVG size={size} color={color} />;
  const cursorElement = cursor || defaultCursor;

  useEffect(() => {
    if (disabled) return;

    const updateVelocity = (currentPos: Position) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTime.current;

      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        };
      }

      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;
    };

    const updateTrail = (pos: Position) => {
      if (!showTrail) return;

      setTrail(function (prev) {
        var newTrail = [pos].concat(prev.slice(0, trailLength - 1));
        return newTrail;
      });
    };

    const findMagneticElement = (x: number, y: number) => {
      const elements = document.querySelectorAll(magneticElements);

      // Fix: Convert NodeListOf<Element> to an array for reliable iteration
      for (const element of Array.from(elements)) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        );

        if (distance < magneticDistance) {
          return { x: centerX, y: centerY, distance };
        }
      }
      return null;
    };

    const smoothMouseMove = (e: MouseEvent) => {
      let currentPos = { x: e.clientX, y: e.clientY };

      // Check for magnetic elements
      const magneticTarget = findMagneticElement(currentPos.x, currentPos.y);
      if (magneticTarget) {
        const strength = 1 - (magneticTarget.distance / magneticDistance);
        currentPos = {
          x: currentPos.x + (magneticTarget.x - currentPos.x) * strength * 0.3,
          y: currentPos.y + (magneticTarget.y - currentPos.y) * strength * 0.3,
        };
      }

      updateVelocity(currentPos);
      updateTrail(currentPos);

      const speed = Math.sqrt(
        Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2),
      );

      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      onCursorMove?.(currentPos);

      if (speed > 0.1 && rotateOnMove) {
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) +
          90;

        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;

        scale.set(0.95);
        setIsMoving(true);

        const timeout = setTimeout(function () {
          scale.set(1);
          setIsMoving(false);
        }, 150);

        return function () {
          return clearTimeout(timeout);
        };
      }
    };

    const handleMouseEnter = function () {
      setIsVisible(true);
      onCursorEnter?.();
    };

    const handleMouseLeave = function () {
      if (hideOnLeave) {
        setIsVisible(false);
      }
      onCursorLeave?.();
    };

    const handleMouseDown = function () {
      if (scaleOnClick) {
        setIsClicking(true);
        scale.set(0.8);
      }
    };

    const handleMouseUp = function () {
      if (scaleOnClick) {
        setIsClicking(false);
        scale.set(1);
      }
    };

    let rafId: number;
    const throttledMouseMove = function (e: MouseEvent) {
      if (rafId) return;

      rafId = requestAnimationFrame(function () {
        smoothMouseMove(e);
        rafId = 0;
      });
    };

    // Default cursor is now visible
    window.addEventListener("mousemove", throttledMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return function () {
      window.removeEventListener("mousemove", throttledMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      // Reset any cursor styles
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    cursorX,
    cursorY,
    rotation,
    scale,
    disabled,
    showTrail,
    trailLength,
    rotateOnMove,
    scaleOnClick,
    hideOnLeave,
    magneticDistance,
    magneticElements,
    onCursorMove,
    onCursorEnter,
    onCursorLeave
  ]);

  if (disabled || !isVisible) return null;

  return (
    <>
      {/* Trail Effect */}
      {showTrail && trail.map(function (pos, index) {
        return (
          <motion.div
            key={index}
            style={{
              position: "fixed",
              left: pos.x,
              top: pos.y,
              translateX: "-50%",
              translateY: "-50%",
              zIndex: 99 - index,
              pointerEvents: "none",
              opacity: (trailLength - index) / trailLength * 0.5,
              scale: (trailLength - index) / trailLength * 0.8,
            }}
            className="w-2 h-2 bg-current rounded-full"
          />
        );
      })}

      {/* Main Cursor */}
      <motion.div
        style={{
          position: "fixed",
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: rotateOnMove ? rotation : 0,
          scale: scale,
          zIndex: 100,
          pointerEvents: "none",
          willChange: "transform",
          filter: glowEffect ? "drop-shadow(0 0 10px " + color + "40)" : "none", // String concatenation
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className={cn("select-none", className)}
      >
        {cursorElement}
      </motion.div>
    </>
  );
}

export default SmoothCursor;