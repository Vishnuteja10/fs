import React from "react";
import Style from "./ContactUs.module.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import videoImg from "../../assets/ContactUs/video.png";
import callImg from "../../assets/ContactUs/call.png";
import locationImg from "../../assets/ContactUs/location.png";
import smsImg from "../../assets/ContactUs/sms.png";
import { useState } from "react";
import Footer2 from "../../components/Footer2/Footer2";
import Footer from "../../components/Footer/Footer";

import playStore from "../../assets/appImages/playstore.png";
import appleStore from "../../assets/appImages/apple-store.png";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function ContactUs() {
  const initialFormData = {
    lastName: "",
    firstName: "",
    email: "",
    message: "",
    serviceType: "",
    contact: "",
    countryCode: "",
    phoneNumber: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const URL = "https://apitest.fracspace.com/api/v1/webApi/contactUs";

  const submitContactDetails = async () => {
    try {
      const response = await axios.post(URL, formData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "Fracspace@2024"
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log("error is", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission

    if (!formData.contact) {
      alert("Contact is required");
      return;
    }

    submitContactDetails();
    setShowSuccessMessage(true);

    // alert("Form submitted!");
    setFormData(initialFormData);
    console.log("Form data:", formData);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 6000);
  };

  const handlePhoneChange = (value, country) => {
    const countryCode = country.dialCode;
    const phone = value.slice(country.dialCode.length);
    console.log("phone num is", phone);

    setFormData({
      ...formData,
      contact: "+" + value,
      countryCode: "+" + countryCode,
      phoneNumber: phone
    });
  };

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
      </div>
      <div className={Style.navBar}>
        <Navbar2 />
      </div>
      <div className={Style.main2}>
        <div className={Style.header}>Contact Our Friendly Team</div>
        <div className={Style.content}>Let us know how we can help you</div>

        <div className={Style.contactContainer}>
          {/* <div className={Style.contactBox}>
            <div className={Style.imageContainer}>
              <img className={Style.videoImg} src={videoImg}></img>
            </div>
            <div className={Style.contactHeader}>Schedule a meet</div>
            <div className={Style.contactContent}>
              Speak to our friendly team
            </div>
            <div className={Style.contactCTA}>Book Your Slot</div>
          </div> */}

          <div className={Style.contactBox}>
            <div className={Style.container}>
              <div className={Style.container1}>
                <div className={Style.imageContainer}>
                  <img className={Style.videoImg} src={smsImg}></img>
                </div>
              </div>

              <div className={Style.contactHeader}>Chat to support</div>
              <div className={Style.contactContent}>
                we are here to help you
              </div>
              <a className={Style.contactCTA} href="mailto:support@fracspace.com">support@fracspace.com</a>
            </div>
          </div>

          <div className={Style.contactBox}>
            <div className={Style.container}>
              <div className={Style.container1}>
                <div className={Style.imageContainer}>
                  <img className={Style.videoImg} src={locationImg}></img>
                </div>
              </div>
              <div className={Style.contactHeader}>Make a visit</div>
              <div className={Style.contactContent}>visit our office</div>
              <div
                className={Style.contactCTA}
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/3JZiFx6aVkVHrxj29",
                    "_blank"
                  )
                }
              >
                View on google maps
              </div>
            </div>
          </div>

          <div className={Style.contactBox}>
            <div className={Style.container}>
              <div className={Style.container1}>
                <div className={Style.imageContainer}>
                  <img className={Style.videoImg} src={callImg}></img>
                </div>
              </div>
              <div className={Style.contactHeader}>Contact us</div>
              <div className={Style.contactContent}>Mon-Sat 9am-5:30pm</div>
              <div className={Style.contactCTA}>
                +91-98806-26111 <br></br> +91-93555-65604
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.contactForm}>
        <div className={Style.contactOuterContainer}>
          <div className={Style.contactInnerContainer}>
            <div className={Style.contactFormHeader}>Get In Touch</div>
            <div className={Style.contactFormMiniContent}>
              Let us know how can we help you
            </div>
            <div className={Style.formContainer}>
              <form onSubmit={handleSubmit} className={Style.form}>
                <div className={Style.row}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formData?.firstName}
                    onChange={handleChange}
                    className={Style.input}
                  />

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData?.lastName}
                    onChange={handleChange}
                    className={Style.input}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData?.email}
                  onChange={handleChange}
                  className={Style.inputEmail}
                />

                <PhoneInput
                  country={"us"}
                  value={formData.contact}
                  onChange={handlePhoneChange}
                  inputStyle={{
                    width: "100%",
                    height: "6vh",
                    fontSize: "12px"
                  }}
                  // inputStyle={Style.phoneInput}
                  required
                  className={Style.formControl}
                />

                {/* <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+91 Phone Number"
                  value={formData?.phoneNumber}
                  onChange={handlePhoneChange}
                  className={Style.inputPhone}
                /> */}

                <select
                  name="serviceType"
                  value={formData?.serviceType}
                  onChange={handleChange}
                  required
                  className={Style.inputEmail} // You can use a different class if needed
                >
                  <option value="">Select a Service Type</option>
                  <option value="Co Ownership">Co Ownership</option>
                  <option value="Travel & Accomodation">
                    Travel & Accomodation
                  </option>
                  <option value="Buy, Sell, Rent a Property">
                    Buy, Sell , Rent a Property
                  </option>
                  <option value="Property Management">
                    Property Management
                  </option>
                </select>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData?.message}
                  onChange={handleChange}
                  className={Style.textarea}
                  required
                />

                {/* <div className={Style.checkboxContainer}>
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData?.agreeTerms}
                    onChange={handleChange}
                    className={Style.checkbox}
                  />
                  <label>
                    By clicking this, I agree to the{" "}
                    <a href="/terms">terms and conditions</a>
                  </label>
                </div> */}

                <button type="submit" className={Style.submitButton}>
                  Submit
                </button>

                {showSuccessMessage && (
                  <div className={Style.successMessage}>
                    Thank you for reaching out! We’ve received your inquiry and
                    our team is already on it. Expect a response from us
                    shortly.
                  </div>
                )}
              </form>
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
