import React from "react";
import Style from "./EmployeeStories.module.css";
import img1 from "../../assets/employeeStories/emp1.png";

function EmployeeStories() {
  return (
    <div className={Style.main}>
      <div className={Style.employeeDetails}>
        <div className={Style.imageContainer}>
          <img src={img1}></img>
        </div>
        <div className={Style.info}>
          <div className={Style.header}>EMPLOYEE STORY</div>
          <div className={Style.description}>
            Working here has been an incredible experience from day one!Working
            here has been an incredible experience from day one!Working here has
            been an incredible experience from day one!
          </div>
          <div className={Style.jobRole}>
          <hr></hr>
            <div className={Style.name}>John Doe</div>
            <div className={Style.role}>Sales Head</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeStories;
