import React from "react";
import Style from "./PaymentSuccess.module.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";
import { CheckCircle } from "lucide-react";

import qrCodeImg from "../../assets/Memberships/qr.png";

import appStoreImg from "../../assets/appImages/apple-store.png";
import playStoreImg from "../../assets/appImages/playstore.png";

function PaymentSuccess() {
  return (
    <ScrollToTop>
      <div>
        <div>
          <Navbar2 />
        </div>
        <div>
          <div className={Style.container}>
            <div className={Style.card}>
              <div className={Style.iconWrapper}>
                <CheckCircle size={80} />
              </div>

              <h1 className={Style.heading}>Payment Successful!</h1>

              <p className={Style.description}>
                Thank you for your investment. Your payment has been
                successfully processed and your membership is now being
                activated.
              </p>

              <div className={Style.divider}></div>

              <h2 className={Style.subHeading}>Download Our App</h2>

              <p className={Style.appDescription}>
                Scan the QR code below to download the app and manage your
                investments, rewards, profile, and membership details anytime.
              </p>

              <div className={Style.qrContainer}>
                <img
                  src={qrCodeImg}
                  alt="App Download QR Code"
                  className={Style.qrCode}
                />
              </div>

              <p className={Style.qrText}>
                Scan this QR code using your phone camera
              </p>

              <div className={Style.storeButtons}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.fracspace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={playStoreImg}
                    alt="Get it on Google Play"
                    className={Style.playStore}
                  />
                </a>

                <a
                  href="https://apps.apple.com/in/app/fracspace/id6498551006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={appStoreImg}
                    alt="Download on the App Store"
                    className={Style.appStore}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
}

export default PaymentSuccess;
