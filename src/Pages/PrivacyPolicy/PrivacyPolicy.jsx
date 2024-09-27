import React from "react";
import Style from "./PrivacyPolicy.module.css";
import Footer from "../../components/Footer/Footer";

// import playStore from "../../assets/appImages/playstore.png";
// import appleStore from "../../assets/appImages/apple-store.png";

import Navbar2 from "../../components/Navbar2/Navbar2";

import Navbar from "../../components/Navbar/Navbar";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import playStore from "../../assets/appImages/playstore.png";
import appleStore from "../../assets/appImages/apple-store.png";

import watsappImg from "../../assets/appImages/watsapp.png";
import AppIconsComponent from "../../components/AppIconsComponent/AppIconsComponent";

function PrivacyPolicy() {
  return (
    <ScrollToTop>

      <div className={Style.main}>

        <AppIconsComponent />


{/*         
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
        </div> */}

        <div className={Style.navBar}>
          <Navbar2 />
        </div>
        <div className={Style.PrivacyPolicy}>
          <h1 className={Style.mainHeader}>PRIVACY POLICY</h1>
          <p>
            Thank you for choosing Fracspace. We prioritize safeguarding your
            privacy and ensuring the security of your personal information. This
            Privacy Policy delineates the kinds of information we may gather
            from you and the measures we take to utilize and safeguard that
            information.
          </p>
          <p>
            By using our services and the website or by otherwise giving us your
            information, you agree to the terms of this Privacy Policy. You also
            expressly consent to our use and disclosure of your Personal
            Information (as defined below) in the manner prescribed under this
            Privacy Policy and further signify your agreement to this Privacy
            Policy and the Terms of Use. If you do not agree to this Privacy
            Policy, kindly do not subscribe to the services, use the website or
            provide us with any of your information.
          </p>
          <h5 className={Style.subHeader}>1. COLLECTION OF INFORMATION</h5>
          <p>
            We may collect information from you, through your use of the website
            or through any engagement with Fracspace. We may collect and process
            personal information provided by you, including information that you
            provide at the time of registration including any information that
            identifies or can be used to identify, contact or locate the user
            such as name, address, email address and phone number.
          </p>
          <p>
            Any data that is automatically captured by the website such as your
            mobile phone operating system, every computer/mobile device
            connected to the internet is given a domain name and a set of
            numbers that serve as that computer's Internet Protocol or “IP”
            address. When you request a page from any page within the website,
            our web servers automatically recognize your domain name and IP
            address. The domain name and IP address reveal nothing personal
            about you other than the IP address from which you have accessed the
            website.
          </p>
          <h5 className={Style.subHeader}>
            2. USE OF THE INFORMATION COLLECTED{" "}
          </h5>
          <p>
            The company collects information primarily to facilitate the
            provision of services. This information may be used in various ways,
            including:
          </p>
          <ul className={Style.listItems}>
            <li>Providing services to you</li>
            <li>Assisting sellers and partners in order handling</li>
            <li>Monitoring and enhancing service quality</li>
            <li>Analyzing website usage and diagnosing technical issues</li>
            <li>Storing basic information for easier access</li>
            <li>Confirming identity and eligibility for website use</li>
            <li>Notifying you of website changes</li>
            <li>Meeting legal and regulatory obligations</li>
            <li>Sending administrative notices and service-related alerts</li>
            <li>
              Conducting market research, troubleshooting, and fraud prevention.
            </li>
          </ul>
          <h5 className={Style.subHeader}>3. INFORMATION SHARING</h5>
          <h6 className={Style.subHeader2}>Personal Information</h6>
          <p>
            We might disclose your personal information to third-party service
            providers who aid us in delivering our Fracspace App, including
            payment processors, customer service providers, and analytics
            providers. Additionally, we may share your personal information if
            mandated by law, or if we deem such disclosure necessary to
            safeguard our legal rights or adhere to legal obligations.
          </p>
          <h6 className={Style.subHeader2}>Non-Personal Information</h6>
          <p>
            The Company collects non-personal information from website visitors,
            stored in server logs, which cannot identify individuals. Through
            our web server, we gather anonymous data like web server cookies, IP
            addresses, domain servers, computer, and web browser types. Users
            can terminate accounts anytime, but information may remain in server
            archives after deletion.
          </p>
          <h5 className={Style.subHeader}>4. YOUR CHOICES AND RIGHTS</h5>
          <p>
            You have the option to opt out of receiving promotional
            communications from us at any time. This can be done by contacting
            us through our Fracspace website or by following the opt-out
            instructions provided in our communications.
          </p>
          <h5 className={Style.subHeader}>5. DATA SECURITY</h5>
          <p>
            We implement suitable measures to safeguard your personal
            information from unauthorized access, disclosure, or misuse.
            Nevertheless, it's important to note that no data transmission over
            the internet or any wireless network can be guaranteed to be
            completely secure.
          </p>
          <h5 className={Style.subHeader}>6. CHANGES TO PRIVACY POLICY </h5>
          <p>
            Please check our Privacy Policy and Terms of Use regularly for
            updates. We may revise these documents to reflect changes in our
            information practices. We'll notify you of significant updates by
            posting the last updated date, placing a notice on our Platform, or
            sending an email as required by law.
          </p>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
}

export default PrivacyPolicy;
