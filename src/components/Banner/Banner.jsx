import React from "react";
import Style from "./Banner.module.css";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../../assets/images/backgroundImage001.jpeg";
import img2 from "../../assets/images/backgroundImage002.jpeg";
import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import Navbar from "../Navbar/Navbar";

import logo1 from '../../assets/logo/logo1.png';
import logo2 from '../../assets/logo/logo2.png';

import { Link as ScrollLink } from "react-scroll";

function Banner() {
  const images = [{ url: img1 },{url:img2}];

  return (
    <>
      <div className={Style.main}>

        <div className={Style.main2}>
          <div className={Style.mainContent}>
            <div className={Style.header}>
              Own a share of Luxury Real Estate
            </div>
            <div className={Style.exploreContainer}>
              <ScrollLink to="aboutFracspace" smooth={true} duration={200}>
              <button>Explore</button>
              </ScrollLink>
            </div>
          </div>
        </div>

        <div className={Style.highlightsContainer}>
          <div className={Style.highlights}>
            <div className={Style.mainInfo}>100+</div>
            <div className={Style.info}>Fracs Sold</div>
          </div>

          <div className={Style.highlights}>
            <div className={Style.mainInfo}>15+</div>
            <div className={Style.info}>Locations Across World</div>
          </div>

          <div className={Style.highlights}>
            <div className={Style.mainInfo}>30cr+</div>
            <div className={Style.info}>Total Annual Revenue</div>
          </div>
        </div>

        <SimpleImageSlider
          className={Style.imageSlider}
          width={"98.4vw"}
          height={"100vh"}
          images={images}
          showNavs={false}
          autoPlay={true}
          autoPlayDelay={1.0}
        />
        
      </div>
    </>
  );
}

export default Banner;
