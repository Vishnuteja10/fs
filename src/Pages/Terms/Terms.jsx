import React from "react";
import Style from "./Terms.module.css";
import Footer from "../../components/Footer/Footer";

// import playStore from "../../assets/appImages/playstore.png";
// import appleStore from "../../assets/appImages/apple-store.png";

import Navbar2 from "../../components/Navbar2/Navbar2";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import playStore from "../../assets/appImages/playstore.png";
import appleStore from "../../assets/appImages/apple-store.png";

import watsappImg from "../../assets/appImages/watsapp.png";
import AppIconsComponent from "../../components/AppIconsComponent/AppIconsComponent";

function Terms() {
  return (
    <ScrollToTop>
      <div className={Style.main}>
        <AppIconsComponent />

        {/* <div className={Style.appIconsContainer}>
          <div
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.fracspace",
                "_blank"
              )
            }
          >
            <img className={Style.playStore} src={playStore}></img>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://apps.apple.com/in/app/fracspace/id6498551006",
                "_blank"
              )
            }
          >
            <img className={Style.appleStore} src={appleStore}></img>
          </div>

          <div
            onClick={() => window.open("https://wa.me/9880626111", "_blank")}
          >
            <img
              className={`${Style.watsapp} ${Style.bounce}`}
              src={watsappImg}
            ></img>
          </div>
        </div> */}

        <div className={Style.navBar}>
          <Navbar2 />
        </div>
        <div className={Style.terms}>
          <h1 className={Style.header}>TERMS OF USE</h1>
          <p className={Style.boldContent}>Effective Date: 18-07-2026</p>
          <p>
            These Terms of Use (&quot;Terms&quot;) govern your access to, and use of the website located at www.fracspace.com, the Fracspace mobile application, and all related services (collectively, the &quot;Platform&quot;) (&quot;Fracspace&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot; or &quot;us&quot;).
          </p>
          <p>
            Please read these Terms carefully before accessing or using the Platform. By accessing, browsing, registering on or using the Platform, you acknowledge that you have read, understood and agree to be bound by these Terms, our Privacy Policy, Refund &amp; Cancellation Policy and any other policies, agreements or transaction documents made available by Fracspace from time to time. If you do not agree to these Terms, you must immediately discontinue use of the Platform. Fracspace reserves the right to refuse access to the Platform or decline any registration, booking or transaction where it reasonably believes that these Terms or applicable law may be violated.
          </p>

          <h5 className={Style.subHeader}>1. Eligibility</h5>
          <p>
            The Platform is intended solely for individuals and entities legally competent to enter into binding contracts under applicable law. By using the Platform, you represent and warrant that:
          </p>
          <ul>
            <li>you are at least eighteen years of age, or such higher age as may be required under applicable law;</li>
            <li>you possess the legal capacity to enter into legally binding agreements;</li>
            <li>you are not prohibited from using the Platform under applicable law;</li>
            <li>you are not acting on behalf of any sanctioned or prohibited person or entity;</li>
            <li>if you are accessing the Platform on behalf of a company, partnership, trust or any other legal entity, you represent and warrant that you are duly authorized to bind such entity to these Terms;</li>
            <li>you shall comply with all applicable Know Your Customer (KYC) and other regulatory requirements communicated by Fracspace.</li>
          </ul>
          <p>
            Fracspace reserves the right to verify your eligibility at any time and may request additional information or documentation before permitting access to certain Services.
          </p>

          <h5 className={Style.subHeader}>2. About the Platform</h5>
          <p>
            Fracspace operates a technology-enabled Platform that facilitates opportunities for fractional ownership of selected real estate assets. The Platform may enable users to explore available properties, submit expressions of interest, complete investor onboarding, make bookings and investments, upload KYC and other documents, receive updates relating to investments, register for membership plans, access customer support and other ancillary services.
          </p>
          <p>
            Unless expressly agreed in writing, Fracspace does not provide legal, tax, accounting or investment advisory services. Information available on the Platform is provided for general informational purposes only and should not be construed as investment advice, financial advice or a recommendation to invest in any property.
          </p>
          <p>
            The rights, obligations and ownership interests of each user in relation to a property shall be governed by the applicable transaction documents executed in connection with such investment.
          </p>

          <h5 className={Style.subHeader}>3. Property Information and Investment Opportunities</h5>
          <p>
            The Platform may display information relating to properties, including descriptions, specifications, photographs, floor plans, amenities, pricing, projected returns, occupancy levels, rental estimates and other information. While Fracspace endeavors to ensure that such information is accurate and up to date, information provided on the Platform may be based on information received from third parties, including developers, property managers, consultants and other service providers.
          </p>
          <p>
            Accordingly, Fracspace does not warrant or guarantee that all information displayed on the Platform is complete, accurate, current or free from error. Images, illustrations, renders and layouts displayed on the Platform are intended for illustrative purposes only and may differ from the final property. Users are responsible for conducting their own independent due diligence before making any investment decision.
          </p>

          <h5 className={Style.subHeader}>4. User Registration and Accounts</h5>
          <p>
            Certain features of the Platform may require users to create an account. When registering an account, you agree to:
          </p>
          <ul>
            <li>provide complete, accurate and current information;</li>
            <li>promptly update any information that becomes inaccurate or outdated;</li>
            <li>maintain the confidentiality of your login credentials;</li>
            <li>not share your account with any third party;</li>
            <li>immediately notify Fracspace of any unauthorized access to your account; and</li>
            <li>accept responsibility for all activities conducted through your account.</li>
          </ul>
          <p>
            Fracspace reserves the right to suspend, restrict or terminate any account where it reasonably believes that false or misleading information has been provided, fraudulent or suspicious activity has occurred, applicable law has been violated, these Terms have been breached or continued access may expose Fracspace or other users to legal, regulatory or security risks.
          </p>

          <h5 className={Style.subHeader}>5. Know Your Customer (KYC) and Verification</h5>
          <p>
            In order to comply with applicable law and internal compliance requirements, Fracspace may require users to complete identity verification procedures before accessing certain Services. Users may be required to submit the requisite information and documentation. Fracspace reserves the right to verify the authenticity of any information or documents submitted and may engage authorized third-party verification service providers for this purpose.
          </p>
          <p>
            Failure to complete KYC or provide satisfactory documentation may result in the suspension, restriction or refusal of Services without any liability on the part of Fracspace.
          </p>

          <h5 className={Style.subHeader}>6. Investor Onboarding</h5>
          <p>
            Access to investment opportunities may be subject to successful completion of Fracspace&apos;s onboarding process, including registration completion, submission of KYC documentation, execution of transaction documents etc.
          </p>
          <p>
            Fracspace reserves the right to reject, suspend or discontinue any onboarding process where any of the required processes are not satisfactorily completed by the user, or fraud or suspicious activity is suspected, or onboarding would otherwise violate applicable law.
          </p>

          <h5 className={Style.subHeader}>7. Booking of Investment Opportunities and Ownership Rights</h5>
          <p>
            Users may reserve an investment opportunity by paying the applicable Booking Fees through the payment methods made available on the Platform and any balance shall be allocated towards Entitlement Fees. However, payment of a Booking Fees does not, by itself create legal ownership in any property or guarantee allotment of a fractional interest.
          </p>
          <p>
            Upon the full realization of the entire amount and the two installments of the chosen payment plan, the user would be entitled to the benefits of Fracspace ownership, including minimum guaranteed returns. Fractional ownership rights shall also be subject to satisfaction of all applicable conditions such as successful completion of onboarding, completion of KYC requirements, execution of transaction documents, receipt of the applicable investment amount and fulfilment of any additional conditions communicated by Fracspace. Ownership interests may be held through an SPV or any other investment structure established for the relevant property.
          </p>
          <p>
            The rights of users shall be governed by the applicable investment documents and not solely by these Terms.
          </p>
          <p>
            Fracspace reserves the right to decline, cancel or refuse any booking where required for operational, regulatory or legal reasons.
          </p>

          <h5 className={Style.subHeader}>8. Payments</h5>
          <p>
            Payments shall be made only through authorized payment methods made available on the Platform and in accordance with the payment schedule communicated by Fracspace.
          </p>
          <p>
            Users represent and warrant that they have provided accurate payment information, used legally owned cards/bank accounts, that the funds used for investments originate from lawful sources and that they shall comply with applicable law relating to financial transactions. Any taxes, duties, statutory levies, bank charges or transaction costs applicable to a payment shall be borne by the user unless expressly stated otherwise.
          </p>
          <p>
            Where a payment transaction fails, the transaction shall be treated as unsuccessful until confirmation of successful receipt of funds. Where an amount is erroneously debited from a user&apos;s account due to a failed transaction, the refund or reversal shall be processed by the relevant payment service provider or financial institution in accordance with its applicable procedures. Fracspace shall not be liable for delays attributable to banks, payment gateways or other third-party payment service providers.
          </p>

          <h5 className={Style.subHeader}>9. Cancellation and Refunds</h5>
          <p>
            Cancellation requests and refund eligibility shall be governed by the Refund &amp; Cancellation Policy, which forms an integral part of these Terms. Users are encouraged to review the Refund &amp; Cancellation Policy before making any payment through the Platform.
          </p>

          <h5 className={Style.subHeader}>10. Lock-in Period, Transfers and Exit</h5>
          <p>
            Where a property or investment opportunity is subject to a lock-in period, the applicable duration and conditions shall be specified in the relevant transaction documents. In the event of any name transfers or gift, it may take up to 7 working days to transfer to be reflected. The users may choose to exit the relevant agreement at any time with a 60-day notice period.
          </p>
          <p>
            Any deductions, cancellation charges or exit fees shall be determined in accordance with the applicable commercial terms communicated to the user.
          </p>

          <h5 className={Style.subHeader}>11. Rental Income and Property Management</h5>
          <p>
            Fracspace shall be responsible for all property maintenance. Where applicable, rental income generated from a property shall be administered in accordance with the applicable transaction documents. However, Fracspace will deduct 30% from the generated rentals for the property maintenance, distributing the remaining 70% among the property shareholders.
          </p>

          <h5 className={Style.subHeader}>12. Investment Risks</h5>
          <p>
            Users acknowledge and agree that investments in real estate and fractional ownership structures involve inherent commercial and financial risks. The property values may appreciate or depreciate, rental income may fluctuate, occupancy rates may vary, market conditions may change or governmental policies and taxation may change. Fracspace does not guarantee any appreciation, rental income or liquidity.
          </p>
          <p>
            Each user is solely responsible for evaluating the suitability of any investment and is encouraged to seek independent legal, financial, tax and investment advice before investing.
          </p>

          <h5 className={Style.subHeader}>13. Modification of the Platform</h5>
          <p>
            Fracspace may, from time to time and without prior notice modify, update or improve the Platform, introduce new features or Services, discontinue certain features, suspend access for maintenance or security purposes or make changes necessary to comply with applicable law.
          </p>
          <p>
            Fracspace does not guarantee that the Platform or any particular feature will remain available at all times and shall not be liable for any temporary interruption, suspension or discontinuation of the Platform.
          </p>

          <h5 className={Style.subHeader}>14. Intellectual Property Rights</h5>
          <p>
            Unless otherwise expressly stated, the Platform and all content made available through it, including without limitation all text, graphics, logos, trademarks, service marks, trade names, software, source code, databases, designs, layouts, photographs, videos, audio recordings, documents, reports, icons and other materials, are owned by or licensed to Fracspace and are protected under applicable intellectual property laws.
          </p>
          <p>
            Nothing contained in these Terms shall be construed as granting any right, title or interest in or to any intellectual property belonging to Fracspace or its licensors.
          </p>

          <h5 className={Style.subHeader}>15. Third-Party Services and Links</h5>
          <p>
            The Platform may integrate with or provide links to third-party websites, payment gateways, KYC service providers, cloud hosting providers, analytics tools or other services. Such third-party services are provided for user convenience only.
          </p>
          <p>
            Fracspace does not own or control such third-party services and makes no representation or warranty. Your use of third-party services shall be governed by the applicable terms and privacy policies of such third parties. Fracspace shall not be responsible for any loss or damage arising from your use of third-party websites or services, except to the extent such loss is directly attributable to Fracspace&apos;s negligence or wilful misconduct.
          </p>

          <h5 className={Style.subHeader}>16. Privacy</h5>
          <p>
            Your privacy is important to us. Our collection, use, storage, disclosure and processing of Personal Data is governed by our Privacy Policy, which forms an integral part of these Terms. By using the Platform, you acknowledge that your Personal Data may be processed in accordance with the Privacy Policy and applicable law.
          </p>

          <h5 className={Style.subHeader}>17. Limitation of Liability and Indemnity</h5>
          <p>
            To the fullest extent permitted by applicable law, Fracspace, its directors, officers, employees, affiliates, consultants and service providers shall not be liable for any indirect, incidental, consequential, special, exemplary or punitive damages, including loss of profits, loss of revenue, loss of goodwill, business interruption, loss of data or loss of opportunity, arising out of or relating to:
          </p>
          <ul>
            <li>your use of or inability to use the Platform;</li>
            <li>any investment decision;</li>
            <li>delays or interruptions in the Services;</li>
            <li>actions of third-party service providers;</li>
            <li>unauthorized access to your account;</li>
            <li>inaccuracies in information supplied by third parties; or</li>
            <li>events beyond Fracspace&apos;s reasonable control.</li>
          </ul>
          <p>
            You agree to indemnify, defend and hold harmless Fracspace, its directors, officers, employees, affiliates, consultants, agents and service providers from and against any claims, actions, proceedings, liabilities, losses, damages, penalties, costs and expenses (including reasonable legal fees) arising out of or relating to:
          </p>
          <ul>
            <li>your breach of these Terms;</li>
            <li>your violation of applicable law;</li>
            <li>any inaccurate or misleading information provided by you;</li>
            <li>your misuse of the Platform;</li>
            <li>infringement of the rights of any third party; or</li>
            <li>any negligent, fraudulent or unlawful act or omission by you.</li>
          </ul>

          <h5 className={Style.subHeader}>18. Termination</h5>
          <p>
            Fracspace reserves the right to suspend, restrict or terminate your access to the Platform, with or without prior notice, at its sole discretion.
          </p>

          <h5 className={Style.subHeader}>19. Force Majeure</h5>
          <p>
            Fracspace shall not be liable for any delay or failure in performing its obligations under these Terms where such delay or failure results from circumstances beyond its reasonable control, including natural disasters, floods, earthquakes, fire, war, terrorism, civil unrest, strikes or labour disputes, changes in applicable law of failures of third-party infrastructure or service providers. Fracspace shall use reasonable efforts to resume the affected Services as soon as reasonably practicable.
          </p>

          <h5 className={Style.subHeader}>20. Regulatory Compliance</h5>
          <p>
            Users acknowledge that Fracspace may take any action reasonably necessary to comply with applicable law, regulatory requirements or directions issued by governmental or regulatory authorities.
          </p>
          <p>
            Fracspace may request additional information, suspend transactions or restrict access to Services where required to satisfy legal or compliance obligations.
          </p>

          <h5 className={Style.subHeader}>21. Governing Law and Dispute Resolution</h5>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. The courts at Hyderabad, Telangana, shall have exclusive jurisdiction over all matters arising out of or relating to these Terms, to the extent permitted under applicable law.
          </p>
          <p>
            In the event of any dispute, controversy or claim arising out of or relating to these Terms, the Parties shall first endeavor to resolve such dispute amicably through good-faith negotiations. If the dispute is not resolved within thirty (30) days from the date on which either Party notifies the other of the dispute, the dispute shall be referred to and finally resolved by arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996, as amended from time to time.
          </p>
          <p>
            The arbitration shall be conducted by a sole arbitrator mutually appointed by the Parties. If the Parties fail to agree upon the appointment of the arbitrator within thirty (30) days, the arbitrator shall be appointed in accordance with the Arbitration and Conciliation Act, 1996. The seat and venue shall be at Hyderabad, Telangana and the proceedings shall be conducted in the English language. Nothing contained in this Clause shall prevent either Party from seeking interim or injunctive relief from a court of competent jurisdiction.
          </p>

          <h5 className={Style.subHeader}>22. Entire Agreement</h5>
          <p>
            These Terms, together with the Privacy Policy, Refund &amp; Cancellation Policy and all other transaction documents constitute the entire agreement between you and Fracspace relating to your use of the Platform and supersede all prior discussions, representations, understandings or agreements relating to the subject matter hereof.
          </p>
          <p>
            In the event of any inconsistency between these Terms and any investor agreement or other transaction-specific agreement executed between the parties, the transaction-specific agreement shall prevail to the extent of such inconsistency.
          </p>

          <h5 className={Style.subHeader}>23. Amendment of Terms</h5>
          <p>
            Fracspace reserves the right to amend these Terms from time to time. Updated Terms shall be published on the Platform together with the revised Effective Date. Continued use of the Platform after such publication constitutes acceptance of the revised Terms.
          </p>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
}

export default Terms;
