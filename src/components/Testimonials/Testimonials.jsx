import React, { useRef } from "react";
import Style from "./Testimonials.module.css";

import Carousel from "react-multi-carousel";

import video1 from "../../assets/videos/AbdulBasith.mp4";
import video2 from "../../assets/videos/PrashantGudipudi.mp4";
import video3 from "../../assets/videos/Srivivasbonnam.mp4";
import video4 from "../../assets/videos/test4.mp4";
import video5 from "../../assets/videos/test5.mp4";
import video6 from "../../assets/videos/test6.mp4";
import video7 from "../../assets/videos/test7.mp4";
import video8 from "../../assets/videos/test8.mp4";
import video9 from "../../assets/videos/test9.mp4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRight,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

import { useMediaQuery } from "react-responsive";

function Testimonials() {
  const scrollAmount = 140;

  const isMobile = useMediaQuery({ maxWidth: 600 });

  const containerRef = useRef(null);

  const testimonialsData = [
    { video: video1, name: "Mr.Abdul Basith", role: "Sales Manager, Internal Building Automation" },
    { video: video2, name: "Mr.Prashanth Gudipudi", role: "IT Employee" },
    { video: video3, name: "Mr.Srinivas", role: "Bank Employee, INDUSIND" },
    { video: video4 },
    { video: video5 },
    { video: video6 },
    { video: video7 },
    { video: video8 },
    { video: video9 }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

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
      <h2>What our customers have to say?</h2>

      {!isMobile && (
        <div className={Style.arrowsContainer}>
          <div className={Style.leftArrowContainer} onClick={handlePrev}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={Style.arrowIconLeft}
            />
          </div>
          <div className={Style.rightArrowContainer} onClick={handleNext}>
            <FontAwesomeIcon
              icon={faArrowRight}
              className={Style.arrowIconRight}
            />
          </div>
        </div>
      )}

      <div className={Style.testimonials} ref={containerRef}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={Style.testimonial}>
            <div className={Style.videoContent}>
              <video className={Style.video} controls src={testimonial.video}></video>
            </div>
          </div>
        ))}
      </div>

      {isMobile && (
        <div className={Style.arrowsContainer}>
          <div className={Style.leftArrowContainer} onClick={handlePrev}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={Style.arrowIconLeft}
            />
          </div>
          <div className={Style.rightArrowContainer} onClick={handleNext}>
            <FontAwesomeIcon
              icon={faArrowRight}
              className={Style.arrowIconRight}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonials;

