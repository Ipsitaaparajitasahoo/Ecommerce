
import React from 'react';

const Button = ({ text, bgColor, textColor,onClick }) => {
  return (
    <button className={`${bgColor} ${textColor} p-2 rounded`}  onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
