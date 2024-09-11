import React from "react";
import Style from "./WhyChooseFs.module.css";

import img1 from "../../assets/WhyChooseFs/img1.png";
import img2 from '../../assets/WhyChooseFs/img2.png';
import img3 from '../../assets/WhyChooseFs/img3.png';
import img4 from '../../assets/WhyChooseFs/img4.png';
import img5 from '../../assets/WhyChooseFs/img5.png';
import img6 from '../../assets/WhyChooseFs/img6.png';

function WhyChooseFs() {
  return (
    <div className={Style.main}>
      <div className={Style.header}>Why Choose <span className={Style.headerHighlight}>Fracspace</span>?</div>
      <div className={Style.container}>

        <div className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img src={img1}></img>
            </div>
          </div>
          <div className={Style.headerContent}>Risk Free</div>
          <div className={Style.content}>8% minimum returns</div>
        </div>

        <div className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img src={img2}></img>
            </div>
          </div>
          <div className={Style.headerContent}>Hassle Free</div>
          <div className={Style.content}>Property management by fracspace</div>
        </div>

        {/* <div className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img src={img3}></img>
            </div>
          </div>
          <div className={Style.headerContent}>High ROI</div>
          <div className={Style.content}>8%+ Expected ROI</div>
        </div> */}

        {/* <div className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img src={img4}></img>
            </div>
          </div>
          <div className={Style.headerContent}>Small Ticket Size</div>
          <div className={Style.content}>Fractions starting from 10 lakhs</div>
        </div> */}

        <div className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img src={img5}></img>
            </div>
          </div>
          <div className={Style.headerContent}>Earn BROI </div>
          <div className={Style.content}>Earn 6% Bank-Rate-Of-Interest until possession</div>
        </div>

        <div className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img src={img6}></img>
            </div>
          </div>
          <div className={Style.headerContent}>Complementary Stays</div>
          <div className={Style.content}>Enjoy complementary stays and 
            benefits on your property
          </div>
        </div>

      </div>
    </div>
  );
}

export default WhyChooseFs;
