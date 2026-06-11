import React from "react";
import Style from "./MemInfo.module.css";
import membershipBadgesImg from "../../../assets/Memberships/allepeyImg.webp";

function MemInfo() {
  const benefits = [
    {
      icon: "🏨",
      title: "Curated Luxury Stays",
      desc: "Hand-picked properties across India and globally – no compromises on quality."
    },
    {
      icon: "💰",
      title: "Annual Rewards Up to 8%",
      desc: "Your membership value grows every year, paid back to you in real rewards."
    },
    {
      icon: "🎯",
      title: "Flexible Credit Redemption",
      desc: "Use credits for stays or let them convert to rewards – always your choice."
    }
  ];

  return (
    <section className={Style.container}>
      <h2 className={Style.heading}>
        A Membership Built To Give, <span>Not Just Take.</span>
      </h2>

      <div className={Style.content}>
        <div className={Style.leftSection}>
          <div className={Style.imageWrapper}>
            <img
              src={membershipBadgesImg}
              alt="Membership Cards"
              className={Style.image}
            />
          </div>

          <div className={Style.quoteBox}>
            "We asked ourselves why does every holiday membership feel like a
            trap? So we built one that doesn't."
          </div>
        </div>

        <div className={Style.rightSection}>
          <p>
            Most holiday memberships ask you to pay upfront, limit your choices,
            and leave you with nothing but fading memories and an empty wallet.
          </p>

          <p>
            <strong>Fracspace Escape</strong> was born from a simple belief:
            your investment should grow alongside your experiences. Every credit
            you retain compounds into real, measurable value.
          </p>

          <p>
            Unlike conventional holiday memberships, our program offers complete
            stay experiences, exclusive member benefits, and financial returns
            that continue to add value over time.
          </p>

          <div className={Style.benefits}>
            {benefits.map((item, index) => (
              <div key={index} className={Style.benefitCard}>
                <div className={Style.icon}>{item.icon}</div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemInfo;
