import React from "react";
import "./OfferDeatils.css";
import request from "../../assets/images/Group 19372.png";

const OfferDetails = () => {
  return (
    <div className="offer-container">
      <h1 className="offer-title">My Offer Details</h1>
      <div className="offer-section">
        <div className="quality">
          <div className="request-icon">
            <h5>Request</h5>
            <img src={request} alt="request-icon" />
          </div>
          <h2>Quality</h2>
        </div>
        <div className="drop-down">
          <select name="options" placeholder="Select">
            <option value="select">Select</option>
          </select>
          <button>My Offer</button>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
