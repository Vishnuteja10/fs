import React from "react";
import Style from "./AboutFracspace.module.css";

import img1 from "../../assets/AboutFracspace/img1.png";
import img2 from "../../assets/AboutFracspace/img2.png";


export default function AboutFracspace() {
  return (
    <div className={Style.main}>
      <div className={Style.contentContainer}>
        <div className={Style.header}>Fracspace</div>
        <div className={Style.content}>
          Fracspace offers a unique investment experience through fractional
          ownership in the private and domestic real estate market. Enjoy luxury vacations
          while earning rental yield minimum 8% annually. With easy exit options,
          comprehensive property management, and the ability to build diverse
          portfolios, Fracspace makes real estate accessible and affordable.
          After years of operation in the fractional ownership sector, Fracspace
          is expanding to better serve its users. We are developing ourselves as
          a one-stop destination for all your real estate needs, including
          buying, selling, renting, interior design, construction, property
          management, and more.
        </div>
        <div className={Style.buttonContainer}>
          <a href="/brochure.pdf" download>
          <button>Download Brochure</button>
          </a>
        </div>
      </div>

      <div className={Style.imagesContainer}>
        <div className={Style.imageContainer1}>
          <img src={img1}></img>
        </div>
        <div className={Style.imageContainer2}>
          <img src={img2}></img>
          <div className={Style.imageContent}>
            <span className={Style.numberContent}>100+ </span>{" "}
            <span className={Style.info}>Fracs Sold</span>{" "}
            <span className={Style.numberContent}>15+ </span>{" "}
            <span className={Style.info}>Locations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
