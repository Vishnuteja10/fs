import React from "react";
import Style from "./IntroSection.module.css";
import image from "../../../assets/ServicesPage/illustration.png";

import img1 from "../../../assets/ServicesPage/obj1.png";
import img2 from "../../../assets/ServicesPage/obj2.png";

function IntroSection() {
  return (
    <div className={Style.outerContainer}>

      <div className={Style.main}>
        <div className={Style.imageContainer}>
          <img src={image}></img>
        </div>
      </div>

      <div className={Style.image1}>
        <img src={img1}></img>
      </div>
      <div className={Style.image2}>
        <img src={img2}></img>
      </div>

    </div>
  );
}

export default IntroSection;
