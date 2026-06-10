import React, { useEffect, useState } from "react";
import Style from "./AgreementModal.module.css";

function AgreementModal({ base64Pdf, onClose, onPayNow }) {
  const [pdfUrl, setPdfUrl] = useState("");
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (!base64Pdf) return;

    const byteCharacters = atob(base64Pdf);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    const blob = new Blob([byteArray], {
      type: "application/pdf"
    });

    const url = URL.createObjectURL(blob);

    setPdfUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [base64Pdf]);

  return (
    <div className={Style.overlay}>
      <div className={Style.modal}>
        <button className={Style.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h2 className={Style.heading}>Investment Agreement</h2>

        <iframe src={pdfUrl} title="Agreement" className={Style.iframe} />

        <div className={Style.bottomSection}>
          <label className={Style.checkboxContainer}>
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />

            <span>
              I have read and agree to the terms and conditions of this
              agreement.
            </span>
          </label>

          <button
            disabled={!accepted}
            className={`${Style.payBtn} ${!accepted ? Style.disabled : ""}`}
            onClick={onPayNow}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgreementModal;
