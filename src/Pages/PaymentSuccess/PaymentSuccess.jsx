import React, { useEffect, useState } from "react";
import Style from "./PaymentSuccess.module.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";
import { CheckCircle } from "lucide-react";

import qrCodeImg from "../../assets/Memberships/qr.png";

import appStoreImg from "../../assets/appImages/apple-store.png";
import playStoreImg from "../../assets/appImages/playstore.png";

import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AlertTriangle } from "lucide-react";

function PaymentSuccess() {
  const [loading, setLoading] = useState(true);
  const [isValidPayment, setIsValidPayment] = useState(false);
  const navigate = useNavigate();

  const [name, setName] = useState();

  const [searchParams] = useSearchParams();

  const txnId = searchParams.get("txnid");

  // console.log("txnId is", txnId);

  const VERIFY_PAYMENT =
    "https://apitest.fracspace.com/api/v1/escapeInvestment/verifyPayment";

  const verifyPayment = async () => {
    if (!txnId) {
      setLoading(false);
      setIsValidPayment(false);

      setTimeout(() => {
        navigate("/");
      }, 30000);

      return;
    }

    try {
      const response = await axios.post(
        VERIFY_PAYMENT,
        { txnID: txnId },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Fracspace@2024"
          }
        }
      );

      // console.log("resp is", response);

      if (response?.data?.success) {
        const userName = response?.data?.investment?.memberDetails?.name;
        setName(userName);
        setIsValidPayment(true);
      } else {
        setIsValidPayment(false);

        // setTimeout(() => {
        //   navigate("/");
        // }, 30000);
      }
    } catch (error) {
      // console.log(error);

      setIsValidPayment(false);

      // setTimeout(() => {
      //   navigate("/");
      // }, 30000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [txnId]);

  return (
    <ScrollToTop>
      <div>
        <div>
          <Navbar2 />
        </div>
        <div className={Style.container}>
          <div className={Style.card}>
            {loading ? (
              <>
                <h1 className={Style.heading}>Verifying Payment...</h1>
                <p className={Style.description}>
                  Please wait while we verify your transaction.
                </p>
              </>
            ) : isValidPayment ? (
              <>
                <div className={Style.iconWrapper}>
                  <CheckCircle size={80} />
                </div>

                <h1 className={Style.heading}>Payment Successful!</h1>

                <p className={Style.description}>
                  Thank you <span className={Style.nameHighlight}>{name}</span>{" "}
                  for your investment. Your payment has been successfully
                  processed and your membership is now being activated.
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
                  <div className={Style.storeButtons}>
                    {" "}
                    <a
                      href="https://play.google.com/store/apps/details?id=com.fracspace"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <img
                        src={playStoreImg}
                        alt="Get it on Google Play"
                        className={Style.playStore}
                      />{" "}
                    </a>{" "}
                    <a
                      href="https://apps.apple.com/in/app/fracspace/id6498551006"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <img
                        src={appStoreImg}
                        alt="Download on the App Store"
                        className={Style.appStore}
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </>
            ) : (
              <div className={Style.invalidPaymentContainer}>
                <div>
                  <div className={Style.invalidIconWrapper}>
                    <AlertTriangle className={Style.invalidIcon} />
                  </div>

                  <h1 className={Style.invalidHeading}>
                    Invalid Payment Details
                  </h1>

                  <p className={Style.invalidDescription}>
                    We could not verify your payment details. This may happen if
                    the transaction was cancelled, expired, or an invalid
                    transaction ID was provided.
                  </p>

                  <p className={Style.supportText}>
                    If the amount was deducted from your account, please contact
                    our support team with your transaction reference.
                  </p>
                </div>
              </div>
            )}
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
