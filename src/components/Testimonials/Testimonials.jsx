import React,{useRef} from 'react'
import Style from './Testimonials.module.css'

import Carousel from 'react-multi-carousel'

import video1 from '../../assets/videos/AbdulBasith.mp4'
import video2 from '../../assets/videos/PrashantGudipudi.mp4'
import video3 from '../../assets/videos/Srivivasbonnam.mp4'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,faArrowRight,faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

import { useMediaQuery } from "react-responsive";

function Testimonials() {

  const scrollAmount = 140;

  const isMobile = useMediaQuery({ maxWidth: 600 });

  const containerRef = useRef(null)

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
      </div>}

        <div className={Style.testimonials} ref={containerRef}>

            <div className={Style.testimonial}>
              
                <div className={Style.videoContent}>
                    <video className={Style.video} controls src={video1} >
                       
                    </video>
                </div>
                <div>
                     <h3>MR.Abdul Basith</h3>
                     <p>Sales Manager, Internal Building Automation</p>
                </div>
            </div>

            <div className={Style.testimonial}>
                <div className={Style.videoContent}>
                    <video className={Style.video}  controls src={video2}></video>
                </div>
                <div>
                   <h3>Mr.Prashanth Gudipudi</h3>
                    <p>IT Employee</p>
                </div>
            </div>

            <div className={Style.testimonial}>
                <div className={Style.videoContent}>
                    <video className={Style.video}   controls src={video3}></video>
                </div>
                <div>
                   <h3>Mr.Srinivas</h3>
                    <p>Bank Employee, INDUSIND</p>
                </div>
            </div>

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
      </div>}

    </div>
  )
}

export default Testimonials