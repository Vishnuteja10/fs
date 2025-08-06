import React from "react";

import Style from "./OffersBanner.module.css";

import { Carousel } from "react-bootstrap";

import rakhiBanner from "../../assets/Banner/rakhiBanner.webp";
import rakhiMobile from "../../assets/Banner/rakhiMobile.webp";

import { useMediaQuery } from "react-responsive";

function OffersBanner() {
  const isMobile = useMediaQuery({ maxWidth: "600px" });

  return (
    <div className={Style.main}>
      <div className={Style.header}>Celebrate Rakhi with Fracspace Offers!</div>

      {!isMobile ? (
        <div className={Style.bannerContainer}>
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div className={Style.bannerImageContainer}>
                <img src={rakhiBanner}></img>
              </div>
            </Carousel.Item>

            {/* <Carousel.Item>
              <div className={Style.bannerImageContainer}>
                <img ></img>
              </div>
            </Carousel.Item> */}
          </Carousel>
        </div>
      ) : (
        <div className={Style.bannerContainer}>
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div className={Style.bannerImageContainer}>
                <img src={rakhiMobile}></img>
              </div>
            </Carousel.Item>

            {/* <Carousel.Item>
              <div className={Style.bannerImageContainer}>
                <img ></img>
              </div>
            </Carousel.Item> */}
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default OffersBanner;
