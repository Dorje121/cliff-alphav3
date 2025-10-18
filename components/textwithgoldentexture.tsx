import React from "react";

interface TextWithTextureProps {
  text: string;
  image?: string;
  className?: string;
}

const TextWithTexture = ({
  text,
  // image = "/texture/texture.png",
  className = "",
}: TextWithTextureProps) => {
  return (
    // bg-clip-text bg-center bg-cover
    <h1
      className={`text-transparent montserrat  ${className}`}
      // style={{ backgroundImage: `url('${image}')` }}
    >
      {text}
    </h1>
  );
};

export default TextWithTexture;
