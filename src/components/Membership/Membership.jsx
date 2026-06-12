import React from "react";
import Style from "./Membership.module.css";
import { useState } from "react";

import hydImg from "../../assets/Memberships/hyd.png";
import goaImg from "../../assets/Memberships/goa.png";
import allepyImg from "../../assets/Memberships/allepy.png";
import munnarImg from "../../assets/Memberships/munnar.png";

import bankokImg from "../../assets/Memberships/bankok.png";
import baliImg from "../../assets/Memberships/bali.png";
import miamiImg from "../../assets/Memberships/miami.png";
import colomboImg from "../../assets/Memberships/colombo.png";

import premimuB from "../../assets/Memberships/premiumB.svg";
import creditB from "../../assets/Memberships/creditB.svg";
import stayB from "../../assets/Memberships/stayB.svg";
import rewardsB from "../../assets/Memberships/rewardsB.svg";

import intl from "../../assets/Memberships/intl.svg";
import creditG from "../../assets/Memberships/creditG.svg";
import stayG from "../../assets/Memberships/stayG.svg";
import rewardsG from "../../assets/Memberships/rewardsG.svg";

import membershipBg from "../../assets/Memberships/memBg.png";
import MembershipForm from "../MembershipForm/MembershipForm";
import { useNavigate } from "react-router-dom";

const silverDestinations = [
  {
    name: "Alleppey",
    image: allepyImg
  },
  {
    name: "Goa",
    image: goaImg
  },
  {
    name: "Hyderabad",
    image: hydImg
  },
  {
    name: "Munnar",
    image: munnarImg
  }
];

const blackDestinations = [
  {
    name: "Bali",
    image: baliImg
  },
  {
    name: "Miami",
    image: miamiImg
  },
  {
    name: "Bangkok",
    image: bankokImg
  },
  {
    name: "Colombo",
    image: colomboImg
  }
];

const silverFeatures = [
  {
    icon: stayB,
    text: "2 Complimentary Stays per year"
  },
  {
    icon: creditB,
    text: "4 Annual Credits"
  },
  {
    icon: rewardsB,
    text: "Up to 8% Annual Rewards"
  },
  {
    icon: premimuB,
    text: "Premium Domestic Escapes"
  }
];

const blackFeatures = [
  {
    icon: stayG,
    text: "4 Complimentary Stays per year"
  },
  {
    icon: creditG,
    text: "4 Annual Credits"
  },
  {
    icon: rewardsG,
    text: "Up to 8% Annual Rewards"
  },
  {
    icon: intl,
    text: "International Destination Access"
  }
];

function Membership() {
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const navigate = useNavigate();
  return (
    <section
      className={Style.membershipSection}
      style={{
        "--membership-bg": `url(${membershipBg})`
      }}
    >
      <div className={Style.membershipContainer}>
        <div className={Style.header}>
          <h2 className={Style.heading}>
            The Luxury Membership That Pays You Back
          </h2>

          <p className={Style.description}>
            Enjoy curated luxury stays, exclusive privileges, and annual rewards
            through a membership designed to deliver value beyond vacations.
          </p>
        </div>

        <div className={Style.plansGrid}>
          {/* SILVER */}
          <div className={`${Style.planCard} ${Style.silverCard}`}>
            <span className={Style.planTag}>ESCAPE SILVER</span>

            <h3 className={Style.planTitle}>Silver Plan</h3>

            <div className={Style.price}>₹1,00,000</div>

            <p className={Style.planSubtitle}>
              Perfect for domestic luxury travel.
            </p>

            <div className={Style.divider}></div>

            <ul className={Style.features}>
              {silverFeatures.map((item, index) => (
                <li key={index}>
                  <img className={Style.featureIcon} src={item.icon}></img>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className={Style.destinationTitle}>
              ESCAPE SILVER DESTINATIONS INCLUDE
            </div>

            <div className={Style.destinationGrid}>
              {silverDestinations.map((item) => (
                <div key={item.name} className={Style.destinationItem}>
                  <div className={Style.imageWrapper}>
                    {item.name === "Munnar" && (
                      <span className={Style.moreInfo}>+ More</span>
                    )}

                    <img src={item.image} alt={item.name} />
                  </div>

                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            <button
              className={Style.silverBtn}
              onClick={() => {
                // setSelectedPlan("Escape Silver");
                // setShowForm(true);
                navigate("/membershipform?id=6a1fea05bde30274e617d727");
              }}
            >
              CHOOSE ESCAPE SILVER
            </button>
          </div>

          {/* BLACK */}
          <div className={`${Style.planCard} ${Style.blackCard}`}>
            <span className={Style.planTag}>ESCAPE BLACK</span>

            <h3 className={Style.planTitle}>Black Plan</h3>

            <div className={Style.price}>₹5,00,000</div>

            <p className={Style.planSubtitle}>
              For travellers without borders.
            </p>

            <div className={Style.divider}></div>

            <ul className={Style.features}>
              {blackFeatures.map((item, index) => (
                <li key={index}>
                  <img className={Style.featureIcon} src={item.icon}></img>

                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className={Style.destinationTitle}>
              ESCAPE BLACK DESTINATIONS INCLUDE
            </div>

            <div className={Style.destinationGrid}>
              {blackDestinations.map((item) => (
                <div key={item.name} className={Style.destinationItem}>
                  <div className={Style.imageWrapper}>
                    {item.name === "Colombo" && (
                      <span className={Style.moreInfo2}>+ More</span>
                    )}

                    <img src={item.image} alt={item.name} />
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            <button
              className={Style.blackBtn}
              onClick={() => {
                navigate("/membershipform?id=6a1fe9fcbde30274e617d723");
                // setSelectedPlan("Escape Black");
                // setShowForm(true);
              }}
            >
              CHOOSE ESCAPE BLACK
            </button>
          </div>
        </div>
      </div>
      {/* {showForm && (
        <MembershipForm
          selectedPlan={selectedPlan}
          onClose={() => setShowForm(false)}
        />
      )} */}
    </section>
  );
}

export default Membership;
