import React, { useState, useEffect } from "react";
import Style from "./Banner.module.css";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../../assets/images/backgroundImage001.jpeg";
import img2 from "../../assets/images/backgroundImage002.jpeg";
// import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import Navbar from "../Navbar/Navbar";

import logo1 from "../../assets/logo/logo1.png";
import logo2 from "../../assets/logo/logo2.png";

import { Link as ScrollLink } from "react-scroll";

import { Helmet } from "react-helmet";

function Banner() {
  const images = [{ url: img1 }, { url: img2 }];

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const isTablet = useMediaQuery({
    query: "(min-width: 600px) and (max-width: 1024px)"
  });

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
    incrementNumber(150, setFracsSold, 12); // target 100, increment by value
    incrementNumber(15, setLocations, 1); // target 15, increment by value
    incrementNumber(30, setRevenue, 2); // target value (to represent 30cr+), increment by value
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Fracspace</title>
        <meta
          name="description"
          content="Experience real estate freedom and flexibility with Fracspace."
        />
        <meta
          property="og:title"
          content="Fracspace - Real Estate Flexibility"
        />
        <meta
          property="og:description"
          content="Discover flexible real estate opportunities with Fracspace."
        />
        <meta property="og:image" content={img1} />
      </Helmet>

      <header className={Style.main}>
        <section className={Style.main2}>
          <div className={Style.mainContent}>
            <div className={Style.header}>
              Experience Real Estate Freedom and <br></br> Flexibility with
              Fracspace!
            </div>
            <div className={Style.exploreContainer}>
              <ScrollLink to="aboutFracspace" smooth={true} duration={200}>
                <button>Explore</button>
              </ScrollLink>
            </div>
          </div>
        </section>

        <section className={Style.highlightsContainer}>
          <div className={Style.highlights}>
            <div className={Style.mainInfo}>{fracsSold}+</div>
            <div className={Style.info}>Fracs Sold</div>
          </div>

          <div className={Style.highlights}>
            <div className={Style.mainInfo}>{locations}+</div>
            <div className={Style.info}>Locations Across The World</div>
          </div>
        </section>

        {!isMobile && !isTablet && (
          <SimpleImageSlider
            className={Style.imageSlider}
            width={"98.6vw"}
            overflow={"hidden"}
            height={"100vh"}
            images={images}
            showNavs={false}
            autoPlay={true}
            autoPlayDelay={6.0}
          />
        )}

        {isMobile && (
          <SimpleImageSlider
            className={Style.imageSlider}
            width={"99.4vw"}
            height={"100vh"}
            images={images}
            showNavs={false}
            autoPlay={true}
            autoPlayDelay={6.0}
          />
        )}

        {isTablet && (
          <SimpleImageSlider
            className={Style.imageSlider}
            width={"100vw"}
            overflow={"hidden"}
            height={"100vh"}
            images={images}
            showNavs={false}
            autoPlay={true}
            autoPlayDelay={6.0}
          />
        )}

        {/* {!isMobile ? (
          <SimpleImageSlider
            className={Style.imageSlider}
            width={"98.6vw"}
            overflow={"hidden"}
            height={"100vh"}
            images={images}
            showNavs={false}
            autoPlay={true}
            autoPlayDelay={6.0}
          />
        ) : (
          <SimpleImageSlider
            className={Style.imageSlider}
            width={"99.4vw"}
            height={"100vh"}
            images={images}
            showNavs={false}
            autoPlay={true}
            autoPlayDelay={6.0}
          />
        )} */}
      </header>
    </>
  );
}

export default Banner;
