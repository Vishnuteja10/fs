import React, { useRef } from "react";
import Style from "./WhyChooseFs.module.css";

import img1 from "../../assets/WhyChooseFs/img1.png";
import img2 from "../../assets/WhyChooseFs/img2.png";
import img3 from "../../assets/WhyChooseFs/img3.png";
import img4 from "../../assets/WhyChooseFs/img4.png";
import img5 from "../../assets/WhyChooseFs/img5.png";
import img6 from "../../assets/WhyChooseFs/img6.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,faArrowLeft,faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import { useMediaQuery } from "react-responsive";

function WhyChooseFs() {

  const isMobile = useMediaQuery({ maxWidth: 600 });

  const containerRef = useRef(null)

  const scrollAmount = 130;

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
    <section className={Style.main}>

      <h1 className={Style.header}>
        Why Choose <span className={Style.headerHighlight}>Fracspace</span>?
      </h1>

    {!isMobile &&  <div className={Style.arrowsContainer}>
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
      </div> }


      <div className={Style.container} ref={containerRef}>
        <article className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img
                src={img1}
                alt="Risk-free investment with 8% minimum returns"
              ></img>
            </div>
          </div>
          <h2 className={Style.headerContent}>Risk Free</h2>
          <div className={Style.content}>8% minimum returns</div>
        </article>

        <article className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img
                src={img2}
                alt="Hassle-free property management by Fracspace"
              ></img>
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
              <img
                src={img5}
                alt="Earn 6% Bank Rate of Interest until possession"
              ></img>
            </div>
          </div>
          <h2 className={Style.headerContent}>Earn BROI </h2>
          <div className={Style.content}>
            Earn 6% Bank-Rate-Of-Interest until possession
          </div>
        </article>

        <article className={Style.chooseFs}>
          <div className={Style.vectorContainer}>
            <div className={Style.imgContainer}>
              <img
                src={img6}
                alt="Enjoy complementary stays and benefits on your property"
              ></img>
            </div>
          </div>
          <h2 className={Style.headerContent}>Complementary Stays</h2>
          <div className={Style.content}>
            Enjoy complementary stays and benefits on your property
          </div>
        </article>

      </div>

      {isMobile &&  <div className={Style.arrowsContainer}>
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
      </div> }


    </section>
  );
}

export default WhyChooseFs;
