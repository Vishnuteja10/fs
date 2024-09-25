import React from "react";
import Navbar from "../../Navbar/Navbar";
import img1 from "../../../assets/images/backgroundImage2.png";
import Style from "./Banner.module.css";

function Banner() {
  return (
    <section className={Style.main} aria-labelledby="banner header">
      <div className={Style.imageContainer}>
        <img src={img1} alt="Scenic background of luxury holiday homes" loading="lazy"></img>
        <div className={Style.imageContent}>
          <h1 className={Style.header}>About Fracspace</h1>
          <div className={Style.content}>
            Invest in luxury holiday homes with Fracspace: Enjoy risk-free,
            flexible co-ownership, high rental yields, small ticket sizes, and
            complimentary stays.
          </div>
          <div className={Style.buttonContainer}>
            <a href="/brochure.pdf" download  aria-label="Download the Fracspace brochure" >
            <button>Download Brochure</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
