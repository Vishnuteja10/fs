import React, { useState } from "react";
import Style from "./ContactForm.module.css";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

import axios from "axios";

function ContactForm() {
  const initialFormData = {
    lastName: "",
    firstName: "",
    email: "",
    message: "",
    address: "",
    contact: "",
    countryCode: "",
    phoneNumber: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const URL = 'https://apitest.fracspace.com/api/v1/webApi/submitFormForChannelPartner';

  const PDF_URL = '/channelpartner.pdf'


  // // Function to trigger the PDF download
  // const downloadPDF = () => {
  //   const link = document.createElement("a");
  //   link.href = PDF_URL;
  //   link.download = "Channel_Partner_Registration.pdf"; // Name of the file when downloaded
  //   document.body.appendChild(link); // Append link to the body
  //   link.click();
  //   document.body.removeChild(link); 
  // };

  const submitContactDetails = async () => {
    try {
      const response = await axios.post(URL, formData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "Fracspace@2024"
        }
      });

      // downloadPDF()
      console.log("response is",response);
    } catch (error) {
      console.log("error is", error);
    }
  };

  // Handle input changes for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission

    if (!formData.contact) {
      alert("Contact is required");
      return;
    }

    console.log("form data is",formData)

    submitContactDetails();
    setShowSuccessMessage(true);

    // alert("Form submitted!");
    setFormData(initialFormData);
    // console.log("Form data:", formData);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 6000);
  };

  const handlePhoneChange = (value, country) => {
    const countryCode = country.dialCode;
    const phone = value.slice(country.dialCode.length);
    // console.log("phone num is", phone);

    setFormData({
      ...formData,
      contact: "+" + value,
      countryCode: "+" + countryCode,
      phoneNumber: phone
    });
  };

  return (
    <div>
      <div className={Style.contactForm}>
        <div className={Style.contactOuterContainer}>
          <div className={Style.contactInnerContainer}>
            <div className={Style.contactFormHeader}>
              Channel Partner Registration
            </div>
            <div className={Style.contactFormMiniContent}>
              Fill out the registration form below
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
                  country={"in"}
                  value={formData.contact}
                  onChange={handlePhoneChange}
                  inputStyle={{
                    width: "100%",
                    height: "6vh",
                    fontSize: "1rem"
                  }}
                  // inputStyle={Style.phoneInput}
                  required
                  className={Style.formControl}
                />

                <textarea
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData?.address}
                  onChange={handleChange}
                  className={Style.textarea} 
                  required
                  // Same class as for full-width fields
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData?.message}
                  onChange={handleChange}
                  className={Style.textarea}
                  required
                />

                <button type="submit" className={Style.submitButton}>
                  Submit
                </button>

              {showSuccessMessage && <div className={Style.successMessage}>
                We have successfully received your information, and our team will 
                      get back to you shortly.
                </div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
