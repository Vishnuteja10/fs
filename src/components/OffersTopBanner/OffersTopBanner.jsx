import React from "react";
import Style from "./OffersTopBanner.module.css";

import { Element } from "react-scroll";

import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

import { scroller } from "react-scroll";

import { useMediaQuery } from "react-responsive";

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
      }, 500); // Delay ensures Home page is fully loaded before scrolling
    }
  };

  return (
    <>
      {!isMobile ? (
        <div className={Style.main}>
          <div>
            🌟 Unlock Exclusive March Deals – Invest & Enjoy! 🌟{" "}
            <span className={Style.knowMore} onClick={handleKnowMoreClick}>
              Know More
            </span>
          </div>
        </div>
      ) : (
        <div className={Style.main}>
          <div>
            🌟 Unlock Exclusive March Deals – Invest & Enjoy! 🌟 
            <span className={Style.knowMore} onClick={handleKnowMoreClick}>
              Know More
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default OffersTopBanner;
