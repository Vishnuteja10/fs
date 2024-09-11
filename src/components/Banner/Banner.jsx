import React, { useState, useEffect } from "react";
import Style from "./Banner.module.css";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../../assets/images/backgroundImage001.jpeg";
import img2 from "../../assets/images/backgroundImage002.jpeg";
// import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import Navbar from "../Navbar/Navbar";

import logo1 from '../../assets/logo/logo1.png';
import logo2 from '../../assets/logo/logo2.png';

import { Link as ScrollLink } from "react-scroll";

function Banner() {
  const images = [{ url: img1 },{url:img2}];

  // States to hold the values for counting animation
  const [fracsSold, setFracsSold] = useState(0);
  const [locations, setLocations] = useState(0);
  const [revenue, setRevenue] = useState(0);

    // useEffect to handle counting animation for fracs sold, locations, and revenue
    useEffect(() => {
      const incrementNumber = (target, setState, step) => {
        let count = 0;
        const interval = setInterval(() => {
          count += step; // Increment the count
          if (count >= target) {
            setState(target); // Once target is reached, set the final value
            clearInterval(interval); // Clear the interval when done
          } else {
            setState(count); // Update state with the current count
          }
        }, 100); // Adjust the speed of counting
      };
  
      // Start the animation
      incrementNumber(100, setFracsSold, 6); // target 100, increment by value
      incrementNumber(15, setLocations, 1); // target 15, increment by value
      incrementNumber(30, setRevenue, 2); // target value (to represent 30cr+), increment by value 
    }, []);

  return (
    <>
      <div className={Style.main}>

        <div className={Style.main2}>
          <div className={Style.mainContent}>
            <div className={Style.header}>
              Experience Real Estate Freedom and <br></br> Flexibility with Fracspace!
            </div>
            <div className={Style.exploreContainer}>
              <ScrollLink to="aboutFracspace" smooth={true} duration={200}>
              <button>Explore</button>
              </ScrollLink>
            </div>
          </div>
        </div>

        <div className={Style.highlightsContainer}>
          <div className={Style.highlights}>
            <div className={Style.mainInfo}>{fracsSold}+</div>
            <div className={Style.info}>Fracs Sold</div>
          </div>

          <div className={Style.highlights}>
            <div className={Style.mainInfo}>{locations}+</div>
            <div className={Style.info}>Locations Across The World</div>
          </div>

         
        </div>

        <SimpleImageSlider
          className={Style.imageSlider}
          width={"98.4vw"}
          height={"100vh"}
          images={images}
          showNavs={false}
          autoPlay={true}
          autoPlayDelay={1.0}
        />
        
      </div>
    </>
  );
}

export default Banner;
