import React from "react";
import Style from "./MemComparison.module.css";

function MemComparison() {
  const oldWay = [
    "Pay upfront with nothing in return",
    "Limited flexibility on usage",
    "Benefits that expire unused",
    "Zero financial return",
    "Restricted to a single resort chain",
    "No global destination access"
  ];

  const smartWay = [
    "Curated luxury stays",
    "Annual rewards up to 8%",
    "Flexible credit redemption",
    "Complimentary stays included",
    "Exclusive member privileges",
    "Real value back on your investment"
  ];

  return (
    <section className={Style.container}>
      <h2 className={Style.heading}>
        Most Holiday Memberships <span>Cost</span> You.
        <br />
        Fracspace Escape <span>Pays You</span> Back.
      </h2>

      <div className={Style.comparisonWrapper}>
        {/* Left Side */}
        <div className={Style.leftCard}>
          <div className={Style.badgeRow}>
            <div className={Style.lightBadge}>Traditional Memberships</div>
            <div className={Style.line}></div>
          </div>

          <h3 className={Style.cardTitle}>The Old Way</h3>

          <ul className={Style.list}>
            {oldWay.map((item, index) => (
              <li key={index}>
                <span className={Style.cross}>✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className={Style.rightCard}>
          <div className={Style.badgeRow}>
            <div className={Style.darkBadge}>Fracspace Escape</div>
            <div className={Style.darkLine}></div>
          </div>

          <h3 className={Style.cardTitleWhite}>A Smarter Alternative</h3>

          <ul className={Style.listWhite}>
            {smartWay.map((item, index) => (
              <li key={index}>
                <span className={Style.tick}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className={Style.footerText}>
        Why should a membership only take from you{" "}
        <span>when it can give back too?</span>
      </p>
    </section>
  );
}

export default MemComparison;
