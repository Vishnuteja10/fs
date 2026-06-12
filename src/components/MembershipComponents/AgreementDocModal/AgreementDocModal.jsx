import React from "react";
import Style from "./AgreementDocModal.module.css";
import MembershipTerms from "../../../Pages/MembershipTerms/MembershipTerms";
import MembershipTermsModal from "../MembershipTermsModal";

function AgreementDocModal({ onClose }) {
  return (
    <div className={Style.overlay}>
      <div className={Style.modal}>
        <div className={Style.header}>
          <h2 className={Style.heading}>Membership Terms and Conditions</h2>
          <button
            className={Style.closeBtn}
            onClick={onClose}
            aria-label="Close agreement"
          >
            ✕
          </button>
        </div>
        <div className={Style.termsModalContent}>
          {/* <MembershipTerms /> */}
          <MembershipTermsModal />
        </div>
        {/* <div
          className={Style.content}
          dangerouslySetInnerHTML={{ __html: agreementHtml }}
        /> */}
      </div>
    </div>
  );
}

export default AgreementDocModal;
