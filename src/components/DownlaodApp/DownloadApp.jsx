import React from "react";
import Style from "./DownloadApp.module.css";

import playstore from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";

import androidQR from "../../assets/QRcodes/androidQR.png";
import appstoreQR from "../../assets/QRcodes/appstoreQR.png";

import phoneImg from "../../assets/images/phoneImg.png";

export default function DownloadApp() {
  return (
    <section className={Style.outerContainer}>
      <div className={Style.main}>
        <div className={Style.leftContainer}>
          <div className={Style.header}>
            {" "}
            Find your perfect property deal in seconds! Download Fracspace App
            today!
          </div>
          <div className={Style.content}>
            {/* Find your perfect property deal in seconds! Get the Fracspace App today! */}
          </div>
          <div className={Style.appStoreImagesContainer}>
            <div className={Style.iconAndQrContainer}>
              <div>
                <img
                  className={Style.appIcon}
                  alt="Download on google play store"
                  src={playstore}
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.fracspace",
                      "_blank"
                    )
                  }
                ></img>
              </div>
              {/* <img
                className={Style.qrCode}
                alt="Android QR code"
                src={androidQR}
              ></img> */}
            </div>

            <div className={Style.iconAndQrContainer}>
              <div>
                <img
                  className={Style.appIcon}
                  alt="Download on App Store"
                  src={appstore}
                  onClick={() =>
                    window.open(
                      "https://apps.apple.com/in/app/fracspace/id6498551006",
                      "_blank"
                    )
                  }
                ></img>
              </div>
              {/* <img
                className={Style.qrCode}
                alt="App store QR code"
                src={appstoreQR}
              ></img> */}
            </div>
          </div>
        </div>

        <div className={Style.appMockup}>
          <div>
            <img alt="Fracspace app on mobile device" src={phoneImg}></img>
          </div>
        </div>
      </div>
    </section>
  );
}
