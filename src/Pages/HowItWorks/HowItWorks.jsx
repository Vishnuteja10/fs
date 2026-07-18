import React from "react";
import Banner from "../../components/HowItWorks/Banner/Banner";


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

import { Helmet } from "react-helmet";

import watsappImg from '../../assets/appImages/watsapp.png'
import AppIconsComponent from "../../components/AppIconsComponent/AppIconsComponent";
import OffersTopBanner from "../../components/OffersTopBanner/OffersTopBanner";

function HowItWorks() {
  const [hasConsent, setHasConsent] = useState(() => localStorage.getItem("cookieConsent") === "accept");

  useEffect(() => {
    const handleConsentChange = () => {
      setHasConsent(localStorage.getItem("cookieConsent") === "accept");
    };
    window.addEventListener("cookie-consent-change", handleConsentChange);
    return () => {
      window.removeEventListener("cookie-consent-change", handleConsentChange);
    };
  }, []);

  useEffect(() => {
    if (hasConsent) {
      if (!window.gaInitialized) {
        window.gaInitialized = true;
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-9DRDNCGMB0";
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function () {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', 'G-9DRDNCGMB0');
      }
    }
  }, [hasConsent]);

  return (
    <ScrollToTop>
    <div>

    <Helmet>
        <title>How It Works | Fracspace</title>
        <meta name="description" content="Discover how Fracspace works for you. Explore our step-by-step guide to seamless property management and services." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <AppIconsComponent />
      
      {/* <div className={Style.appIconsContainer} >
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

      {/* <div className={Style.topBanner}>
         <OffersTopBanner />
      </div> */}

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

