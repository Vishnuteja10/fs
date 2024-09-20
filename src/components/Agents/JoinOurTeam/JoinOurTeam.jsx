import React from "react";
import Style from "./JoinOurTeam.module.css";
import img2 from "../../../assets/Agents/img2.jpeg";
import img3 from "../../../assets/Agents/arrow-up.png";

import { useMediaQuery } from "react-responsive";

function JoinOurTeam() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div>
      {!isMobile ? (
        <div className={Style.main}>
          <div className={Style.leftBlockContainer}>
            <div className={Style.header}>
              Join our team of dedicated agents
            </div>
            <div className={Style.content}>
              At Fracspace, we believe that exceptional real estate experiences
              are built on strong partnerships. Our team of skilled agents is
              the backbone of our success, and we are committed to supporting
              you in every aspect of your career. Whether you are an experienced
              real estate professional or just starting your journey, Fracspace
              provides a vibrant and collaborative environment where you can
              thrive.
            </div>
            <div className={Style.buttonContainer}>
              <button>
                Join now <img className={Style.arrow} src={img3}></img>
              </button>
            </div>
          </div>

          <div className={Style.imageContainer}>
            <img src={img2}></img>
          </div>
        </div>
      ) : (
        <div className={Style.mobileMain}>
          <div className={Style.leftBlockContainer}>
            <div className={Style.mobileHeader}>
              Join our team of dedicated agents
            </div>
            <div className={Style.mobileImageContainer}>
              <img src={img2}></img>
            </div>
            <div className={Style.mobileContent}>
              At Fracspace, we believe that exceptional real estate experiences
              are built on strong partnerships. Our team of skilled agents is
              the backbone of our success, and we are committed to supporting
              you in every aspect of your career. Whether you are an experienced
              real estate professional or just starting your journey, Fracspace
              provides a vibrant and collaborative environment where you can
              thrive.
            </div>
            <div className={Style.mobileButtonContainer}>
              <button>
                Join now <img className={Style.arrow} src={img3}></img>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JoinOurTeam;
