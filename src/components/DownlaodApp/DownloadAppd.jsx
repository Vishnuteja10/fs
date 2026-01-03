import React from "react";
import Style from "./DownloadApp.module.css";

import playstore from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";

import phoneImg from '../../assets/images/phoneImg.png'

export default function DownloadApp() {
  return (
    <div className={Style.main}>
      <div className={Style.leftContainer}>
        <div className={Style.header}>Download app and start your search</div>
        <div className={Style.content}>
          Explore exclusive investment opportunities, manage your properties,
          and stay updated on the latest real estate trends all in one app.
        </div>
        <div className={Style.appStoreImagesContainer}>
          <img src={playstore}></img>
          <img src={appstore}></img>
        </div>
      </div>

      <div className={Style.appMockup}>
        <div>
            <img src={phoneImg}></img>
        </div>
      </div>
    </div>
  );
}
