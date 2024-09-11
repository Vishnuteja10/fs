import React from "react";
import Navbar from "../../Navbar/Navbar";
import img1 from "../../../assets/images/backgroundImage2.png";
import Style from "./Banner.module.css";

function Banner() {
  return (
    <div className={Style.main}>
      <div className={Style.imageContainer}>
        <img src={img1}></img>
        <div className={Style.imageContent}>
          <div className={Style.header}>About Fracspace</div>
          <div className={Style.content}>
            Invest in luxury holiday homes with Fracspace: Enjoy risk-free,
            flexible co-ownership, high rental yields, small ticket sizes, and
            complimentary stays.
          </div>
          <div className={Style.buttonContainer}>
            <button>Download Brochure</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
