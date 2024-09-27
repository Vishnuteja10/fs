import React, { useEffect, useRef } from "react";
import Style from "./News.module.css";
import Card from "react-bootstrap/Card";
import newsImg1 from "../../assets/news/news1.png";
import newsImg2 from "../../assets/news/news2.png";
import newsImg3 from "../../assets/news/news3.png";
import newsImg4 from "../../assets/news/news4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { version } from "react";

import img1 from "../../assets/newsImages/dc-logo-2.png";
import img2 from "../../assets/newsImages/the-enterprise-world.png";
import img3 from "../../assets/newsImages/et.png";
import img4 from "../../assets/newsImages/5.png";
import img5 from "../../assets/newsImages/ET_Now.jpg";
import img6 from "../../assets/newsImages/aroundtelugu-logo.png";
import img7 from '../../assets/newsImages/Et_Insights.png'

export default function News() {
  const newsContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null); // Ref to store the scroll interval

  // Function to start auto-scrolling
  const startScrolling = () => {
    if (scrollIntervalRef.current) return; // Avoid multiple intervals
    scrollIntervalRef.current = setInterval(() => {
      if (newsContainerRef.current) {
        newsContainerRef.current.scrollBy({ left: 1, behavior: "smooth" });
      }
    }, 10);
  };

  // Function to stop auto-scrolling
  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null; // Clear the interval reference
    }
  };

  // Start scrolling on component mount
  useEffect(() => {
    startScrolling(); // Start auto-scrolling when the component is mounted

    // Clean up the interval on component unmount
    return () => stopScrolling();
  }, []);

  // Event listeners for touch devices (mobile) and mouse (desktop)
  useEffect(() => {
    const newsContainer = newsContainerRef.current;

    if (newsContainer) {
      // Stop scrolling on touch start (mobile devices)
      newsContainer.addEventListener("touchstart", stopScrolling);
      // Resume scrolling on touch end (mobile devices)
      newsContainer.addEventListener("touchend", startScrolling);

      // Stop scrolling on mouse hover (desktop devices)
      newsContainer.addEventListener("mouseenter", stopScrolling);
      // Resume scrolling on mouse leave (desktop devices)
      newsContainer.addEventListener("mouseleave", startScrolling);
    }

    return () => {
      if (newsContainer) {
        newsContainer.removeEventListener("touchstart", stopScrolling);
        newsContainer.removeEventListener("touchend", startScrolling);
        newsContainer.removeEventListener("mouseenter", stopScrolling);
        newsContainer.removeEventListener("mouseleave", startScrolling);
      }
    };
  }, []);

  return (
    <div className={Style.main}>
      <div className={Style.header}>In the News</div>

      <div className={Style.newsContainer} ref={newsContainerRef}>
        <a
          className={Style.newsImage}
          href="https://www.deccanchronicle.com/general/fracspace-revolutionizes-real-estate-ownership-with-mobile-app-897133"
          target="_blank"
        >
          {" "}
          <img
            src={img1}
            alt="Deccan Chronicle - Fracspace revolutionizes real estate ownership"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://theenterpriseworld.com/unnath-reddy-a-visionary-leader-reforming/"
          target="_blank"
        >
          <img
            src={img2}
            alt="The Enterprise World - Unnath Reddy: A visionary leader"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://www.youtube.com/watch?v=Z1JVsH6AwDI"
          target="_blank"
        >
          <img src={img3} alt="ET Now - Watch our feature"></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://www.bizzbuzz.news/industry/fracspace-allows-fractional-ownership-of-properties-1212346"
          target="_blank"
        >
          <img
            src={img4}
            alt="Bizz Buzz - Fracspace allows fractional ownership of properties"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://entrepreneurstoday.in/unnath-reddys-fracspace-revolutionizing-real-estate-investment-and-empowering-dreams/"
          target="_blank"
        >
          <img
            src={img5}
            alt="Entrepreneurs Today - Fracspace revolutionizing real estate investment"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://youtu.be/DMCjEC1BQQE?si=DjmgtonohyGQfboG"
          target="_blank"
        >
          <img src={img6} alt="Around Telugu - Latest news feature"></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://etedge-insights.com/in-focus/trending/fracspace-launches-in-app-features-for-interiors-and-real-estate-enthusiasts-in-hyderabad-and-bangalore/"
          target="_blank"
        >
          <img src={img7} alt="ET INSIGHTS - Fracspace app launches new features"></img>
        </a>

        {/* repeat - 2 */}

        <a
          className={Style.newsImage}
          href="https://www.deccanchronicle.com/general/fracspace-revolutionizes-real-estate-ownership-with-mobile-app-897133"
          target="_blank"
        >
          {" "}
          <img
            src={img1}
            alt="Deccan Chronicle - Fracspace revolutionizes real estate ownership"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://theenterpriseworld.com/unnath-reddy-a-visionary-leader-reforming/"
          target="_blank"
        >
          <img
            src={img2}
            alt="The Enterprise World - Unnath Reddy: A visionary leader"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://www.youtube.com/watch?v=Z1JVsH6AwDI"
          target="_blank"
        >
          <img src={img3} alt="ET Now - Watch our feature"></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://www.bizzbuzz.news/industry/fracspace-allows-fractional-ownership-of-properties-1212346"
          target="_blank"
        >
          <img
            src={img4}
            alt="Bizz Buzz - Fracspace allows fractional ownership of properties"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://entrepreneurstoday.in/unnath-reddys-fracspace-revolutionizing-real-estate-investment-and-empowering-dreams/"
          target="_blank"
        >
          <img
            src={img5}
            alt="Entrepreneurs Today - Fracspace revolutionizing real estate investment"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://youtu.be/DMCjEC1BQQE?si=DjmgtonohyGQfboG"
          target="_blank"
        >
          <img src={img6} alt="Around Telugu - Latest news feature"></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://etedge-insights.com/in-focus/trending/fracspace-launches-in-app-features-for-interiors-and-real-estate-enthusiasts-in-hyderabad-and-bangalore/"
          target="_blank"
        >
          <img src={img7} alt="ET INSIGHTS - Fracspace app launches new features"></img>
        </a>

        {/* repeat 3 */}

        <a
          className={Style.newsImage}
          href="https://www.deccanchronicle.com/general/fracspace-revolutionizes-real-estate-ownership-with-mobile-app-897133"
          target="_blank"
        >
          {" "}
          <img
            src={img1}
            alt="Deccan Chronicle - Fracspace revolutionizes real estate ownership"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://theenterpriseworld.com/unnath-reddy-a-visionary-leader-reforming/"
          target="_blank"
        >
          <img
            src={img2}
            alt="The Enterprise World - Unnath Reddy: A visionary leader"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://www.youtube.com/watch?v=Z1JVsH6AwDI"
          target="_blank"
        >
          <img src={img3} alt="ET Now - Watch our feature"></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://www.bizzbuzz.news/industry/fracspace-allows-fractional-ownership-of-properties-1212346"
          target="_blank"
        >
          <img
            src={img4}
            alt="Bizz Buzz - Fracspace allows fractional ownership of properties"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://entrepreneurstoday.in/unnath-reddys-fracspace-revolutionizing-real-estate-investment-and-empowering-dreams/"
          target="_blank"
        >
          <img
            src={img5}
            alt="Entrepreneurs Today - Fracspace revolutionizing real estate investment"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://youtu.be/DMCjEC1BQQE?si=DjmgtonohyGQfboG"
          target="_blank"
        >
          <img src={img6} alt="Around Telugu - Latest news feature"></img>
        </a>


        <a
          className={Style.newsImage}
          href="https://etedge-insights.com/in-focus/trending/fracspace-launches-in-app-features-for-interiors-and-real-estate-enthusiasts-in-hyderabad-and-bangalore/"
          target="_blank"
        >
          <img src={img7} alt="ET INSIGHTS - Fracspace app launches new features"></img>
        </a>

        {/* repeat 4 */}

        <a
          className={Style.newsImage}
          href="https://www.deccanchronicle.com/general/fracspace-revolutionizes-real-estate-ownership-with-mobile-app-897133"
          target="_blank"
        >
          {" "}
          <img
            src={img1}
            alt="Deccan Chronicle - Fracspace revolutionizes real estate ownership"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://theenterpriseworld.com/unnath-reddy-a-visionary-leader-reforming/"
          target="_blank"
        >
          <img
            src={img2}
            alt="The Enterprise World - Unnath Reddy: A visionary leader"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://www.youtube.com/watch?v=Z1JVsH6AwDI"
          target="_blank"
        >
          <img src={img3} alt="ET Now - Watch our feature"></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://www.bizzbuzz.news/industry/fracspace-allows-fractional-ownership-of-properties-1212346"
          target="_blank"
        >
          <img
            src={img4}
            alt="Bizz Buzz - Fracspace allows fractional ownership of properties"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://entrepreneurstoday.in/unnath-reddys-fracspace-revolutionizing-real-estate-investment-and-empowering-dreams/"
          target="_blank"
        >
          <img
            src={img5}
            alt="Entrepreneurs Today - Fracspace revolutionizing real estate investment"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://youtu.be/DMCjEC1BQQE?si=DjmgtonohyGQfboG"
          target="_blank"
        >
          <img src={img6} alt="Around Telugu - Latest news feature"></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://etedge-insights.com/in-focus/trending/fracspace-launches-in-app-features-for-interiors-and-real-estate-enthusiasts-in-hyderabad-and-bangalore/"
          target="_blank"
        >
          <img src={img7} alt="ET INSIGHTS - Fracspace app launches new features"></img>
        </a>

        {/* repeat 5 */}

        <a
          className={Style.newsImage}
          href="https://www.deccanchronicle.com/general/fracspace-revolutionizes-real-estate-ownership-with-mobile-app-897133"
          target="_blank"
        >
          {" "}
          <img
            src={img1}
            alt="Deccan Chronicle - Fracspace revolutionizes real estate ownership"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://theenterpriseworld.com/unnath-reddy-a-visionary-leader-reforming/"
          target="_blank"
        >
          <img
            src={img2}
            alt="The Enterprise World - Unnath Reddy: A visionary leader"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://www.youtube.com/watch?v=Z1JVsH6AwDI"
          target="_blank"
        >
          <img src={img3} alt="ET Now - Watch our feature"></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://www.bizzbuzz.news/industry/fracspace-allows-fractional-ownership-of-properties-1212346"
          target="_blank"
        >
          <img
            src={img4}
            alt="Bizz Buzz - Fracspace allows fractional ownership of properties"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://entrepreneurstoday.in/unnath-reddys-fracspace-revolutionizing-real-estate-investment-and-empowering-dreams/"
          target="_blank"
        >
          <img
            src={img5}
            alt="Entrepreneurs Today - Fracspace revolutionizing real estate investment"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://youtu.be/DMCjEC1BQQE?si=DjmgtonohyGQfboG"
          target="_blank"
        >
          <img src={img6} alt="Around Telugu - Latest news feature"></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://etedge-insights.com/in-focus/trending/fracspace-launches-in-app-features-for-interiors-and-real-estate-enthusiasts-in-hyderabad-and-bangalore/"
          target="_blank"
        >
          <img src={img7} alt="ET INSIGHTS - Fracspace app launches new features"></img>
        </a>

        {/* repeat 6 */}

        <a
          className={Style.newsImage}
          href="https://www.deccanchronicle.com/general/fracspace-revolutionizes-real-estate-ownership-with-mobile-app-897133"
          target="_blank"
        >
          {" "}
          <img
            src={img1}
            alt="Deccan Chronicle - Fracspace revolutionizes real estate ownership"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://theenterpriseworld.com/unnath-reddy-a-visionary-leader-reforming/"
          target="_blank"
        >
          <img
            src={img2}
            alt="The Enterprise World - Unnath Reddy: A visionary leader"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://www.youtube.com/watch?v=Z1JVsH6AwDI"
          target="_blank"
        >
          <img src={img3} alt="ET Now - Watch our feature"></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://www.bizzbuzz.news/industry/fracspace-allows-fractional-ownership-of-properties-1212346"
          target="_blank"
        >
          <img
            src={img4}
            alt="Bizz Buzz - Fracspace allows fractional ownership of properties"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://entrepreneurstoday.in/unnath-reddys-fracspace-revolutionizing-real-estate-investment-and-empowering-dreams/"
          target="_blank"
        >
          <img
            src={img5}
            alt="Entrepreneurs Today - Fracspace revolutionizing real estate investment"
          ></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://youtu.be/DMCjEC1BQQE?si=DjmgtonohyGQfboG"
          target="_blank"
        >
          <img src={img6} alt="Around Telugu - Latest news feature"></img>
        </a>

        <a
          className={Style.newsImage}
          href="https://etedge-insights.com/in-focus/trending/fracspace-launches-in-app-features-for-interiors-and-real-estate-enthusiasts-in-hyderabad-and-bangalore/"
          target="_blank"
        >
          <img src={img7} alt="ET INSIGHTS - Fracspace app launches new features"></img>
        </a>

        {/* 
        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg1}></img>
            </div>
            <div className={Style.content}>FracSpace Limited: Transforming Real Estate</div>
            <div className={Style.readMore}  onClick={() => window.open("https://theenterpriseworld.com/unnath-reddy-a-visionary-leader-reforming/", "_blank")}
            >Read More</div>
        </div>

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg4}></img>
            </div>
            <div className={Style.content}>Fracspace:Your Passport to Premium Property Investment</div>
            <div className={Style.readMore}>Read More</div>
        </div>

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg2}></img>
            </div>
            <div className={Style.content}>Revolutionizing Real Estate Investment </div>
            <div className={Style.readMore} onClick={() => window.open("https://entrepreneurstoday.in/unnath-reddys-fracspace-revolutionizing-real-estate-investment-and-empowering-dreams/", "_blank")}>Read More</div>
        </div>

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg3}></img>
            </div>
            <div className={Style.content}>FracSpace allows fractional ownership of properties</div>
            <div className={Style.readMore} onClick={() => window.open("https://www.bizzbuzz.news/industry/fracspace-allows-fractional-ownership-of-properties-1212346", "_blank")}>Read More</div>
        </div>


        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg1}></img>
            </div>
            <div className={Style.content}>Fracspace:Your Passport to Premium Property Investment</div>
            <div className={Style.readMore}>Read More</div>
        </div> */}
      </div>
    </div>
  );
}
