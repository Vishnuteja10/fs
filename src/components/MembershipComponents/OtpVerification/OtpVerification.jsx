import React from "react";
import Style from "./OtpVerification.module.css";

function OtpVerification({
  phoneNumber,
  otp,
  setOtp,
  onVerify,
  onClose,
  loading,
  error
}) {
  return (
    <section>
      <div className={Style.overlay}>
        <div className={Style.card}>
          <button className={Style.closeBtn} onClick={onClose}>
            ✕
          </button>

          <h2>Phone Verification</h2>

          <p>
            Enter OTP sent to
            <strong> {phoneNumber}</strong>
          </p>

          <input
            type="text"
            value={otp}
            maxLength={6}
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
          />

          {error && <p className={Style.error}>{error}</p>}

          <button
            className={Style.verifyBtn}
            onClick={onVerify}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default OtpVerification;
