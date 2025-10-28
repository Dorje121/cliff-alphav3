"use client";
import React from "react";
import TextPressure from "../ui/textpressure";

const TextAnimation = () => {
  return (
    <div
      className="flex items-center justify-center w-full bg-black"
      style={{ height: '20vh' }}
    >
      <div className="w-full max-w-8xl px-2 text-center">
        <TextPressure
          text="Cliff"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#FFD700"
          strokeColor="#FFD700"
          minFontSize={28}
        />
      </div>
    </div>
  );
};

export default TextAnimation;
