import React, { useState } from "react";
import Style from "./AgreementModal.module.css";
import AgreementDocModal from "../AgreementDocModal/AgreementDocModal";

function AgreementModal({ onClose, onPayNow }) {
  const [accepted, setAccepted] = useState(false);
  const [showDocModal, setShowDocModal] = useState(false);

  return (
    <div className={Style.overlay}>
      <div className={Style.modal}>
        {/* Header */}
        <div className={Style.modalHeader}>
          <div className={Style.headerLeft}>
            <div className={Style.modalIcon}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0C447C"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>

            <div>
              <h3 className={Style.headerTitle}>Confirm Payment</h3>
              <p className={Style.headerSubtitle}>
                Review the payment details before proceeding.
              </p>
            </div>
          </div>

          <button
            className={Style.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className={Style.divider} />

        {/* Payment Summary */}
        <div className={Style.summaryBlock}>
          <p className={Style.summaryLabel}>Payment Summary</p>

          <div className={Style.summaryRow}>
            <span>Booking Amount</span>
            <span className={Style.summaryValue}>₹25000</span>
          </div>

          <div className={Style.summaryRow}>
            <span>Platform Fee (2.2%)</span>
            <div className={Style.priceGroup}>
              <span className={Style.strikePrice}>₹550</span>
              {/* <span className={Style.freeTag}>FREE</span> */}
            </div>
          </div>

          <div className={Style.summaryRow}>
            <span>GST (18% on Platform Fee)</span>
            <div className={Style.priceGroup}>
              <span className={Style.strikePrice}>₹99</span>
              {/* <span className={Style.freeTag}>FREE</span> */}
            </div>
          </div>

          {/* <div className={Style.offerBanner}>
            🎉 Limited Time Offer: Platform Fee & GST are waived for the next 2
            days.
          </div> */}

          <div className={Style.totalRow}>
            <span className={Style.totalLabel}>Total Payable</span>
            <span className={Style.totalAmount}>₹25000</span>
          </div>
        </div>

        {/* Footer */}
        <div className={Style.footer}>
          <label className={Style.checkboxRow}>
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />

            <span className={Style.checkboxLabel}>
              I have read and agree to the{" "}
              <a
                // href="/membership-terms"
                // target="_blank"
                // rel="noopener noreferrer"
                className={Style.termsLink}
                onClick={() => setShowDocModal(true)}
              >
                Membership Terms & Conditions
              </a>
              .
            </span>
          </label>

          <button
            className={`${Style.payBtn} ${
              !accepted ? Style.payBtnDisabled : ""
            }`}
            disabled={!accepted}
            onClick={onPayNow}
          >
            🔒 Pay ₹2500 Securely
          </button>
        </div>
      </div>
      {showDocModal && (
        <AgreementDocModal onClose={() => setShowDocModal(false)} />
      )}
    </div>
  );
}

export default AgreementModal;
