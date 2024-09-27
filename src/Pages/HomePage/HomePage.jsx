import React from "react";
import Footer from "../../components/Footer/Footer";
import Footer2 from "../../components/Footer2/Footer2";
import Banner from "../../components/Banner/Banner";
import CoOwn from "../../components/CoOwn/CoOwn";
import News from "../../components/News/News";
import DownloadApp from "../../components/DownlaodApp/DownloadApp";
import MeetOurTeam from "../../components/MeetOurTeam/MeetOurTeam";
import Testimonials from "../../components/Testimonials/Testimonials";
import AboutFracspace from "../../components/AboutFracspace/AboutFracspace";
import UpComingServices from "../../components/UpComingServices/UpComingServices";
import WhyChooseFs from "../../components/WhyChooseFs/WhyChooseFs";
import Navbar from "../../components/Navbar/Navbar";
import Style from "./HomePage.module.css";

import playStore from "../../assets/appImages/playstore.png";
import appleStore from "../../assets/appImages/apple-store.png";

import watsappImg from '../../assets/appImages/watsapp.png'

import { useState, useEffect } from "react";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import { Element } from "react-scroll";
import AppIconsComponent from "../../components/AppIconsComponent/AppIconsComponent";
import Reviews from "../../components/Reviews/Reviews";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      // console.log("scrolled is", isScrolled);
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollToTop>
    <div className={Style.main}>

      <AppIconsComponent />
      
      {/* <div className={Style.appIconsContainer}>

        <div onClick={() => window.open("https://play.google.com/store/apps/details?id=com.fracspace", "_blank")}>
          <img className={Style.playStore} src={playStore}></img>
        </div>

        <div onClick={() => window.open("https://apps.apple.com/in/app/fracspace/id6498551006", "_blank")}>
          <img className={Style.appleStore} src={appleStore}></img>
        </div>

        <div onClick={() => window.open("https://wa.me/9880626111", "_blank")}>
          <img className={`${Style.watsapp} ${Style.bounce}`} src={watsappImg}></img>
        </div>

      </div> */}

      {/* <div onClick={() => window.open("https://apps.apple.com/in/app/fracspace/id6498551006", "_blank")}>
          <img className={Style.watsapp} src={watsappImg}></img>
        </div> */}

      <div className={scrolled ? Style.nav : Style.navbar}>
        <Navbar />
      </div>

      <div className={Style.banner}>
        <Banner />
      </div>

      <div>
        <CoOwn />
      </div>

      <div>
        <WhyChooseFs />
      </div>

      <Element name="aboutFracspace">
      <div>
        <AboutFracspace />
      </div>
      </Element>

      <div>
        <UpComingServices />
      </div>

      <div>
        {/* <MeetOurTeam /> */}
      </div>

      <div>
        <News />
      </div>

      <div>
        <Testimonials />
      </div>

      {/* <div>
         <Reviews />
      </div> */}

      <div>
        <DownloadApp />
      </div>

      <div>
        <Footer />
      </div>

    </div>
    </ScrollToTop>
  );
}
