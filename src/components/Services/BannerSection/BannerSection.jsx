import React from 'react'
import Style from './BannerSection.module.css'
import arrowRight from '../../../assets/ServicesPage/arrowRight.png'

import { Link as ScrollLink } from "react-scroll";

import { useNavigate } from 'react-router-dom';

function BannerSection() {
  const navigate = useNavigate()
  return (
    <div className={Style.main}>
        <div className={Style.mainContent}>
            <div className={Style.header}>Need something done? <br></br>We got you covered</div>
            <div className={Style.content}>All the services you need under one roof, from<br></br> construction to interior design to property management </div>
            <div className={Style.btnContainer}>
            <ScrollLink to="upcomingServices" smooth={true} duration={200}>
                <button className={Style.seeServices}>See Services <img src={arrowRight}></img></button> 
                </ScrollLink>
                  <button className={Style.enquire} onClick={()=>navigate('/contact')}>Enquire Now</button>
            </div>
        </div>
    </div>
  )
}

export default BannerSection 