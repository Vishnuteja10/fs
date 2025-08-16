import React from "react";
import Style from "./OffersTopBanner.module.css";

import { Element } from "react-scroll";

import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

import { scroller } from "react-scroll";

import { useMediaQuery } from "react-responsive";

import rakhiImg from "../../assets/Banner/j12.png";
import rakhiImg2 from "../../assets/Banner/j4.png";

function OffersTopBanner() {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    if (location.pathname === "/") {
      // Already on Home, smoothly scroll to the offersBanner
      scroller.scrollTo("offersBanner", {
        duration: 500,
        smooth: "easeInOutQuart"
      });
    } else {
      // Navigate to Home first, then scroll after loading
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("offersBanner", {
          duration: 500,
          smooth: "easeInOutQuart"
        });
      }, 500);
      // Delay ensures Home page is fully loaded before scrolling
    }
  };

  return (
    <>
      {!isMobile ? (
        <div className={Style.main}>
          <span className={Style.lightGlow}></span>
          <img className={Style.topImg} src={rakhiImg2}></img>
          <div>
            ✨Celebrate Janmashtami with ₹20,000 Festive Bonus! 🎉{" "}
            <span className={Style.knowMore} onClick={handleKnowMoreClick}>
              Know More
            </span>
          </div>
          {/* <img className={Style.topImg2} src={rakhiImg}></img> */}
        </div>
      ) : (
        <div className={Style.main}>
          <div className={Style.content}>
            ✨Janmashtami Deals !
            <span className={Style.knowMoreBtn} onClick={handleKnowMoreClick}>
              Know More
            </span>
          </div>
          {/* <div className={Style.knowMoreBtn}>Know More</div> */}
        </div>
      )}
    </>
  );
}

export default OffersTopBanner;
