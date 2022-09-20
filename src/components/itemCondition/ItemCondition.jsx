import React from "react";
import "./ItemCondition.css";
import ColorOption from "./options/colorOption/ColorOption";

const ItemCondition = () => {
  const textGray = {
    opacity: "0.5",
  };
  return (
    <div className="condition-container">
      <h2>Condition</h2>
      <div className="options">
        <h3 className="option-type">New</h3>
        <h3 style={textGray}>New - Open Box</h3>
      </div>
      <div>
        <h2>Color</h2>
        <div className="options">
          <ColorOption color={"blue"} />
          <ColorOption color={"green"} inActive={"inActive"} />
        </div>
      </div>
    </div>
  );
};

export default ItemCondition;
