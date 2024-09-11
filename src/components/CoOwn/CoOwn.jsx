import React from "react";
import Style from "./CoOwn.module.css";

import { useMediaQuery } from "react-responsive";

function CoOwn() {

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });


  return (
    <div className={Style.main}>
      {/* <div className={Style.header}>  Invest In Fractional Ownership</div> */}
      <div className={Style.header}>The concept of Co-ownership</div>
     {!isMobile ?<div className={Style.imagesContainer}>
        <div className={Style.image1}></div>
        <div className={Style.image2}>
          <div className={Style.content}>Invest in a fraction of revenue-generating real estate and receive dividends.</div>
        </div>
        <div className={Style.image3}></div>
      </div>:<div className={Style.imagesContainer}>
        <div className={Style.image2}>
          <div className={Style.content}>Invest in a fraction of revenue-generating real estate and receive dividends.</div>
        </div>
      </div> } 
    </div>
  );
}

export default CoOwn;
