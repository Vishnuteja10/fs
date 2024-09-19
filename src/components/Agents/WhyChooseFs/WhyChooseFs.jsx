import React ,{useState,useRef}from "react";
import Style from "./WhyChooseFs.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import leftArrow from "../../../assets/Agents/left-arrow.png";
import rightArrow from "../../../assets/Agents/right-arrow-2.png";

function WhyChooseFs() {

    const containerRef = useRef(null);

    const scrollAmount = 25; // Adjust this based on the width of the contentBox

    const handleNext = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.scrollWidth;
        const scrollLeft = containerRef.current.scrollLeft;
        const clientWidth = containerRef.current.clientWidth;
        
        if (scrollLeft + clientWidth < containerWidth) {
          containerRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
          });
        }
      }
    };
  
    const handlePrev = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        
        if (scrollLeft > 0) {
          containerRef.current.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
          });
        }
      }
    };

  return (
    <div className={Style.main}>
      <div className={Style.header}>
        Why Choose <span className={Style.highlight}>Fracspace</span>?
      </div>

      <div className={Style.arrowContainer} onClick={handlePrev}>
        <div className={Style.leftArrowContainer}>
          <img src={leftArrow}></img>
        </div>

        <div className={Style.rightArrowContainer} onClick={handleNext}>
          <img src={rightArrow}></img>
        </div>
      </div>

     <div className={Style.slider}>
      <div className={Style.allContentContainers}  ref={containerRef} >

        <div className={Style.contentBox} >
          <div className={Style.contentContainer}>
            <div className={Style.contentHeader}>
              State-of-the-Art Technology
            </div>
            <div className={Style.content}>
              {" "}
              Leverage cutting-edge tools and resources designed to streamline
              your workflow, enhance your marketing efforts, and increase your
              productivity. Our comprehensive platform simplifies property
              management, client communication, and transaction tracking.
            </div>
          </div>
        </div>

        <div className={Style.contentBox}>
          <div className={Style.contentContainer}>
            <div className={Style.contentHeader}>
              Extensive Training & Development
            </div>
            <div className={Style.content}>
              {" "}
              We invest in your growth. With access to ongoing training
              programs, workshops, and mentorship opportunities, you’ll stay
              ahead of industry trends and elevate your skills to meet your
              clients’ needs.
            </div>
          </div>
        </div>

        <div className={Style.contentBox}>
          <div className={Style.contentContainer}>
            <div className={Style.contentHeader}>Robust Marketing Support</div>
            <div className={Style.content}>
              {" "}
              Stand out in a competitive market with our tailored marketing
              strategies. From high-quality listings to digital advertising
              campaigns, our marketing team will help you showcase your
              properties and attract buyers effectively.
            </div>
          </div>
        </div>

        <div className={Style.contentBox}>
          <div className={Style.contentContainer}>
            <div className={Style.contentHeader}>Collaborative Environment</div>
            <div className={Style.content}>
              {" "}
              Join a community of like-minded agents who are passionate about
              real estate. Share insights, collaborate on deals, and participate
              in networking events that foster professional relationships and
              growth.
            </div>
          </div>
        </div>

        <div className={Style.contentBox}>
          <div className={Style.contentContainer}>
            <div className={Style.contentHeader}>
              Competitive Commission Structure
            </div>
            <div className={Style.content}>
              {" "}
              At Fracspace, we recognize the hard work our agents put in. Enjoy
              a commission structure designed to reward your efforts and
              maximize your earnings, giving you the financial freedom to grow
              your business.
            </div>
          </div>
        </div>
        
      </div>
      
      </div>
    </div>
  );
}

export default WhyChooseFs;
