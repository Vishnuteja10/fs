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

        <div className={Style.navBar}>
          <Navbar2 />
        </div>
        <div className={Style.PrivacyPolicy}>
          <h1 className={Style.mainHeader}>PRIVACY POLICY</h1>
          <p>
            This Privacy Policy describes how Fracspace (“we,” “us,” or “our”)
            collects, uses, discloses, and protects your personal information
            when you access or use our app and website (collectively referred to
            as the “Service”). We are committed to safeguarding your privacy and
            ensuring your personal information is handled responsibly.
          </p>
          {/* <p>
            By using our services and the website or by otherwise giving us your
            information, you agree to the terms of this Privacy Policy. You also
            expressly consent to our use and disclosure of your Personal
            Information (as defined below) in the manner prescribed under this
            Privacy Policy and further signify your agreement to this Privacy
            Policy and the Terms of Use. If you do not agree to this Privacy
            Policy, kindly do not subscribe to the services, use the website or
            provide us with any of your information.
          </p> */}
          <h5 className={Style.subHeader}>1. Information We Collect</h5>
          <p>a. Personal Information</p>
          <p>
            While using our Service, we may ask you to provide us with certain
            identifiable information that can be used to contact or identify
            you. This may include, but is not limited to:
          </p>
          <ul>
            <li>
              <span className={Style.boldContent}>Contact Information:</span> Name, email address, phone number, and
              mailing address.
            </li>
            <li>
              <span  className={Style.boldContent}>Account Information: </span>Username, password, and any other details
              necessary for account creation.
            </li>
            <li>
             <span className={Style.boldContent}> Payment Information:</span>  Credit card numbers, billing information, and
              associated details upon purchase.
            </li>
            <li>
              <span className={Style.boldContent}>Property Information:</span> Information related to properties you wish
              to list, buy, sell, or lease.
            </li>
            <li>
             <span className={Style.boldContent}>Service Preferences:</span>  Data related to your preferences for property
              management and consulting services.
            </li>
          </ul>
          <p>b. Non-Personal Information</p>
          <p>
            We may also collect non-personal identification information whenever
            you interact with our Service, including:
          </p>
          <ul>
            <li>
             <span className={Style.boldContent}>Device Information:</span>   Device type, operating system, and app
              version.
            </li>
            <li> <span className={Style.boldContent}>Log Data:</span> IP addresses, browser type, and access times.</li>
            <li>
              <span className={Style.boldContent}>Usage Data:</span> Information about how you use our app and website.
            </li>
          </ul>

          <h5 className={Style.subHeader}>2. How We Use Your Information</h5>

          <p>
            We may use the information we collect for various purposes,
            including:
          </p>
          <p> <span className={Style.boldContent}>Account Management:</span> To create and manage your user account.</p>
          <p>
           <span className={Style.boldContent}> Service Facilitation: </span>To facilitate fractional ownership of holiday
            homes and connect you with property management and consulting
            services.
          </p>
          <p>
           <span className={Style.boldContent}>Communication:</span> To send you updates, promotional materials, and other
            relevant information.
          </p>
          <p>
           <span className={Style.boldContent}>Customer Support:</span>  To respond to your inquiries and provide
            assistance.
          </p>
          <p> <span className={Style.boldContent}>Analytics:</span>To analyze usage trends and improve our services.</p>
          <p>
           <span className={Style.boldContent}>Legal Compliance:</span> To comply with applicable laws, regulations, and
            legal requests.
          </p>

          <h5 className={Style.subHeader}>
            3. Information Sharing and Disclosure
          </h5>

          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties without your consent, except for:
          </p>

          <p>
           <span className={Style.boldContent}>Service Providers:</span> We may share your information with trusted
            third-party vendors who assist in operating our app or website,
            provided they agree to keep your information confidential.
          </p>
          <p>
          <span className={Style.boldContent}>Legal Compliance:</span>  We may disclose information as required by law or
            to protect our rights or the rights of others.
          </p>
          <p>
           <span className={Style.boldContent}>Business Transfers:</span> Personal information may be transferred in
            connection with a merger, acquisition, or sale of our assets.
          </p>

          <h5 className={Style.subHeader}>4. Data Security</h5>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            disclosure, alteration, or destruction. However, please be aware
            that no method of transmission over the internet is completely
            secure, and we cannot guarantee absolute security.
          </p>

          <h5 className={Style.subHeader}>5. Third-Party Links</h5>
          <p>
            Our app and website may contain links to third-party websites or
            services. We do not have control over these external sites and are
            not responsible for their privacy practices. We encourage you to
            review the privacy policies of these third-party websites.
          </p>

          <h5 className={Style.subHeader}>6. Your Privacy Rights</h5>
          <p>
            You have certain rights regarding your personal information,
            including:
          </p>

          <ul>
            <li>
              The right to access the personal information we hold about you.
            </li>
            <li>
              The right to request correction of any inaccurate information.
            </li>
            <li>The right to request deletion of your personal information.</li>
            <li>The right to withdraw your consent to processing.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the contact
            information provided below.
          </p>

          <h5 className={Style.subHeader}>
            {" "}
            7. Changes to This Privacy Policy
          </h5>
          <p>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with an updated effective date. We encourage you
            to review this Privacy Policy regularly for any updates.
          </p>

          <h5 className={Style.subHeader}>8. Contact Us</h5>
          <p>
            If you have any questions or concerns regarding this Privacy Policy
            or wish to exercise your privacy rights, please contact us at:
          </p>
          <ul>
            <li>Email: support@fracspace.com</li>
            <li>Phone: +91-9880626111</li>
          </ul>

          <p>
            Thank you for choosing Fracspace. We value your privacy and are
            dedicated to protecting your personal information!
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
