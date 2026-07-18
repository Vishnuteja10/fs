import React from "react";
import Style from "./RefundPolicy.module.css";
// import Footer from "../../components/Footer/Footer";

import Footer from "../../components/Footer/Footer";

// import playStore from "../../assets/appImages/playstore.png";
// import appleStore from "../../assets/appImages/apple-store.png";

import Navbar2 from "../../components/Navbar2/Navbar2";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import playStore from "../../assets/appImages/playstore.png";
import appleStore from "../../assets/appImages/apple-store.png";

import watsappImg from "../../assets/appImages/watsapp.png";
import AppIconsComponent from "../../components/AppIconsComponent/AppIconsComponent";

function RefundPolicy() {
  return (
    <ScrollToTop>
    <div className={Style.main}>

      <AppIconsComponent />

    {/* <div className={Style.appIconsContainer}>
          <div
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.fracspace",
                "_blank"
              )
            }
          >
            <img className={Style.playStore} src={playStore}></img>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://apps.apple.com/in/app/fracspace/id6498551006",
                "_blank"
              )
            }
          >
            <img className={Style.appleStore} src={appleStore}></img>
          </div>

          <div
            onClick={() => window.open("https://wa.me/9880626111", "_blank")}
          >
            <img
              className={`${Style.watsapp} ${Style.bounce}`}
              src={watsappImg}
            ></img>
          </div>
        </div> */}

       <div className={Style.navBar}>
           <Navbar2 />
       </div>
      <div className={Style.refundPolicy}>
        <h1 className={Style.header}>REFUND &amp; CANCELLATION POLICY</h1>
        
        <h5 className={Style.subHeader}>1. Purpose</h5>
        <p>
          Thank you for using Fracspace. This Refund &amp; Cancellation Policy (&quot;Policy&quot;) governs the cancellation of bookings, reservation payments, purchases, and refund requests made through the Fracspace website, mobile application, and any related services (collectively, the &quot;Platform&quot;).
        </p>
        <p>
          By accessing or using the Platform, you acknowledge that you have read, understood, and agreed to this Policy in conjunction with the Terms of Use and any transaction-specific documentation executed between you and Fracspace.
        </p>

        <h5 className={Style.subHeader}>2. Nature of the Services</h5>
        <p>
          Fracspace facilitates opportunities for users to participate in fractional ownership of selected real estate assets through legally structured investment arrangements. Users acknowledge that acquiring a fractional ownership interest constitutes an investment decision and is not the purchase of a standard consumer product. Accordingly, refund rights are limited and subject to the terms of this Policy and the applicable transaction documents. Please carefully review all property details, terms, and conditions carefully before proceeding with a purchase.
        </p>

        <h5 className={Style.subHeader}>3. Booking Fees</h5>
        <p>
          Where applicable, users may be required to pay a booking fees or similar advance payment to reserve an investment opportunity. These fees are non-refundable unless explicitly stated otherwise.
        </p>
        <p>
          In case of a cancellation request, Fracspace reserves the right to deduct cancellation charges. The seven-day free look period applies only to the booking amount of INR 10,000 or INR 25,000, as may be applicable. If you choose to opt out after the 7th day, the booking amount will not be refunded.
        </p>

        <h5 className={Style.subHeader}>4. Exit Before Stipulated Lock-In Period</h5>
        <p>
          In the event of an exit before the stipulated lock-in period, Fracspace will forfeit 10% of the frac amount as part of the cancellation charges, with only the remaining balance being refunded.
        </p>

        <h5 className={Style.subHeader}>5. Investor Cancellation Before Completion</h5>
        <p>
          Where a user voluntarily withdraws before completion of the investment process, Fracspace may permit cancellation subject to:
        </p>
        <ul>
          <li>the stage of the transaction;</li>
          <li>documentation already executed;</li>
          <li>third-party costs already incurred;</li>
          <li>applicable taxes, statutory levies and processing charges; and</li>
          <li>the terms of the relevant investment documentation.</li>
        </ul>
        <p>
          Any eligible refund shall be processed after deducting applicable charges and expenses.
        </p>

        <h5 className={Style.subHeader}>6. Company-Initiated Cancellation</h5>
        <p>
          Fracspace reserves the right to cancel or withdraw an investment opportunity where reasonably necessary, including but not limited to circumstances involving:
        </p>
        <ul>
          <li>regulatory restrictions;</li>
          <li>legal or title-related issues;</li>
          <li>insufficient investor participation;</li>
          <li>failure to acquire or complete the proposed property transaction;</li>
          <li>force majeure events; or</li>
          <li>any other circumstance beyond Fracspace&apos;s reasonable control.</li>
        </ul>
        <p>
          Where an investment is cancelled by Fracspace before allotment, Fracspace may, at its discretion:
        </p>
        <ul>
          <li>offer an alternative investment opportunity; or</li>
          <li>refund eligible amounts received from the investor.</li>
        </ul>
        <p>
          Fracspace shall make all reasonable efforts to notify affected users in a timely manner and refunds shall generally be processed within ninety (90) business days unless a longer period is required due to regulatory, banking or legal processes.
        </p>

        <h5 className={Style.subHeader}>7. Technical Errors and Failed Transactions</h5>
        <p>
          If payment is successfully debited from the user&apos;s bank account but the corresponding transaction is not reflected on the Platform due to a technical error, payment gateway failure or banking issue, Fracspace shall investigate the transaction with the relevant payment service provider. Bank processing timelines may vary depending on the payment method used.
        </p>

        <h5 className={Style.subHeader}>8. Duplicate or Excess Payments</h5>
        <p>
          Where duplicate payments are received due to technical issues or user error, Fracspace may refund the excess amount after verification of the transaction. Processing fees, payment gateway charges or other non-recoverable third-party costs may be deducted where applicable.
        </p>

        <h5 className={Style.subHeader}>9. Unauthorized Transactions</h5>
        <p>
          Users must immediately notify Fracspace if they believe an unauthorized transaction has occurred. Fracspace reserves the right to request additional documentation, identity verification and information necessary to investigate the matter. Where an unauthorized transaction is verified, Fracspace shall process an appropriate refund or take other corrective measures in accordance with applicable law.
        </p>

        <h5 className={Style.subHeader}>10. Refund Process</h5>
        <p>
          To request a refund, users must contact the customer support team through the designated channels specified on the Platform and provide relevant information regarding the purchase, including transaction details and the reason for the refund request. Fracspace will review the refund request and respond within a reasonable timeframe.
        </p>

        <h5 className={Style.subHeader}>11. Mode of Refund</h5>
        <p>
          Approved refunds shall ordinarily be credited to the original payment method used for the transaction. Where this is not reasonably possible, Fracspace may require additional verification before processing the refund through an alternative payment method.
        </p>

        <h5 className={Style.subHeader}>12. Taxes, Charges and Deductions</h5>
        <p>
          To the extent permitted by applicable law and the relevant transaction documents, refunds, where applicable, may be subject to deduction of payment gateway charges, banking charges, taxes already remitted, statutory duties, documentation expenses, third-party professional fees and any other costs incurred in connection with processing the investment.
        </p>

        <h5 className={Style.subHeader}>13. KYC and Regulatory Verification</h5>
        <p>
          Fracspace reserves the right to reject, suspend or cancel any transaction where:
        </p>
        <ul>
          <li>KYC verification cannot be completed;</li>
          <li>inaccurate or misleading information is provided;</li>
          <li>required documentation is not furnished;</li>
          <li>anti-money laundering or sanctions screening requirements are not satisfied; or</li>
          <li>the transaction would otherwise violate applicable law.</li>
        </ul>
        <p>
          Any refund in such circumstances shall be determined after considering applicable legal requirements and expenses already incurred.
        </p>

        <h5 className={Style.subHeader}>14. Fraudulent Activity</h5>
        <p>
          Fracspace reserves the right to withhold or deny refunds where there is reasonable evidence of:
        </p>
        <ul>
          <li>fraudulent activity;</li>
          <li>payment disputes initiated in bad faith;</li>
          <li>misuse of the Platform;</li>
          <li>identity theft;</li>
          <li>chargeback abuse; or</li>
          <li>violation of the Terms of Use.</li>
        </ul>
        <p>
          Fracspace may also report suspected fraudulent conduct to the appropriate authorities.
        </p>

        <h5 className={Style.subHeader}>15. Amendments</h5>
        <p>
          Fracspace reserves the right to amend this Policy from time to time. Any revised version shall become effective upon publication on the Platform unless otherwise stated.
        </p>

        <h5 className={Style.subHeader}>16. Contact</h5>
        <p>
          For questions relating to this Policy or to submit a refund request, users may contact Customer Support by writing to the email: <a href="mailto:support@fracspace.com">support@fracspace.com</a>
        </p>

        <h5 className={Style.subHeader}>17. Governing Law</h5>
        <p>
          This Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising from this Policy shall be resolved in accordance with the dispute resolution provisions contained in the Terms of Use or the applicable transaction documents.
        </p>
      </div>

      <div>
        <Footer />
      </div>
    </div>
    </ScrollToTop>
  );
}

export default RefundPolicy;
