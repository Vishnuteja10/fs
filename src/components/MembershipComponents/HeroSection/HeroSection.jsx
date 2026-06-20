import React, { useState } from "react";
import Style from "./HeroSection.module.css";
import axios from "axios";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    countryCode: "",
    phoneNumber: "",
    membershipPlan: "",
    message: "",
    source: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData?.contact) {
      alert("Phone Number is required!");
      return;
    }

    // console.log("form data is", formData);

    try {
      setLoading(true);

      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "Fracspace@2024"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert("Enquiry submitted successfully!");

        setFormData({
          name: "",
          email: "",
          contact: "",
          countryCode: "",
          phoneNumber: "",
          membershipPlan: "",
          message: "",
          source: ""
        });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={Style.container}>
      <div className={Style.overlay} />

      <div className={Style.content}>
        <div className={Style.leftContent}>
          <h1 className={Style.heading}>
            The Luxury Membership
            <br />
            That <span>Pays You Back</span>
          </h1>

          <p className={Style.description}>
            Enjoy curated luxury stays, exclusive privileges, and annual rewards
            – all through a membership designed to deliver value beyond
            vacations.
          </p>
          {/* 
          <div className={Style.contactInfo}>
            {" "}
            <p>
              {" "}
              <strong>India:</strong> +91 98765 43210{" "}
            </p>{" "}
            <p>
              {" "}
              <strong>USA:</strong> +1 (646) 555-1234{" "}
            </p>{" "}
          </div> */}
        </div>

        <div className={Style.formCard}>
          <h3 className={Style.formTitle}>Enquire Now</h3>

          <form className={Style.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData?.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData?.email}
              onChange={handleChange}
              required
            />

            {/* <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            /> */}

            <PhoneInput
              country={"in"}
              value={formData?.contact}
              onChange={handlePhoneChange}
              inputStyle={{
                width: "100%",
                height: "6vh",
                fontSize: "1rem"
              }}
              required
              className={Style.formControl}
            />

            <select
              name="membershipPlan"
              value={formData?.membershipPlan}
              onChange={handleChange}
              required
            >
              <option value="">Select Membership Plan</option>
              <option value="silver">Silver Membership</option>
              <option value="black">Black Membership</option>
            </select>

            <textarea
              rows="4"
              name="message"
              placeholder="Ask Your Queries"
              onChange={handleChange}
              value={formData?.message}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
            <div className={Style.contactInfo}>
              {" "}
              <p>
                {" "}
                <strong>India:</strong> +91 98806 26111{" "}
              </p>{" "}
              <p>
                {" "}
                <strong>USA:</strong> +1 850-640-6407{" "}
              </p>{" "}
            </div>
          </form>
        </div>
      </div>

      <div className={Style.bottomCurve} />
    </section>
  );
};

export default HeroSection;
