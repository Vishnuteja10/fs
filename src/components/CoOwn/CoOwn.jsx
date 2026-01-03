import React from "react";
import Style from "./CoOwn.module.css";

function CoOwn() {
  return (
    <div className={Style.main}>
      <div className={Style.header}>What is co owning</div>
      <div className={Style.imagesContainer}>
        <div className={Style.image1}></div>
        <div className={Style.image2}>
          <div className={Style.content}>Own a portion of one or more revenue generating properties to claim
          dividends from the profit.</div>
        </div>
        <div className={Style.image3}></div>
      </div>
    </div>
  );
}

export default CoOwn;
