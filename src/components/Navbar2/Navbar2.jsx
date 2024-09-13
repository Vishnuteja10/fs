import React ,{useState}from "react";
import Style from "./Navbar2.module.css";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo/logo1.png";

import { useMediaQuery } from "react-responsive";
import { faL } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

function Navbar2() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate()

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
    // console.log("menu is", menuOpen);
  };

  return (
    <>
      {!isMobile ? (
        <div className={Style.main}>

          <div className={Style.logo}>
            <div onClick={() => navigate('/')}>
              <img className={Style.logo1} src={logo1}></img>
            </div>
          </div>

          <div className={Style.content}>
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
          </div>
        </div>
      ) : (
        <div className={Style.main}>

          <div className={Style.logo}>
            <div onClick={() => navigate('/')}>
              <img className={Style.logo1} src={logo1}></img>
            </div>
          </div>

          <div >
          <div className={Style.main2} onClick={(e) => toggleMenu(e)}>
            <div className={Style.menuButton} onClick={(e) => toggleMenu(e)}>
              &#9776;
            </div>
          </div>
       
         
        <div className={`${menuOpen ? Style.menu3 : Style.close}`}>
          <div className={Style.menuItems}>
            <ul className={Style.mobileMenu}>
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
          </div>
        </div>
      
         
          </div>

        </div>
      )}
    </>
  );
}

export default Navbar2;
