import React from "react";
import Style from "./AgreementDocModal.module.css";

function AgreementDocModal({ agreementHtml, onClose }) {
  return (
    <div className={Style.overlay}>
      <div className={Style.modal}>
        <div className={Style.header}>
          <h2 className={Style.heading}>Membership Agreement</h2>
          <button
            className={Style.closeBtn}
            onClick={onClose}
            aria-label="Close agreement"
          >
            ✕
          </button>
        </div>
        <div
          className={Style.content}
          dangerouslySetInnerHTML={{ __html: agreementHtml }}
        />
      </div>
    </div>
  );
}

export default AgreementDocModal;
