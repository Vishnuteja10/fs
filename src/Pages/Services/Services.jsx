import React from "react";
import Style from "./Services.module.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import BannerSection from "../../components/Services/BannerSection/BannerSection";
import IntroSection from "../../components/Services/IntroSection/IntroSection";
import UpComingServices from "../../components/Services/UpComingServices/UpComingServices";
import Footer from "../../components/Footer/Footer";
import UpComingServices2 from '../../components/Services/UpComingServices2/UpComingServices2'

import playStore from "../../assets/appImages/playstore.png";
import appleStore from "../../assets/appImages/apple-store.png";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import { Element } from "react-scroll";

function Services() {
  return (
    <ScrollToTop>
    <div className={Style.main}>
      
      <div className={Style.appIconsContainer}>
        <div onClick={() => window.open("https://play.google.com/store/apps/details?id=com.fracspace", "_blank")}>
          <img className={Style.playStore} src={playStore}></img>
        </div>

        <div onClick={() => window.open("https://apps.apple.com/in/app/fracspace/id6498551006", "_blank")}>
          <img className={Style.appleStore} src={appleStore}></img>
        </div>
      </div>

      <div className={Style.navBar}>
        <Navbar2 />
      </div>
      <div>
        <BannerSection />
      </div>
      <div>
        <IntroSection />
      </div>
      {/* <div className={Style.UpComingServices2}>
         <UpComingServices2 />
      </div> */}

      <Element name="upcomingServices">
      <div  className={Style.UpComingServices2}>
        <UpComingServices />
      </div>
      </Element>

      <div>
        <Footer />
      </div>
    </div>
    </ScrollToTop>
  );
}

export default Services;
