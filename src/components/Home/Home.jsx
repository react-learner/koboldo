import React from "react";
import HeadLine from "../headline/HeadLine";
import ItemCard from "../itemCard/ItemCard";
import ItemCondition from "../itemCondition/ItemCondition";
import ItemDisplay from "../itemDisplay/ItemDisplay";
import Navbar from "../navbar/Navbar";
import UserCard from "../navbar/userCard/UserCard";
import OfferDetails from "../offerDetails/OfferDetails";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <HeadLine />
        <div className="items-container" >
          <ItemDisplay />
          <ItemCondition  />
          <OfferDetails/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
        </div>
      </div>
    </div>
  );
};

export default Home;
