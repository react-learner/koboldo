import React from "react";
import "./ColorOption.css";

const ColorOption = ({ color, inActive }) => {
  const colorStyle = {
    width: "4rem",
    height: "4rem",
    backgroundColor: `${color}`,
    borderRadius: "50%",
  };
  const grayedOut = {
    width: "4rem",
    height: "4rem",
    backgroundColor: `${color}`,
    borderRadius: "50%",
    opacity: "0.5",
  };
  const textGray = {
    opacity: "0.5",
  };
  const normalText = {
    opacity: "1",
  };
  return (
    <div className="color-container">
      <div style={inActive ? grayedOut : colorStyle}></div>
      <h3 style={inActive ? textGray : normalText}>{color}</h3>
    </div>
  );
};

export default ColorOption;
