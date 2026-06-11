import React, { useEffect, useState } from "react";
import Style from "./AgreementModal.module.css";

import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function AgreementModal({ base64Pdf, onClose, onPayNow }) {
  const [pdfUrl, setPdfUrl] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

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

        {/* <Document
          file={`data:application/pdf;base64,${base64Pdf}`}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => {
            console.log("PDF LOAD ERROR", error);
          }}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={index}
              pageNumber={index + 1}
              width={window.innerWidth < 768 ? 300 : 800}
            />
          ))}
        </Document> */}

        {window.innerWidth > 768 && (
          <iframe src={pdfUrl} className={Style.iframe} title="Agreement" />
        )}

        <div className={Style.openAgreementContainer}>
          <button
            className={Style.openAgreementButton}
            onClick={() => window.open(pdfUrl, "_blank")}
          >
            View Agreement
          </button>
        </div>

        {/* <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={Style.openPdfBtn}
        >
          Open Agreement
        </a> */}

        {/* <iframe src={pdfUrl} title="Agreement" className={Style.iframe} /> */}
        <div className={Style.paymentSummary}>
          <h3 className={Style.summaryHeading}>Payment Summary</h3>

          <div className={Style.summaryRow}>
            <span>Booking Amount</span>
            <span>₹25,000</span>
          </div>

          <div className={Style.summaryRow}>
            <span>Platform Fee (2.2%)</span>
            <span>₹550</span>
          </div>

          <div className={Style.summaryRow}>
            <span>GST (18% on Platform Fee)</span>
            <span>₹99</span>
          </div>

          <div className={Style.summaryDivider}></div>

          <div className={`${Style.summaryRow} ${Style.totalRow}`}>
            <span>Total Payable</span>
            <span>₹25,649</span>
          </div>
        </div>

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
