import React from "react";
import Style from "./AgentStories.module.css";
import img1 from "../../../assets/Agents/img3.jpeg";

function AgentStories() {
  return (
    <div className={Style.container}>
      <div className={Style.main}>
        <div className={Style.imageContainer}>
          <img src={img1}></img>
        </div>

        <div className={Style.rightContainer}>
          <div className={Style.headerContainer}>
            <div className={Style.header}> OUR AGENTS SUCCESS STORY</div>
          </div>
          <div className={Style.contentContainer}>
            <div>
              Joining Fracspace was a game-changer for my real estate career.
              The community support and resources have helped me double my sales
              in just one year!
            </div>
          </div>
          <div className={Style.detailsContainer}>
            <div className={Style.name}>Advik Saro</div>
            <div className={Style.role}>Real Estate Agent</div>
          </div>
        </div>
      </div>

      <div className={Style.arrows}>

      </div>
    </div>
  );
}

export default AgentStories;
