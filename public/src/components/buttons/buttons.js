import React from "react";
import "./buttons.css";
const Buttons = ({ children, ...props }) => {
  return (
    <button className="classic-button" {...props}>
      {children}
    </button>
  );
};

export default Buttons;
