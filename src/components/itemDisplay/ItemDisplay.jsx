import React from "react";
import star from "../../assets/images/star.png";
import "./ItemDisplay.css";
import image1 from '../../assets/images/3.png'
import image2 from '../../assets/images/Group 3336.png'
import image3 from '../../assets/images/1.png'
import image4 from '../../assets/images/2.png'
// import mainImage from '../../assets/images/3@2x.png'
import mainImage from "../../assets/images/71usm8vWd1L._AC_SL1500_.png";

const ItemDisplay = () => {
  const images= [image1, image2, image3, image4]
  return (
    <div className="item-display-container">
      <div className="item-image-container" >
      <div className="left-images" >
      {images.map((image, index)=>{
        return <img key={index} src={image} className='image-list' alt='product-image' />
      })}

      </div>
      <div className="right-image" >
      <img className="main-image" src={mainImage} alt='main-image' />
      </div>
      </div>
      <h1 className="item-display-headline">
        SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell Phone New 64GB
        Orange
      </h1>
      <div className="item-rating">
        <h2>⭐⭐⭐⭐ </h2>
        <img src={star} alt="star" className="star-icon" />
        <h3 className="ratings">(7,114 ratings)</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default ItemDisplay;
