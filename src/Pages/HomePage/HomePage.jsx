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
import Navbar from "../../components/Navbar/Navbar-Fracspace";
import Style from "./HomePage.module.css";

import playStore from "../../assets/appImages/playstore.png";
import appleStore from "../../assets/appImages/apple-store.png";

import watsappImg from "../../assets/appImages/watsapp.png";

import { useState, useEffect } from "react";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import { Element } from "react-scroll";
import AppIconsComponent from "../../components/AppIconsComponent/AppIconsComponent";
import Reviews from "../../components/Reviews/Reviews";
import OurPortfolio from "../../components/OurPortfolio/OurPortfolio";

import { Helmet } from "react-helmet";
import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";
import OffersBanner from "../../components/OffersBanner/OffersBanner";
import OffersTopBanner from "../../components/OffersTopBanner/OffersTopBanner";

import { X } from "lucide-react";

import bannerImg from "../../assets/Banner/alt2.webp";
import altairaMobileImg from "../../assets/Banner/alt1.webp";

import { useMediaQuery } from "react-responsive";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
    
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
  };

  return (
    <ScrollToTop>
      <div className={Style.main}>
        <Helmet>
          <title>Home | Fracspace</title>
          <meta
            name="description"
            content="Discover fractional ownership in luxury real estate with Fracspace. Invest in high-end properties, enjoy premium vacations, and earn rental income with projected yields of 8% annually."
          />
          <meta name="robots" content="index, follow" />

          {/* Google Analytics (GA) Script */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-9DRDNCGMB0"
          ></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9DRDNCGMB0');
            `}
          </script>
        </Helmet>

        <AppIconsComponent />

        <div className={scrolled ? Style.nav : Style.navbar}>
          {/* <SpecialOffers /> */}
          <Navbar />
        </div>

        <div
          className={`${Style.altairaBannerContainer} ${
            isVisible ? Style.show : Style.invisible
          }`}
        >
          <button
            onClick={closeBanner}
            className={Style.closeButton}
            aria-label="Close banner"
          >
            <X size={28} />
          </button>

          {isMobile ? (
            <img
              onClick={() =>
                window.open("https://investments.altaira.lk", "_blank")
              }
              className={Style.altairaMobileBannerImg}
              src={altairaMobileImg}
              alt="Altaira Banner"
            />
          ) : (
            <img
              onClick={() =>
                window.open("https://investments.altaira.lk", "_blank")
              }
              className={Style.altairaBannerImg}
              src={bannerImg}
              alt="Altaira Banner"
            />
          )}
        </div>

        <div className={Style.banner}>
          <Banner />
        </div>

        <div>
          <CoOwn />
        </div>

        <Element name="portfolio">
          <div>
            <OurPortfolio />
          </div>
        </Element>

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

        <div>{/* <MeetOurTeam /> */}</div>

        <div>
          <News />
        </div>

        <div>
          <Testimonials />
        </div>

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
