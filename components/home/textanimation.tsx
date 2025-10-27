"use client";
import React from "react";
import TextPressure from "../ui/textpressure";

const TextAnimation = () => {
  return (
    <div
      className="flex items-center justify-center w-full bg-black"
      style={{ height: '10vh' }}
    >
      <div className="w-full max-w-8xl px-4 text-center">
        <TextPressure
          text="Cliff Eyewear"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#FFD700"
          strokeColor="#FFD700"
          minFontSize={120}
        />
      </div>
    </div>
  );
};

export default TextAnimation;
