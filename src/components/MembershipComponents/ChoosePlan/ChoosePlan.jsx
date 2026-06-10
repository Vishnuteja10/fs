import React from "react";
import { useState } from "react";
import Style from "./ChoosePlan.module.css";

import hydImg from "../../../assets/Memberships/hyd.png";
import goaImg from "../../../assets/Memberships/goa.png";
import allepyImg from "../../../assets/Memberships/allepy.png";
import munnarImg from "../../../assets/Memberships/munnar.png";

import bankokImg from "../../../assets/Memberships/bankok.png";
import baliImg from "../../../assets/Memberships/bali.png";
import miamiImg from "../../../assets/Memberships/miami.png";
import colomboImg from "../../../assets/Memberships/colombo.png";

import premimuB from "../../../assets/Memberships/premiumB.png";
import creditB from "../../../assets/Memberships/creditB.png";
import stayB from "../../../assets/Memberships/stayB.png";
import rewardsB from "../../../assets/Memberships/rewardsB.png";

import intl from "../../../assets/Memberships/intl.png";
import creditG from "../../../assets/Memberships/creditG.png";
import stayG from "../../../assets/Memberships/stayG.png";
import rewardsG from "../../../assets/Memberships/rewardsG.png";

import membershipBg from "../../../assets/Memberships/memBg.png";
import { useNavigate } from "react-router-dom";
// import MembershipForm from "../MembershipForm/MembershipForm";

function ChoosePlan() {
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

  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const navigate = useNavigate();

  return (
    <section className={Style.membershipSection}>
      <div className={Style.membershipContainer}>
        <div className={Style.header}>
          <h2 className={Style.heading}>Choose Your Escape</h2>

          <p className={Style.description}>
            Two tiers. Both extraordinary. Pick the one that matches your world.
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
                  navigate("/membershipform", { state: { plan: "silver" } });
                // setSelectedPlan("Escape Silver");
                // setShowForm(true);
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
                // setSelectedPlan("Escape Black");
                // setShowForm(true);
                  navigate("/membershipform", { state: { plan: "black" } });
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

export default ChoosePlan;
