import React from "react";

// Define the types for the component's props
interface BgAttachedProps {
  bgImage: string;
  isGradient?: boolean;
}

const BgAttached: React.FC<BgAttachedProps> = ({
  bgImage,
  isGradient = false,
}) => {
  return (
    <div className="flex relative h-screen w-full ">
      <div
        className="absolute inset-0 bg-cover w-full h-full bg-center bg-no-repeat z-20"
        style={{
          // Use the bgImage prop to set the background image dynamically
          backgroundImage: isGradient
            ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`
            : `url(${bgImage})`,
          backgroundAttachment: "fixed", // Parallax effect
          filter: "brightness(0.8)", // Dark overlay for text readability
        }}
      ></div>
    </div>
  );
};

export default BgAttached;
