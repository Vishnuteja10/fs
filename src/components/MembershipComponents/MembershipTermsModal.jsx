import React from "react";
import Style from "./MembershipTermsModal.module.css";

function MembershipTermsModal() {
  return (
    <div className={Style.container}>
      <div className={Style.card}>
        <div className={Style.header}>
          <h1>FRACSPACE ESCAPE MEMBERSHIP™</h1>
          <h2>Terms & Conditions</h2>
        </div>

        <div className={Style.formGroup}>
          <h3>1. PURPOSE</h3>
          <p>
            <strong>1.1</strong> Fracspace Private Limited has introduced a
            lifestyle and hospitality-based membership program known as
            <strong> "Fracspace Escape Membership™".</strong>
          </p>

          <p>
            <strong>1.2</strong> The Membership is intended to provide Members
            with hospitality usage benefits, annual reward benefits, promotional
            privileges, and access to selected Fracspace-managed or affiliated
            hospitality properties and experiences.
          </p>

          <p>
            <strong>1.3</strong> By enrolling in the Fracspace Escape
            Membership™, the Member acknowledges that they have read,
            understood, and agree to be bound by these Terms & Conditions.
          </p>
        </div>

        <div className={Style.formGroup}>
          <h3>2. MEMBERSHIP PLANS & MEMBERSHIP VALUE</h3>

          <p>
            <strong>2.1</strong> Members may enroll in the Fracspace Escape
            Membership™ under any one of the following Membership Plans:
          </p>

          <div className={Style.planCard}>
            <h4>A. Silver Membership</h4>
            <p>
              Upon payment of a one-time Membership Value of{" "}
              <strong>INR 1,00,000/- (Rupees One Lakh Only)</strong>, the Member
              shall be entitled to:
            </p>
            <ul>
              <li>
                Membership validity for a period of Ten (10) Years from the date
                of activation.
              </li>
              <li>
                Up to Four (4) Hospitality Reward Nights during each Membership
                Year.
              </li>
              <li>
                Two (2) Additional Complimentary Nights during each Membership
                Year.
              </li>
              <li>
                Redemption of Hospitality Reward Nights and Additional
                Complimentary Nights at eligible Fracspace properties and
                affiliated hospitality partner properties across India, subject
                to availability and applicable booking policies.
              </li>
            </ul>
          </div>

          <div className={Style.planCard}>
            <h4>B. Black Membership</h4>
            <p>
              Upon payment of a one-time Membership Value of{" "}
              <strong>INR 5,00,000/- (Rupees Five Lakh Only)</strong>, the
              Member shall be entitled to:
            </p>
            <ul>
              <li>
                Membership validity for a period of Ten (10) Years from the date
                of activation.
              </li>
              <li>
                Up to Four (4) Hospitality Reward Nights during each Membership
                Year.
              </li>
              <li>
                Four (4) Additional Complimentary Nights during each Membership
                Year.
              </li>
              <li>
                Redemption of Hospitality Reward Nights and Additional
                Complimentary Nights at eligible Fracspace properties and
                affiliated hospitality partner properties globally, subject to
                availability and applicable booking policies.
              </li>
            </ul>
          </div>

          <p>
            <strong>2.2</strong> The Membership Value shall be payable upfront
            prior to activation of the Membership.
          </p>

          <p>
            <strong>2.3</strong> The Membership is personal in nature and shall
            be governed strictly by these Terms & Conditions.
          </p>
        </div>

        <div className={Style.formGroup}>
          <h3>3. MEMBERSHIP TENURE</h3>

          <p>
            <strong>3.1</strong> The Membership shall remain valid for a period
            of <strong>Ten (10) Years</strong> from the date of activation.
          </p>

          <p>
            <strong>3.2</strong> Upon expiry of the Membership tenure, the
            Membership shall automatically lapse unless renewed or extended by
            the Company at its sole discretion.
          </p>
        </div>

        <div className={Style.formGroup}>
          <h3>4. ANNUAL MEMBER REWARD BENEFITS</h3>

          <p>
            <strong>4.1</strong> Subject to these Terms & Conditions, the Member
            shall be eligible to receive annual reward benefits equivalent to
            <strong> up to Eight Percent (8%) per annum </strong>
            on the Membership Value.
          </p>

          <p>
            <strong>4.2</strong> The annual reward benefit may be credited
            through:
          </p>

          <ul>
            <li>Bank transfer;</li>
            <li>FS Wallet credits;</li>
            <li>Adjustments;</li>
            <li>Promotional credits; or</li>
            <li>Any other mode determined by the Company.</li>
          </ul>

          <p>
            <strong>4.3</strong> The annual reward benefit shall be subject to
            adjustment and reduction based on the Member’s usage of Hospitality
            Reward Nights as specified under Clause 6.
          </p>
        </div>

        <div className={Style.formGroup}>
          <h3>5. STAY BENEFITS & NIGHT REDEMPTION STRUCTURE</h3>

          <p>
            <strong>5.1</strong> During each Membership Year, the Member shall
            be entitled to redeem up to{" "}
            <strong>Four (4) Hospitality Reward Nights</strong> across selected
            Fracspace properties and/or affiliated hospitality partners, subject
            to availability and booking policies.
          </p>

          <p>
            <strong>5.2</strong> Additional Complimentary Nights shall be
            provided based on the Membership Plan:
          </p>

          <ul>
            <li>
              <strong>Silver Membership:</strong> Two (2) Additional
              Complimentary Nights redeemable across India.
            </li>
            <li>
              <strong>Black Membership:</strong> Four (4) Additional
              Complimentary Nights redeemable globally.
            </li>
          </ul>

          <p>
            <strong>5.3</strong> Additional Complimentary Nights:
          </p>

          <ul>
            <li>Have no cash equivalent value.</li>
            <li>Cannot be transferred for monetary benefit.</li>
            <li>Do not affect annual reward entitlement.</li>
            <li>
              Are subject to blackout dates, booking restrictions and
              operational availability.
            </li>
          </ul>
        </div>

        <div className={Style.formGroup}>
          <h3>6. REWARD REDUCTION UPON NIGHT USAGE</h3>

          <p>
            <strong>6.1</strong> Annual reward entitlement is linked to the
            usage or non-usage of the Four (4) Hospitality Reward Nights.
          </p>

          <table className={Style.table}>
            <thead>
              <tr>
                <th>Reward Nights Utilized</th>
                <th>Annual Reward Eligibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0 Nights</td>
                <td>8%</td>
              </tr>
              <tr>
                <td>1 Night</td>
                <td>6%</td>
              </tr>
              <tr>
                <td>2 Nights</td>
                <td>4%</td>
              </tr>
              <tr>
                <td>3 Nights</td>
                <td>2%</td>
              </tr>
              <tr>
                <td>4 Nights</td>
                <td>0%</td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>6.2</strong> Members may maximize reward benefits,
            hospitality usage, or a combination of both.
          </p>

          <p>
            <strong>6.3</strong> Additional Complimentary Nights shall not alter
            the above reward reduction structure.
          </p>
        </div>

        <div className={Style.formGroup}>
          <h3>7. BOOKING & USAGE CONDITIONS</h3>

          <ul>
            <li>All bookings are subject to prior reservation.</li>
            <li>All bookings are subject to availability.</li>
            <li>Blackout dates and property policies apply.</li>
            <li>
              The Company may restrict usage during peak periods, substitute
              properties, modify eligible property lists, revise booking
              windows, or limit consecutive stays.
            </li>
            <li>
              Unused Complimentary or Hospitality Reward Nights may expire
              unless otherwise approved by the Company.
            </li>
          </ul>
        </div>

        <div className={Style.formGroup}>
          <h3>8. MEMBERSHIP BENEFITS</h3>

          <p>The Member may additionally be entitled to:</p>

          <ul>
            <li>Member-only promotional pricing.</li>
            <li>Priority access to selected launches.</li>
            <li>Special offers at affiliated properties.</li>
            <li>Invitations to selected Fracspace events.</li>
            <li>
              Upgrade opportunities into future ownership or hospitality
              products.
            </li>
          </ul>

          <p>
            All benefits shall remain subject to the Company's prevailing
            policies and program guidelines.
          </p>
        </div>

        <div className={Style.formGroup}>
          <h3>9. NATURE OF MEMBERSHIP</h3>

          <ul>
            <li>
              The Membership does not constitute ownership in any immovable
              property.
            </li>
            <li>The Membership does not create tenancy rights.</li>
            <li>
              The Membership is not a debenture, fixed deposit, collective
              investment scheme or security.
            </li>
            <li>
              The Membership is purely a lifestyle and hospitality membership
              program.
            </li>
          </ul>

          <p>
            The Company does not guarantee appreciation, appreciation-linked
            returns or assured profits beyond these Terms & Conditions.
          </p>
        </div>

        <div className={Style.formGroup}>
          <h3>10. TERMINATION & CANCELLATION</h3>

          <ul>
            <li>
              Once activated, the Membership Value shall be non-refundable
              except where approved by the Company.
            </li>
            <li>
              The Company may suspend or terminate Membership for misuse, fraud,
              misconduct, policy violations or unauthorized commercial use.
            </li>
            <li>No cancellation is permitted once activated.</li>
          </ul>
        </div>

        <div className={Style.formGroup}>
          <h3>11. FORCE MAJEURE</h3>

          <p>
            The Company shall not be liable for interruption, suspension or
            non-availability of Membership benefits due to natural calamities,
            pandemics, government restrictions, operational shutdowns, war,
            civil unrest, technical failures or any event beyond its reasonable
            control.
          </p>
        </div>

        <div className={Style.formGroup}>
          <h3>12. LIMITATION OF LIABILITY</h3>

          <p>
            The total liability of the Company arising from these Terms &
            Conditions shall not exceed the Membership Value actually paid by
            the Member.
          </p>
        </div>

        <div className={Style.formGroup}>
          <h3>13. GOVERNING LAW & JURISDICTION</h3>

          <p>
            These Terms & Conditions shall be governed by the laws of India. Any
            dispute arising out of or in connection with these Terms &
            Conditions shall be subject to the exclusive jurisdiction of the
            competent courts at Hyderabad, Telangana.
          </p>
        </div>

        <div className={Style.formGroup}>
          <h3>14. ACCEPTANCE</h3>

          <p>
            By enrolling in the Fracspace Escape Membership™, the Member
            confirms that these Terms & Conditions have been read and understood
            and agrees to abide by all policies, operational guidelines and
            amendments issued by the Company from time to time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MembershipTermsModal;
