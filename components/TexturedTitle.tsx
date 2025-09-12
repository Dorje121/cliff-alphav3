"use client";

import React from "react";

interface TexturedTitleProps {
  text: string;
  className?: string;
  fontSize?: string;
  fontWeight?: string;
  style?: React.CSSProperties;
  textureImage?: string; // ✅ new prop for custom texture
}

export default function TexturedTitle({
  text,
  className = "",
  fontSize = "4rem",
  fontWeight = "bold",
  style = {},
  textureImage = "/texture/texture.png", // ✅ default texture
}: TexturedTitleProps) {
  // Convert fontSize to number for SVG fallback
  const fontSizeNum = parseInt(fontSize) || 64;

  // unique pattern id for multiple titles on the same page
  const patternId = `texture-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`inline-block ${className}`} style={style}>
      <svg
        width="100%"
        height={fontSizeNum * 1.2}
        viewBox={`0 0 ${text.length * fontSizeNum * 0.6} ${
          fontSizeNum * 1.2
        }`}
        style={{ display: "block" }}
      >
        <defs>
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="200"
            height="200"
          >
            <image
              href={textureImage} // ✅ dynamic texture
              x="0"
              y="0"
              width="200"
              height="200"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>
        <text
          x="0"
          y={fontSizeNum * 0.8}
          fontSize={fontSizeNum}
          fontWeight={fontWeight}
          fill={`url(#${patternId})`}
          fontFamily="Arial, sans-serif"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
