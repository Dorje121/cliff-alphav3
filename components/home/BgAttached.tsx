import React from "react";

// Define the types for the component's props
interface BgAttachedProps {
  bgImage?: string;
  bgVideo?: string;
  isGradient?: boolean;
}

const BgAttached: React.FC<BgAttachedProps> = ({
  bgImage,
  bgVideo,
  isGradient = false,
}) => {
  return (
    <div className="flex relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      {bgVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
          style={{
            filter: "brightness(0.7)", // Dark overlay for text readability
          }}
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Image Background (fallback or when no video) */}
      {bgImage && !bgVideo && (
        <div
          className="absolute inset-0 bg-cover w-full h-full bg-center bg-no-repeat z-10"
          style={{
            // Use the bgImage prop to set the background image dynamically
            backgroundImage: isGradient
              ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`
              : `url(${bgImage})`,
            backgroundAttachment: "fixed", // Parallax effect
            filter: "brightness(0.8)", // Dark overlay for text readability
          }}
        ></div>
      )}

      {/* Dark overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white z-20"></div> */}
    </div>
  );
};

export default BgAttached;
