import React from "react";
import Style from "./WeManage.module.css";
import WeManageImg from "../../../assets/HowItWorks/WeManage.png";
import  WeManageImg1 from '../../../assets/HowItWorks/WeManage1.png';
import WeManageImg2 from '../../../assets/HowItWorks/WeManage4.png'


import VectorIcon from "../../../assets/HowItWorks/VectorIcon.png";

import { useMediaQuery } from "react-responsive";

import { useNavigate } from "react-router-dom";

function WeManage() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const navigate = useNavigate()

  return (
    <section className={Style.main}>
      <div className={Style.imageContainer}>
        <img src={WeManageImg1}></img>
      </div>

      <div className={Style.content}>
        <h2 className={Style.header}>We take care of everything!</h2>
        <div className={Style.manageList}>
          <div>

            <article className={Style.list}>
              {" "}
              <span className={Style.manageImageContainer}>
                {" "}
                <img className={Style.vectorImage} src={VectorIcon} alt="Comprehensive property management illustration"></img>{" "}
              </span>{" "}
              Comprehensive Property Management
            </article>

            <article className={Style.list}>
              {" "}
              <span className={Style.manageImageContainer}>
                {" "}
                <img className={Style.vectorImage} src={VectorIcon}></img>{" "}
              </span>{" "}
              Personalized Investment Planning
            </article>

            {/* <div className={Style.list}>
              {" "}
              <span className={Style.manageImageContainer}>
                {" "}
                <img className={Style.vectorImage} src={VectorIcon}></img>{" "}
              </span>{" "}
              Guaranteed Returns
            </div> */}

            {/* <div className={Style.list}>
              {" "}
              <span className={Style.manageImageContainer}>
                {" "}
                <img className={Style.vectorImage} src={VectorIcon}></img>{" "}
              </span>{" "}
              Efficient SPV Formation and Management
            </div> */}

            <article className={Style.list}>
              {" "}
              <span className={Style.manageImageContainer}>
                {" "}
                <img className={Style.vectorImage} src={VectorIcon}></img>{" "}
              </span>{" "}
              Free legal assistance
            </article>
          </div>
        </div>

        <div className={Style.btnContainer}>
          <button onClick={()=>navigate('/contact')}>Enquire Now</button>
        </div>
      </div>
    </section>
  );
}

export default WeManage;
