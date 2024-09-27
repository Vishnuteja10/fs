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
    <section className={Style.main}>
      <h1 className={Style.header}>Why Choose <span className={Style.headerHighlight}>Fracspace</span>?</h1>
      <div className={Style.container}>

        <article className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img src={img1} alt="Risk-free investment with 8% minimum returns" ></img>
            </div>
          </div>
          <h2 className={Style.headerContent}>Risk Free</h2>
          <div className={Style.content}>8% minimum returns</div>
        </article>

        <article className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img src={img2}  alt="Hassle-free property management by Fracspace"></img>
            </div>
          </div>
          <h2 className={Style.headerContent}>Hassle Free</h2>
          <div className={Style.content}>Property management by fracspace</div>
        </article>

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

        <article className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img src={img5}  alt="Earn 6% Bank Rate of Interest until possession"></img>
            </div>
          </div>
          <h2 className={Style.headerContent}>Earn BROI </h2>
          <div className={Style.content}>Earn 6% Bank-Rate-Of-Interest until possession</div>
        </article>

        <article className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img src={img6} alt="Enjoy complementary stays and benefits on your property" ></img>
            </div>
          </div>
          <h2 className={Style.headerContent}>Complementary Stays</h2>
          <div className={Style.content}>Enjoy complementary stays and 
            benefits on your property
          </div>
        </article>

      </div>
    </section>
  );
}

export default WhyChooseFs;
