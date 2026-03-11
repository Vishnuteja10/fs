import React from "react";
import styles from "./DataDeletionPolicy.module.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";
import AppIconsComponent from "../../components/AppIconsComponent/AppIconsComponent";

export const metadata = {
  title: "Data Deletion Request | Fracspace",
  description:
    "Learn how to request deletion of your personal data from Fracspace systems."
};

export default function DataDeletionPolicy() {
  return (
    <div>
      <AppIconsComponent />
      <div className={styles.navBar}>
        <Navbar2 />
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Data Deletion Request</h1>

          {/* Section 1 */}
          <section className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              At <strong>Fracspace</strong>, we respect your privacy and give
              you full control over your personal data. This page explains how
              you can request deletion of your personal information from our
              systems.
            </p>
          </section>

          {/* Section 2 */}
          <section className={styles.section}>
            <h2>2. What Data We Collect</h2>
            <p>Depending on how you interact with us, we may collect:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing details</li>
              <li>Usage data</li>
              <li>Device and browser information</li>
              <li>Any information submitted through forms</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className={styles.section}>
            <h2>3. Your Right to Request Data Deletion</h2>
            <p>You have the right to request:</p>
            <ul>
              <li>Deletion of your personal data</li>
              <li>Removal of your account</li>
              <li>Withdrawal of previously given consent</li>
              <li>Erasure of data processed for marketing purposes</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className={styles.section}>
            <h2>4. How to Request Data Deletion</h2>

            <h3 className={styles.subheading}>Option 1: Email Request</h3>
            <p>
              Send an email to:
              <a href="mailto:support@fracspace.com" className={styles.link}>
                {" "}
                support@fracspace.com
              </a>
            </p>
            <p>
              <strong>Subject line:</strong> “Data Deletion Request”
            </p>

            <p>Include:</p>
            <ul>
              <li>Your full name</li>
              <li>Registered email address</li>
              <li>Phone number (if applicable)</li>
              <li>Description of your request</li>
            </ul>

            <h3 className={styles.subheading}>
              Option 2: Account Dashboard (If Applicable)
            </h3>
            <p>Log in → Go to Settings → Click “Delete Account”</p>
          </section>

          {/* Section 5 */}
          <section className={styles.section}>
            <h2>5. Verification Process</h2>
            <p>For security purposes, we may:</p>
            <ul>
              <li>Verify your identity</li>
              <li>Request additional information</li>
              <li>Confirm ownership of the account</li>
            </ul>
            <p>We do this to prevent unauthorized deletion requests.</p>
          </section>

          {/* Section 6 */}
          <section className={styles.section}>
            <h2>6. Processing Timeline</h2>
            <p>
              Requests are processed within <strong>7–30 business days</strong>.
            </p>
            <p>You will receive confirmation once deletion is completed.</p>
          </section>

          {/* Section 7 */}
          <section className={styles.section}>
            <h2>7. Exceptions</h2>
            <p>We may retain certain data if:</p>
            <ul>
              <li>Required by law</li>
              <li>Necessary for fraud prevention</li>
              <li>Required for legal disputes</li>
              <li>Needed for financial reporting compliance</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className={styles.section}>
            <h2>8. Third-Party Data</h2>
            <p>
              If your data has been shared with trusted third-party service
              providers (e.g., payment processors, analytics platforms), we will
              instruct them to delete your data where applicable.
            </p>
          </section>

          {/* Section 9 */}
          <section className={styles.section}>
            <h2>9. Contact Us</h2>
            <p>If you have questions regarding data deletion:</p>
            <p>
              Email:{" "}
              <a href="mailto:support@fracspace.com" className={styles.link}>
                support@fracspace.com
              </a>
            </p>
            <p>
              Address: 4th floor Dreamscape Hotel, Road no.12, Banjara hills,
              Hyderabad
            </p>
          </section>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
