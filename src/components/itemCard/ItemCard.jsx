import React from "react";
import bag from "../../assets/images/bag (4).png";
import statistics from "../../assets/images/statistics.png";
import heart from "../../assets/images/hear-outline.png";
import itemDisplay from "../../assets/images/71usm8vWd1L._AC_SL1500_.png";
import "./ItemCard.css";

const ItemCard = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card-section">
          <div className="card-head">
            <img className="card-item-icon" src={bag} alt="bag" />
            <h2>
              Ends: <span>Jan 08, Fri, 00:00 PM</span>
            </h2>
          </div>
          <img className="card-image" src={itemDisplay} alt="item-display" />
        </div>
        <div className="card-item-icons">
          <img className="card-icons " src={statistics} alt="statistics" />
          <img className="card-icons " src={heart} alt="statistics" />
        </div>
      </div>
      <div>
        <h2 className="item-name">
          SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell
        </h2>
        <h3 className="price-tag" >Your Price</h3>
        <h1 className="price">$182</h1>
      </div>
    </div>
  );
};

export default ItemCard;
