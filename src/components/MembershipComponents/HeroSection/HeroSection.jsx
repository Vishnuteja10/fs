import React from "react";
import Style from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={Style.container}>
      <div className={Style.overlay}></div>

      <div className={Style.content}>
        <h1 className={Style.heading}>
          The Luxury Membership
          <br />
          That <span>Pays You Back</span>
        </h1>

        <p className={Style.description}>
          Enjoy curated luxury stays, exclusive privileges, and annual rewards –
          all through a membership designed to deliver value beyond vacations.
        </p>
      </div>

      <div className={Style.bottomCurve}></div>
    </section>
  );
}

export default HeroSection;
