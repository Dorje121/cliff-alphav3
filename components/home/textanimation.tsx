import React from 'react';
import TextPressure from "../ui/textpressure";

const TextAnimation = () => {
  return (
    <div style={{position: 'relative', height: '100vh', width: '100%'}}>
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
        minFontSize={36}
      />
    </div>
  );
};

export default TextAnimation;