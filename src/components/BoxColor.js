import React from 'react';

function BoxColor(props) {
  const boxColor = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, //rgb(255,0,0)
    color: props.fontColor,
  };
  return (
    <div className="boxcolor" style={boxColor}>
      hello
    </div>
  );
}

export default BoxColor;
