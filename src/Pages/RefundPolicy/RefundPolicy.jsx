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

function RefundPolicy() {
  return (
    <ScrollToTop>
    <div className={Style.main}>

    <div className={Style.appIconsContainer}>
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
        </div>

       <div className={Style.navBar}>
           <Navbar2 />
       </div>
      <div className={Style.refundPolicy}>
        <h1 className={Style.header}>REFUND POLICY</h1>
        <p>
          Thank you for using Fracspace. This Refund Policy outlines the terms
          and conditions under which refunds are provided for the services
          offered on the Fracspace website and mobile application ( "Website"
          and "App"). Please read this policy carefully before making any
          purchases or engaging with our services.
        </p>
        <p>
         <strong> 1. Fractional Ownership:  </strong>Fracspace offers fractional ownership of real
          estate properties. Once a fractional ownership purchase is made, it is
          considered final. We encourage users to carefully review all property
          details, terms, and conditions before proceeding with a purchase
        </p>
        <p>
        <strong> 2. Booking and Reservation Fees:</strong> For bookings and reservations made
          through the Fracspace platform, certain fees may be applicable. These
          fees are non-refundable unless explicitly stated otherwise. We
          recommend reviewing the specific terms and conditions related to each
          booking or reservation before confirming your payment.
        </p>
        <p>
        <strong> 3. Cancellation of Services:</strong> If Fracspace cancels a confirmed booking
          or reservation due to unforeseen circumstances or any other reasons, a
          full refund will be provided to the user. We will make all reasonable
          efforts to notify affected users in a timely manner and process the
          refund as quickly as possible within 60 days.
        </p>
        <p>
        <strong>  4. Technical Issues and Service Disruptions:  </strong>In the event of technical
          issues or service disruptions that prevent users from accessing or
          utilizing our services as intended, Fracspace will make every effort
          to rectify the situation promptly. If, however, we are unable to
          provide a satisfactory solution or if the user is unable to use the
          purchased service due to these issues, a refund may be considered on a
          case-by-case basis.
        </p>
        <p>
        <strong>  5. Unauthorized Charges: </strong> If you suspect unauthorized charges have been
          made on your account in relation to Fracspace services, please contact
          our customer support immediately. We will investigate the matter
          thoroughly and take appropriate action. If the charges are confirmed
          to be unauthorized, a refund will be processed promptly.
        </p>
        <p>
        <strong> 6. Requesting a Refund: </strong> To request a refund, please contact our
          customer support team through the designated channels specified on the
          Website or App. You will be required to provide relevant information
          regarding your purchase, including transaction details and the reason
          for the refund request. We will review your request and respond to you
          within a reasonable timeframe.
        </p>
        <p>
        <strong>  7. Changes to the Refund Policy: </strong>Fracspace reserves the right to
          modify or update this Refund Policy at any time. Any changes will be
          effective immediately upon posting on the Website and App. It is your
          responsibility to review this policy periodically to stay informed
          about our refund procedures.
        </p>
        <p>
          If you have any questions or concerns about our refund policy, please
          contact our customer support team for further assistance. Write to
          customer <br></br> <strong>  support –{" "}
          <a href="mailto:support@fracspace.com">support@fracspace.com</a></strong>
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
