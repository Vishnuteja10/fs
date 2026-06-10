import React from "react";
import Style from "./PaymentSuccess.module.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";
import { CheckCircle } from "lucide-react";

import qrCodeImg from "../../assets/Memberships/qr.png";

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

              {/* <button
                className={Style.button}
                onClick={() =>
                  window.open("https://your-app-link.com", "_blank")
                }
              >
                Download App
              </button> */}
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
