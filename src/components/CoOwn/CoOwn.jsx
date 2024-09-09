import React from "react";
import Style from "./CoOwn.module.css";

import { useMediaQuery } from "react-responsive";

function CoOwn() {

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });


  return (
    <div className={Style.main}>
      <div className={Style.header}>What is Co-Own?</div>
     {!isMobile ?<div className={Style.imagesContainer}>
        <div className={Style.image1}></div>
        <div className={Style.image2}>
          <div className={Style.content}>Investing in a fraction of revenue-generating real estate to receive dividends from the profit.</div>
        </div>
        <div className={Style.image3}></div>
      </div>:<div className={Style.imagesContainer}>
        <div className={Style.image2}>
          <div className={Style.content}>Investing in a fraction of revenue-generating real estate to receive dividends from the profit.</div>
        </div>
      </div> } 
    </div>
  );
}

export default CoOwn;
