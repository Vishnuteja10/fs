import React from "react";
import Banner from "../../components/HowItWorks/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";

import { useState, useEffect } from "react";

import Style from "./HowItWorks.module.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import HowFsWorks from "../../components/HowItWorks/HowFsWorks/HowFsWorks";
import StepByStepGuide from "../../components/HowItWorks/StepByStepGuide/StepByStepGuide";
import WeManage from "../../components/HowItWorks/WeManage/WeManage";
import BottomBanner from "../../components/HowItWorks/BottomBanner/BottomBanner";
import Footer from "../../components/Footer/Footer";

import playStore from "../../assets/appImages/playstore.png";
import appleStore from "../../assets/appImages/apple-store.png";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import watsappImg from '../../assets/appImages/watsapp.png'

function HowItWorks() {
  return (
    <ScrollToTop>
    <div>
      
      <div className={Style.appIconsContainer} >
        <div onClick={() => window.open("https://play.google.com/store/apps/details?id=com.fracspace", "_blank")}>
          <img className={Style.playStore} src={playStore}></img>
        </div>

        <div onClick={() => window.open("https://apps.apple.com/in/app/fracspace/id6498551006", "_blank")}>
          <img className={Style.appleStore} src={appleStore}></img>
        </div>

        <div onClick={() => window.open("https://wa.me/9880626111", "_blank")}>
          <img className={`${Style.watsapp} ${Style.bounce}`} src={watsappImg}></img>
        </div>


      </div>

      <div className={Style.navbar}>
        <Navbar2 />
      </div>

      <div className={Style.banner}>
        <Banner />
      </div>

      <div className={Style.howFsWorks}>
        <HowFsWorks />
      </div>

      <div className={Style.stepByStepGuide}>
        <StepByStepGuide />
      </div>

      <div className={Style.weManage}>
        <WeManage />
      </div>

      <div className={Style.bottomBanner}>
        <BottomBanner />
      </div>

      <div>
        <Footer />
      </div>
    </div>
    </ScrollToTop>
  );
}

export default HowItWorks;
