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

        <div>
            <AgentStories />
        </div>

      </div>
    </ScrollToTop>
  )
}

export default Agents