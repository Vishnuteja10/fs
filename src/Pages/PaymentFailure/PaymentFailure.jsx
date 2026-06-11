import React, { useEffect, useState } from "react";
import Style from "./PaymentFailure.module.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";

import { XCircle, AlertTriangle } from "lucide-react";

import { useNavigate, useSearchParams } from "react-router-dom";

import axios from "axios";

function PaymentFailure() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const txnId = searchParams.get("txnid");

  const [loading, setLoading] = useState(true);
  const [isValidTransaction, setIsValidTransaction] = useState(false);

  const VERIFY_PAYMENT =
    "https://apitest.fracspace.com/api/v1/escapeInvestment/verifyPayment";

  const verifyPayment = async () => {
    if (!txnId) {
      setLoading(false);
      setIsValidTransaction(false);
      return;
    }

    try {
      const response = await axios.post(
        VERIFY_PAYMENT,
        {
          txnID: txnId
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Fracspace@2024"
          }
        }
      );

      // console.log(response);

      if (response?.data?.success) {
        setIsValidTransaction(true);
      } else {
        setIsValidTransaction(false);
      }
    } catch (error) {
      // console.log(error);
      setIsValidTransaction(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [txnId]);

  return (
    <ScrollToTop>
      <Navbar2 />

      <div className={Style.container}>
        <div className={Style.card}>
          {loading ? (
            <>
              <h1 className={Style.heading}>Verifying Payment...</h1>

              <p className={Style.description}>
                Please wait while we verify your transaction.
              </p>
            </>
          ) : !isValidTransaction ? (
            <>
              <div className={Style.iconWrapper}>
                <AlertTriangle size={80} />
              </div>

              <h1 className={Style.heading}>Invalid Payment Details</h1>

              <p className={Style.description}>
                We could not find any payment associated with the provided
                transaction ID.
              </p>

              <div className={Style.buttonContainer}>
                <button
                  className={Style.homeButton}
                  onClick={() => navigate("/")}
                >
                  Go To Home
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={Style.iconWrapper}>
                <XCircle size={80} />
              </div>

              <h1 className={Style.heading}>Payment Failed</h1>

              <p className={Style.description}>
                Unfortunately, your payment could not be completed. This may
                have occurred due to network issues, payment interruption, bank
                decline, insufficient balance, or an unexpected technical issue.
              </p>

              <div className={Style.reasonBox}>
                <h3>What can you do?</h3>

                <ul>
                  <li>Verify your payment details.</li>

                  <li>Ensure sufficient account balance.</li>

                  <li>Check your internet connection.</li>

                  <li>Try a different payment method if available.</li>

                  <li>Retry the payment after a few minutes.</li>
                </ul>
              </div>

              <div className={Style.buttonContainer}>
                <button
                  className={Style.retryButton}
                  onClick={() => navigate(-1)}
                >
                  Retry Payment
                </button>

                <button
                  className={Style.homeButton}
                  onClick={() => navigate("/")}
                >
                  Go To Home
                </button>
              </div>

              <p className={Style.supportText}>
                If the amount was debited but your payment still shows as
                failed, please contact our support team with your transaction
                reference number.
              </p>
            </>
          )}
        </div>
      </div>

      <Footer />
    </ScrollToTop>
  );
}

export default PaymentFailure;
