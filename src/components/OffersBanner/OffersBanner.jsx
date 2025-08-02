import React from "react";

import Style from "./OffersBanner.module.css";

import { Carousel } from "react-bootstrap";

import banner1 from "../../assets/Banner/banner1.png";
import banner2 from "../../assets/Banner/banner2.png";

import mobileBanner1 from "../../assets/Banner/mobileBanner01.png";
import mobileBanner2 from "../../assets/Banner/mobileBanner2.png";

import rakhiBanner from '../../assets/Banner/rakiBanner2.png'

import { useMediaQuery } from "react-responsive";

function OffersBanner() {
  const isMobile = useMediaQuery({ maxWidth: "600px" });

  return (
    <div className={Style.main}>
      <div className={Style.header}>Celebrate Rakhi with Fracspace Offers!</div>

      {!isMobile ? (
        <div className={Style.bannerContainer}>
          <Carousel controls={true} indicators={true} interval={5000} fade>
            <Carousel.Item>
              <div className={Style.bannerImageContainer}>
                <img src={rakhiBanner}></img>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className={Style.bannerImageContainer}>
                <img src={rakhiBanner}></img>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      ) : (
        <div className={Style.bannerContainer}>
          <Carousel controls={true} indicators={true} interval={5000} fade>
            <Carousel.Item>
              <div className={Style.bannerImageContainer}>
                {/* <img src={mobileBanner1}></img> */}
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className={Style.bannerImageContainer}>
                {/* <img src={mobileBanner2}></img> */}
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default OffersBanner;
