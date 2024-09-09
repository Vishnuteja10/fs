import React from "react";
import Style from "./WeManage.module.css";
import WeManageImg from "../../../assets/HowItWorks/WeManage.png";
import VectorIcon from "../../../assets/HowItWorks/VectorIcon.png";

import { useMediaQuery } from "react-responsive";

import { useNavigate } from "react-router-dom";

function WeManage() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const navigate = useNavigate()

  return (
    <div className={Style.main}>
      <div className={Style.imageContainer}>
        <img src={WeManageImg}></img>
      </div>

      <div className={Style.content}>
        <div className={Style.header}>We Take Care Of Everything!</div>
        <div className={Style.manageList}>
          <div>
            <div className={Style.list}>
              {" "}
              <span className={Style.manageImageContainer}>
                {" "}
                <img className={Style.vectorImage} src={VectorIcon}></img>{" "}
              </span>{" "}
              Comprehensive Property Management
            </div>
            <div className={Style.list}>
              {" "}
              <span className={Style.manageImageContainer}>
                {" "}
                <img className={Style.vectorImage} src={VectorIcon}></img>{" "}
              </span>{" "}
              Personalized Investment Planning
            </div>
            <div className={Style.list}>
              {" "}
              <span className={Style.manageImageContainer}>
                {" "}
                <img className={Style.vectorImage} src={VectorIcon}></img>{" "}
              </span>{" "}
              Guaranteed Returns
            </div>
            <div className={Style.list}>
              {" "}
              <span className={Style.manageImageContainer}>
                {" "}
                <img className={Style.vectorImage} src={VectorIcon}></img>{" "}
              </span>{" "}
              Efficient SPV Formation and Management
            </div>

            <div className={Style.list}>
              {" "}
              <span className={Style.manageImageContainer}>
                {" "}
                <img className={Style.vectorImage} src={VectorIcon}></img>{" "}
              </span>{" "}
              Free legal assistance
            </div>
          </div>
        </div>

        <div className={Style.btnContainer}>
          <button onClick={()=>navigate('/contact')}>Enquire Now</button>
        </div>
      </div>
    </div>
  );
}

export default WeManage;
