import React from "react";
import Style from "./DetailsExplaination.module.css";

function DetailsExplaination() {
  const options = [
    {
      title: "Use 0 Credits",
      subtitle: "Full rewards, no stays",
      value: "8% Rewards"
    },
    {
      title: "Use 1 Credit",
      subtitle: "1 luxury night",
      value: "6% Rewards"
    },
    {
      title: "Use 2 Credits",
      subtitle: "2 luxury nights",
      value: "4% Rewards"
    },
    {
      title: "Use 3 Credits",
      subtitle: "3 luxury nights",
      value: "2% Rewards"
    },
    {
      title: "Use 4 Credits",
      subtitle: "Maximum stays",
      value: "4 Nights"
    }
  ];

  return (
    <section className={Style.creditChoice}>
      <div className={Style.container}>
        <h1 className={Style.heading}>
          One Credit. One Night. <span>Your Choice.</span>
        </h1>

        <p className={Style.description}>
          Your membership includes 4 annual credits. Use a credit for a
          luxurious overnight stay, or retain it to grow your rewards. The
          choice is entirely yours – every year.
        </p>

        <div className={Style.content}>
          {/* Left Timeline */}
          <div className={Style.timelineWrapper}>
            <div className={`${Style.box} ${Style.activeBox}`}>
              <div className={Style.boxTitle}>1 Credit</div>
              <div className={Style.boxLabel}>ANNUAL</div>
            </div>

            <div className={Style.connector}></div>

            <div className={Style.box}>
              <div className={Style.boxTitle}>1 Night</div>
              <div className={Style.boxLabel}>LUXURY STAY</div>
            </div>

            <div className={Style.connector}></div>

            <div className={Style.box}>
              <div className={Style.reward}>2%</div>
              <div className={Style.boxLabel}>REWARD VALUE</div>
            </div>
          </div>

          {/* Right Cards */}
          <div className={Style.cards}>
            {options.map((item, index) => (
              <div key={index} className={Style.card}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>

                <div className={Style.cardValue}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsExplaination;
