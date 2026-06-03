import React, { useState } from "react";
import Style from "./MembershipForm.module.css";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

import axios from "axios";

function MembershipForm({ selectedPlan, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    countryCode: "",
    phoneNumber: "",
    message: "",
    source: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

  const URL =
    "https://apitest.fracspace.com/api/v1/escapeInvestment/requestMembershipEnquiry";

  const submitContactDetails = async () => {
    const payload = {
      ...formData,
      membershipPlan: selectedPlan
    };
    try {
      const response = await axios.post(URL, payload, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "Fracspace@2024"
        }
      });

      // console.log("form data", formData);

      // console.log("res is", response);
    } catch (error) {
      console.log("error is", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.contact) {
      alert("Phone Number is required!");
      return;
    }

    submitContactDetails();

    // console.log(payload);

    alert("Enquiry submitted successfully!");

    onClose();
  };

  return (
    <div className={Style.overlay}>
      <div className={Style.modal}>
        <button className={Style.closeBtn} onClick={onClose}>
          ×
        </button>

        <h2>Membership Enquiry</h2>

        <form onSubmit={handleSubmit}>
          <div className={Style.formGroup}>
            <label>Name</label>

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              onChange={handleChange}
            />
          </div>

          <div className={Style.formGroup}>
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
            />
          </div>

          <div className={Style.formGroup}>
            <label>Phone Number</label>

            {/* <input
              type="tel"
              name="phone"
              required
              placeholder="Your Phone Number"
              onChange={handleChange}
            /> */}
            <PhoneInput
              country={"in"}
              value={formData.contact}
              onChange={handlePhoneChange}
              inputStyle={{
                width: "100%",
                height: "6vh",
                fontSize: "1rem"
              }}
              required
              className={Style.formControl}
            />
          </div>

          <div className={Style.formGroup}>
            <label>Selected Membership</label>

            <input type="text" value={selectedPlan} readOnly />
          </div>

          <div className={Style.formGroup}>
            <label htmlFor="source">How did you hear about us?</label>
            <select
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
            >
              <option value="">Select Source</option>
              <option value="google">Google Search</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
              <option value="youtube">YouTube</option>
              <option value="friend">Friend / Referral</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="event">Expo</option>
              <option value="blog">Blog / Article</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={Style.formGroup}>
            <label>Message</label>

            <textarea
              rows="4"
              name="message"
              placeholder="Ask Your Queries"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={Style.submitBtn}>
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default MembershipForm;
