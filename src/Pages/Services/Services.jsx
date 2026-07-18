import React, { useState, useEffect } from "react";
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

import watsappImg from '../../assets/appImages/watsapp.png'

import { Element } from "react-scroll";
import AppIconsComponent from "../../components/AppIconsComponent/AppIconsComponent";

import { Helmet } from "react-helmet";
import OffersTopBanner from "../../components/OffersTopBanner/OffersTopBanner";

function Services() {
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
    <div className={Style.main}>

    <Helmet>
        <title>Our Services | Fracspace</title>
        <meta name="description" content="Explore the range of services offered by Fracspace including construction, interior design, and property management." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <AppIconsComponent />
      
      {/* <div className={Style.appIconsContainer}>
        <div onClick={() => window.open("https://play.google.com/store/apps/details?id=com.fracspace", "_blank")}>
          <img className={Style.playStore} src={playStore}></img>
        </div>

        <div onClick={() => window.open("https://apps.apple.com/in/app/fracspace/id6498551006", "_blank")}>
          <img className={Style.appleStore} src={appleStore}></img>
        </div>

        <div onClick={() => window.open("https://wa.me/9355565604", "_blank")}>
          <img className={`${Style.watsapp} ${Style.bounce}`} src={watsappImg}></img>
        </div>
      </div> */}

      {/* <div className={Style.topBanner}>
        <OffersTopBanner />
      </div> */}

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
