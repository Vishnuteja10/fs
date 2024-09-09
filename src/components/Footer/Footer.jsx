import React, { useState } from "react";
import Style from "./Footer.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

import img1 from "../../assets/footer/Instagram.png";
import img2 from "../../assets/footer/Facebook.png";
import img3 from "../../assets/footer/Twitter.png";
import img4 from "../../assets/footer/Youtube.png";

import img5 from "../../assets/footer/apple.png";
import img6 from "../../assets/footer/android.png";

import { useNavigate } from "react-router-dom";

import axios from "axios";

function Footer() {
  const navigate = useNavigate();

  const [email,setEmail] = useState("");

  const [error, setError] = useState("");

  const URL = 'https://apitest.fracspace.com/api/v1/webApi/newsLetter'

   // Email validation function
   const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const submitEmailDetails = async()=>{

    try {
       
      const response = await axios.post(URL, {email } ,{
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'Fracspace@2024'
        }
      });

      console.log("response is",response?.data?.success)

      if(response?.data?.success){

        setError("Thanks for subscribing!");
         
        setTimeout(() => {
          setEmail(""); // Clear the email input
          setError(""); // Clear any existing error
        }, 2000);
      }
     
      
    } catch (error) {
        setError("Something Went Wrong! we are working on it")
        setTimeout(() => {
          setEmail(""); // Clear the email input
          setError(""); // Clear any existing error
        }, 2000);
    }
    
      
  }

  const handleEmailSubscription  = () =>{
    if (email === "") {
      setError("Please enter your email address.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      console.log("Email is:", email);
      // setError("Thanks for subscribing!");
      
      submitEmailDetails() 
    }
  }


  return (
    <div className={Style.main}>
      <div className={Style.section1}>
        <div className={Style.content}>
          Join our news letter to<br></br> keep up to date with us!
        </div>
        <div className={Style.emailContainer}>
          <div>
            <input
              className={Style.email}
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <button onClick={handleEmailSubscription} className={Style.btn}>Subscribe</button>
          </div>
        </div>
      </div>

      {error && <div className={Style.error}>{error}</div>}

      <p className={Style.line}></p>

      <div className={Style.section2}>
        <div className={Style.container1}>
          <div className={Style.header}>Fracspace</div>
          <div className={Style.fracspaceContent}>
            Fracspace offers innovative fractional investment opportunities,
            allowing you to own a share of luxury properties and unique real
            estate projects. Explore our platform to discover how you can invest
            smartly and enjoy exclusive benefits.
          </div>
        </div>

        <div className={Style.container2}>
          <div className={Style.quickLinks}>
            <div className={Style.header2}>Quick Links</div>
            <div className={Style.links}>
              <div onClick={() => navigate("/")}>Home</div>
              <div onClick={() => navigate("/howitworks")}>How it works</div>
              <div onClick={() => navigate("/services")}>Services</div>
              <div onClick={() => navigate("/meetourteam")}>Our Team</div>
              <div onClick={() => navigate("/contact")}>Contact</div>
              <div onClick={() => navigate("/careers")}>Careers</div>
            </div>
          </div>

          <div className={Style.addressContainer}>
            <div className={Style.header2}>Contact Info</div>

            <div className={Style.address}>
              <div>136A, Lane No-12, MLA Colony, NBT Nagar</div>
              <div>Road No.12, Banjara Hills,</div>
              <div>Hyderabad,Telangana, 500034</div>
            </div>

            <div className={Style.email}>support@fracspace.com</div>
            <div className={Style.phone}>+91 93555 65604</div>
          </div>
          
        </div>
      </div>

      <div className={Style.followUsContainer}>
        <div className={Style.followUs}>Follow us at</div>

        <div className={Style.images}>

          <span className={Style.imageContainer} onClick={() => window.open("https://www.instagram.com/fracspace/", "_blank")}>
            <img src={img1} className={Style.instagramIcon}></img>
          </span>

          <span className={Style.imageContainer} onClick={() => window.open("https://m.facebook.com/p/Fracspace-100085853381915/", "_blank")}>
            <img src={img2} className={Style.facebookIcon}></img>
          </span>

          {/* <span className={Style.imageContainer} onClick={() => window.open("https://apps.apple.com/in/app/fracspace/id6498551006", "_blank")}>
            <img src={img3} className={Style.twitterIcon}></img>
          </span> */}

          <span className={Style.imageContainer} onClick={() => window.open("https://www.youtube.com/@FracspaceLimited", "_blank")}>
            <img src={img4} className={Style.youtubeIcon}></img>
          </span>

        </div>
      </div>

      <div className={Style.getAppContainer}>
        <div>
          <div className={Style.getApp}>Get the app</div>
          <div className={Style.btnsContainer}>
            <button onClick={() => window.open("https://apps.apple.com/in/app/fracspace/id6498551006", "_blank")}>
              <img src={img5} alt="ios logo"></img>{" "}
              <div className={Style.iosContent}>IOS</div>
            </button>

            <button className={Style.btn} onClick={() => window.open("https://play.google.com/store/apps/details?id=com.fracspace", "_blank")} >
              <img src={img6} alt="android logo"></img>{" "}
              <div className={Style.btnContent}>Android</div>
            </button>
          </div>
        </div>
      </div>

      <p className={Style.line2}></p>

      <div className={Style.section3}>
        <div className={Style.copyRights}>
          © 2024 <span className={Style.fs}>Fracspace</span>.All rights reserved
        </div>
        <div className={Style.terms}>
          <div onClick={() => navigate("/privacypolicy")}>Privacy Policy</div>
          <div onClick={() => navigate("/terms")}>Terms Of Service</div>
          <div onClick={() => navigate("/refundpolicy")}>Refund Policy</div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
