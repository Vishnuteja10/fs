import React from "react";
import Style from "./HowFsWorks.module.css";
import fsVideo from "../../../assets/videos/HowFsWorks/HowFsWorks.mp4";

import { useMediaQuery } from "react-responsive";

function HowFsWorks() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div className={Style.main1}>
      {!isMobile ? (
        <div className={Style.main}>
          <div className={Style.videoContainer}>
            <video
              className={Style.videoContent}
              controls
              src={fsVideo}
            ></video>
          </div>
          <div className={Style.contentContainer}>
            <div className={Style.header}>
              How <span className={Style.name}>Fracspace</span> Works ?
            </div>
            <div className={Style.content}>
              <span className={Style.fracspaceContent}>  Explore our
              property catalog through our mobile app or consult with our
              investment experts to craft your ideal investment plan. </span>
            </div>
          </div>
        </div>
      ) : (
        <div className={Style.main2}>
          <div className={Style.contentContainer}>
            <div className={Style.header}>
              How <span className={Style.name}>Fracspace</span> Works ?
            </div>
            <div className={Style.content}>
              <span className={Style.fracspaceContent}> Fracspace </span>is the
              premier event for luxury real brought to you by Fracspace. Our
              mission is to connect to developers, investors, and homebuyers
              with the most of innovative and exclusive properties from around
              the world.
            </div>
          </div>
          <div className={Style.videoContainer}>
            <video
              className={Style.videoContent}
              controls
              src={fsVideo}
            ></video>
          </div>
        </div>
      )}
    </div>
  );
}

export default HowFsWorks;
