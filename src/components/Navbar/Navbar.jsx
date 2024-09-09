import React, { useEffect } from "react";
import Style from "./Navbar.module.css";

import { useState } from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import logo1 from "../../assets/logo/logo1.png";
import logo2 from "../../assets/logo/logo2.png";

function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = (e) => {
    e.preventDefault();
    // setScrolled(!scrolled)
    setMenuOpen(!menuOpen);
    console.log("menu is", menuOpen);
  };

  return (
    <div>
      <div className={`${menuOpen ? Style.mobileMain : Style.main}`}>

        {!isMobile && <div className= {Style.logo }>
          <div>        
            {!scrolled && !menuOpen ? (
               <img className={Style.logo2} src={logo2}></img>
            ) : (             
              <img className={Style.logo1} src={logo1}></img>
            )}
          </div>
        </div> } 

        {isMobile && <div className= {Style.logoMain2 }>
          <div>        
            {!scrolled && !menuOpen ? (
               <img className={Style.logo2} src={logo2}></img>
            ) : (             
              <img className={Style.logo1} src={logo1}></img>
            )}
          </div>
        </div> } 

        {!isMobile ? (
          <div className={Style.content}>
            {!scrolled ? (
              <ul className= {Style.navBar}>
                <li>
                  <Link to="/" className={Style.link}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/howitworks" className={Style.link}>
                    How it works
                  </Link>
                </li>
                <li>
                  <Link to="/services" className={Style.link}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/meetourteam" className={Style.link}>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={Style.link}>
                    Contact
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className={Style.navBar2}>
                <li>
                  <Link to="/" className={Style.link2}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/howitworks" className={Style.link2}>
                    How it works
                  </Link>
                </li>
                <li>
                  <Link to="/services" className={Style.link2}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/meetourteam" className={Style.link2}>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={Style.link2}>
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className={`${scrolled ? Style.main3: Style.main2} `} onClick={(e) => toggleMenu(e)}>
            <div className={`${!scrolled && menuOpen ? Style.menuButton2: Style.menuButton} `} onClick={(e) => toggleMenu(e)}>
              &#9776;
            </div>
          </div>
        )}
      </div>

      {isMobile ? (
        <div className={`${menuOpen ? Style.menu3 : Style.close}`}>
          <div className={Style.mobileMenuItems}>
            <ul className={Style.mobileMenu}>
              <li>
                <Link to="/" className={Style.link3}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/howitworks" className={Style.link3}>
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/services" className={Style.link3}>
                  Services
                </Link>
              </li>
              <li>
                  <Link to="/meetourteam" className={Style.link3}>
                    Our Team
                  </Link>
                </li>
              <li>
                <Link to="/contact" className={Style.link3}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      
    </div>
  );
}

export default Navbar;
