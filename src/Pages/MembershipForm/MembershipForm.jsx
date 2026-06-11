import React, { useEffect } from "react";
import Style from "./MembershipForm.module.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import axios from "axios";
import AgreementModal from "../../components/MembershipComponents/AgreementModal/AgreementModal";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

import OtpVerification from "../../components/MembershipComponents/OtpVerification/OtpVerification";

import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom";

function MembershipForm() {
  const location = useLocation();
  const [showAgreementModal, setShowAgreementModal] = useState(false);
  const [regLoader, setRegLoader] = useState(false);
  const [otp, setOtp] = useState();
  const [userId, setUserId] = useState();
  const [pdfBase64, setPdfBase64] = useState("");
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    ifscCode: "",
    bankName: "",
    aadharNumber: "",
    panNumber: "",
    guardianName: "",
    address: "",
    convertToBase64: true,
    investmentPlanId: "",
    investmentPlanName: ""
  });

  const CREATE_AGREEMENT =
    "https://apitest.fracspace.com/api/v1/escapeInvestment/createAgreement";

  const CREATE_PAYMENT =
    "https://apitest.fracspace.com/api/v1/escapeInvestment/initiatePayment";

  const REGISTER =
    "https://apitest.fracspace.com/api/users/userRegisterationWithoutPassword";

  const LOGIN_API =
    "https://apitest.fracspace.com/api/users/loginWithPhoneNumber";

  const VERIFY_API =
    "https://apitest.fracspace.com/api/users/loginOTPverificationWithPhoneNumber";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "investmentPlanId") {
      const planName =
        value === "6a1fea05bde30274e617d727" ? "Escape Silver" : "Escape Black";

      setFormData((prev) => ({
        ...prev,
        investmentPlanId: value,
        investmentPlanName: planName
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value, country) => {
    const countryCode = country.dialCode;
    const phone = value.slice(country.dialCode.length);
    // console.log("phone num is", phone);

    setFormData((prev) => ({
      ...prev,
      contact: "+" + value,
      countryCode: "+" + countryCode,
      phoneNumber: phone
    }));

    // console.log("after phone number", formData);
  };

  const registerUser = async (e) => {
    e.preventDefault();
    // console.log("user registration!");
    if (!formData.phoneNumber || formData.phoneNumber.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setRegLoader(true);

    try {
      const response = await axios.post(
        REGISTER,
        {
          userName: formData?.name,
          phoneNumber: formData?.contact,
          email: formData?.email,
          countryCode: formData?.countryCode,
          webSignUp: "true"
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Fracspace@2024"
          }
        }
      );

      // console.log("user registration", response);
      if (response.data.success) {
        setRegLoader(false);
        await loginUser();
      }
    } catch (error) {
      setRegLoader(false);
      if (error.response?.status == 409) {
        loginUser();
      }
      console.log("error is", error);
      // console.log("Status:", error.response?.status);
      // console.log("Data:", error.response?.data);
      // console.log("Message:", error.message);
    }
  };

  const loginUser = async () => {
    setRegLoader(true);
    try {
      // console.log("inside user login!", formData?.phoneNumber);
      const response = await axios.post(
        LOGIN_API,
        { phoneNumber: formData?.phoneNumber, smsCountry: true },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Fracspace@2024"
          }
        }
      );
      // console.log("user login response", response);
      if (response?.data?.success) {
        setRegLoader(false);
        setShowOtpScreen(true);
      }
    } catch (error) {
      setRegLoader(false);
      console.log("error is", error);
      // console.log("Status:", error.response?.status);
      // console.log("Data:", error.response?.data);
      // console.log("Message:", error.message);
    }
  };

  const verifyUser = async () => {
    // console.log("Inside user verification");
    setRegLoader(true);
    if (!otp || otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }
    try {
      const response = await axios.post(
        VERIFY_API,
        { phoneNumber: formData?.contact, otp: otp, smsCountry: true },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Fracspace@2024"
          }
        }
      );
      setJwtToken(response?.data?.data);
      // console.log(" verification resp is", response);
      const decoded = jwtDecode(response?.data?.data);
      // console.log("decode jwt", decoded);
      setUserId(decoded?.id);
      setShowOtpScreen(false);
      const userId = decoded?.id;
      setOtp("");
      setRegLoader(false);
      await handleSubmit(userId);
    } catch (error) {
      console.log("error is", error);
      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);
      console.log("Message:", error.message);
      setRegLoader(false);
    }
  };

  const handleSubmit = async (userId) => {
    setRegLoader(true);
    console.log("form data is", formData, "user id is", userId);
    const payload = {
      ...formData,
      userId
    };
    try {
      const response = await axios.post(CREATE_AGREEMENT, payload, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "Fracspace@2024"
        }
      });
      console.log("resp is", response);

      setRegLoader(false);

      setPdfBase64(response.data.base64);
      setShowAgreementModal(true);
    } catch (error) {
      setRegLoader(false);
      console.log("error is", error);
      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);
      console.log("Message:", error.message);
    }
  };

  const handlePayNow = async () => {
    console.log("handling payment", "userid", userId);
    const paymentDetails = {
      userId: userId,
      email: formData?.email,
      investmentPlanId: formData?.investmentPlanId,
      amount: "1",
      surl: "https://www.fracspace.com/paymentsuccess",
      furl: "https://www.fracspace.com/paymentfailure",
      memberDetails: {
        name: formData.name,
        ifscCode: formData.ifscCode,
        bankName: formData.bankName,
        adhaarNumber: formData.aadharNumber,
        panNumber: formData.panNumber,
        guardianName: formData.guardianName,
        address: formData.address
      }
    };

    try {
      // setShowAgreementModal(false);
      const response = await axios.post(CREATE_PAYMENT, paymentDetails, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "Fracspace@2024"
        }
      });
      console.log("payment response", response);
      if (response.data.success) {
        const div = document.createElement("div");
        div.innerHTML = response.data.form;

        document.body.appendChild(div);

        const form = document.getElementById("payment_post");

        if (form) {
          form.submit();
        }
      }
    } catch (error) {
      console.log("error creating payment", error);
      console.log("Status:", error?.response?.status);
      console.log("Data:", error?.response?.data);
      console.log("URL:", error?.config?.url);
    }
  };

  return (
    <ScrollToTop>
      <div>
        <div className={Style.navBar}>
          <Navbar2 />
        </div>
        <div className={Style.memForm}>
          <div className={Style.container}>
            <form className={Style.form} onSubmit={registerUser}>
              <div className={Style.noteBox}>
                <span className={Style.noteLabel}>Note:</span>
                Existing Fracspace clients and registered users must use their
                registered email address and phone number while completing this
                form.
              </div>
              <h2 className={Style.heading}>Investor Details</h2>

              <div className={Style.grid}>
                <div className={Style.formGroup}>
                  <label>Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                  />
                </div>

                <div className={Style.formGroup}>
                  <label>Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                  />
                </div>

                <div className={Style.formGroup}>
                  <label>Phone Number</label>
                  <PhoneInput
                    country={"in"}
                    value={formData.contact}
                    onChange={handlePhoneChange}
                    inputStyle={{
                      width: "100%",
                      height: "6.5vh",
                      padding: "4px 14px",
                      fontSize: "14px"
                    }}
                    required
                    placeholder="99999 99999"
                    className={Style.formControl}
                  />
                  {/* <input
                    required
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  /> */}
                </div>

                <div className={`${Style.formGroup} ${Style.highlightField}`}>
                  <label>
                    Select Membership Plan
                    <span className={Style.requiredBadge}>Important</span>
                  </label>

                  <select
                    name="investmentPlanId"
                    value={formData.investmentPlanId}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Plan</option>

                    <option value="6a1fea05bde30274e617d727">
                      Escape Silver
                    </option>

                    <option value="6a1fe9fcbde30274e617d723">
                      Escape Black
                    </option>
                  </select>
                </div>
                {/* <div className={Style.formGroup}>
                  <label>Select Membership Plan</label>
                  <select
                    name="investmentPlanId"
                    value={formData.investmentPlanId}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Plan</option>
                    <option value="6a1fea05bde30274e617d727">
                      Escape Silver
                    </option>

                    <option value="6a1fe9fcbde30274e617d723">
                      Escape Black
                    </option>
                  </select>
                </div> */}

                <div className={Style.formGroup}>
                  <label>Bank Name</label>
                  <input
                    required
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    placeholder="Enter Bank Name"
                  />
                </div>

                <div className={Style.formGroup}>
                  <label>IFSC Code</label>
                  <input
                    required
                    type="text"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleChange}
                    placeholder="Enter IFSC Code"
                  />
                </div>

                <div className={Style.formGroup}>
                  <label>Aadhaar Number</label>
                  <input
                    required
                    type="text"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleChange}
                    placeholder="XXXX XXXX XXXX"
                  />
                </div>

                <div className={Style.formGroup}>
                  <label>PAN Number</label>
                  <input
                    required
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    placeholder="ABCDE1234F"
                  />
                </div>

                <div className={Style.formGroup}>
                  <label>Guardian Name (Optional)</label>
                  <input
                    type="text"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleChange}
                    placeholder="Enter Guardian Name"
                  />
                </div>
              </div>

              <div className={Style.formGroup}>
                <label>Address</label>
                <textarea
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Enter Address"
                />
              </div>

              {!regLoader ? (
                <button type="submit" className={Style.submitButton}>
                  Register
                </button>
              ) : (
                <button className={Style.submitButton}>Please Wait...</button>
              )}
            </form>

            {showOtpScreen && (
              <OtpVerification
                phoneNumber={formData.contact}
                otp={otp}
                setOtp={setOtp}
                onVerify={verifyUser}
                onClose={() => {
                  setShowOtpScreen(false);
                  setOtp("");
                  setVerificationError("");
                }}
                error={verificationError}
              />
            )}

            {showAgreementModal && (
              <AgreementModal
                base64Pdf={pdfBase64}
                onClose={() => setShowAgreementModal(false)}
                onPayNow={handlePayNow}
              />
            )}
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
}

export default MembershipForm;
