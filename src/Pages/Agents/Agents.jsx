import React ,{useState,useEffect}from 'react'

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Style from './Agents.module.css'
import AppIconsComponent from '../../components/AppIconsComponent/AppIconsComponent';
import Navbar from '../../components/Navbar/Navbar';
import Navbar2 from '../../components/Navbar2/Navbar2';
import MainComponent from '../../components/Agents/MainComponent/MainComponent';
import JoinOurTeam from '../../components/Agents/JoinOurTeam/JoinOurTeam';
import WhyChooseFs from '../../components/Agents/WhyChooseFs/WhyChooseFs';
import AgentStories from '../../components/Agents/AgentStories/AgentStories';
import BottomBanner from '../../components/Agents/BottomBanner/BottomBanner';

import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/Agents/ContactForm/ContactForm';

import { Element } from "react-scroll";

import { Helmet } from 'react-helmet';


function Agents() {

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
      <Helmet>
        <title>Agents | Fracspace</title>
        <meta name="description" content="Join our team of dedicated agents at Fracspace. We offer a vibrant and collaborative environment for real estate professionals." />
        <meta name="robots" content="index, follow" />
      </Helmet>

        <AppIconsComponent />

        <div className={Style.navbar}>
            <Navbar2/>
        </div>
          
        <div className={Style.mainComponent}>
            <MainComponent />
        </div>

        <div>
            <JoinOurTeam />
        </div>

        <div>
            <WhyChooseFs />
        </div>

       
        {/* <div>
            <AgentStories />
        </div> */}
       
{/* 
        <div>
            <BottomBanner />
        </div> */}

        <Element name='agentContactForm'>
        <div>
            <ContactForm />
        </div>
        </Element>

        <div>
            <Footer />
        </div>

      </div>
    </ScrollToTop>
  )
}

export default Agents