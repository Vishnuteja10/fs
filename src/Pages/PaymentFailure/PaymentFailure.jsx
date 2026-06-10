import React from "react";
import Style from "./PaymentFailure.module.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";

import { XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PaymentFailure() {
  const navigate = useNavigate();

  return (
    <ScrollToTop>
      <div>
        <Navbar2 />
      </div>
      <div>
        <div className={Style.container}>
          <div className={Style.card}>
            <div className={Style.iconWrapper}>
              <XCircle size={80} />
            </div>

            <h1 className={Style.heading}>Payment Failed</h1>

            <p className={Style.description}>
              Unfortunately, your payment could not be completed. This may have
              occurred due to network issues, payment interruption, bank
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
              If the amount was debited but your payment still shows as failed,
              please contact our support team with your transaction reference
              number.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default PaymentFailure;
