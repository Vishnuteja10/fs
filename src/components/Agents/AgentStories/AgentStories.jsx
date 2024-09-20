import React from "react";
import Style from "./AgentStories.module.css";
import img1 from "../../../assets/Agents/img3.jpeg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import leftArrow from "../../../assets/Agents/left-arrow.png";
import rightArrow from "../../../assets/Agents/right-arrow-2.png";

function AgentStories() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={Style.container}>
        <Carousel responsive={responsive} autoPlay={true} swipeable={true}  infinite={true}  
      transitionDuration={1000}   dotListClass="custom-dot-list-style"  keyBoardControl={true} >

      <div className={Style.main}>
        <div className={Style.imageContainer}>
          <img src={img1}></img>
        </div>

        <div className={Style.rightContainer}>
          <div className={Style.headerContainer}>
            <div className={Style.header}> OUR AGENTS SUCCESS STORY</div>
          </div>
          <div className={Style.contentContainer}>
            <div>
              Joining Fracspace was a game-changer for my real estate career.
              The community support and resources have helped me double my sales
              in just one year!
            </div>
          </div>
          <div className={Style.detailsContainer}>
            <div className={Style.name}>Advik Saro</div>
            <div className={Style.role}>Real Estate Agent</div>
          </div>
        </div>
      </div>

      <div className={Style.main}>
        <div className={Style.imageContainer}>
          <img src={img1}></img>
        </div>

        <div className={Style.rightContainer}>
          <div className={Style.headerContainer}>
            <div className={Style.header}> OUR AGENTS SUCCESS STORY</div>
          </div>
          <div className={Style.contentContainer}>
            <div>
              Joining Fracspace was a game-changer for my real estate career.
              The community support and resources have helped me double my sales
              in just one year!
            </div>
          </div>
          <div className={Style.detailsContainer}>
            <div className={Style.name}>Advik Saro</div>
            <div className={Style.role}>Real Estate Agent</div>
          </div>
        </div>
      </div>


      <div className={Style.main}>
        <div className={Style.imageContainer}>
          <img src={img1}></img>
        </div>

        <div className={Style.rightContainer}>
          <div className={Style.headerContainer}>
            <div className={Style.header}> OUR AGENTS SUCCESS STORY</div>
          </div>
          <div className={Style.contentContainer}>
            <div>
              Joining Fracspace was a game-changer for my real estate career.
              The community support and resources have helped me double my sales
              in just one year!
            </div>
          </div>
          <div className={Style.detailsContainer}>
            <div className={Style.name}>Advik Saro</div>
            <div className={Style.role}>Real Estate Agent</div>
          </div>
        </div>
      </div>

      </Carousel>

      {/* <div className={Style.arrowContainer} >
        <div className={Style.leftArrowContainer} >
          <img src={leftArrow}></img>
        </div>

        <div className={Style.rightArrowContainer} >
          <img src={rightArrow}></img>
        </div>
      </div> */}

    </div>
  );
}

export default AgentStories;
