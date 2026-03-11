import React from "react";
import Style from "./WeManage.module.css";
import  WeManageImg1 from '../../../assets/HowItWorks/WeManage1.png';

import VectorIcon from "../../../assets/HowItWorks/vectorIcon.png";

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
              <span className={Style.text}>Comprehensive Property Management</span>
            </article>

            <article className={Style.list}>
              {" "}
              <span className={Style.manageImageContainer}>
                {" "}
                <img className={Style.vectorImage} src={VectorIcon}></img>{" "}
              </span>{" "}
              <span className={Style.text}>Personalized Investment Planning</span>
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
              <span className={Style.text}>Free legal assistance</span>
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
