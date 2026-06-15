import React from "react";
import Style from "./Properties.module.css";
import { useState } from "react";
import allepeyImg from "../../../assets/Memberships/allepeyImg.webp";
import goaImg from "../../../assets/Memberships/goaImg.webp";
import munnarImg from "../../../assets/Memberships/munnarImg.webp";
import dsouImg from "../../../assets/Memberships/dsou.webp";
import dsbhImg from "../../../assets/Memberships/dsbh.webp";
import elevenViewsImg from "../../../assets/Memberships/elevenViews.webp";

import seminyakImg from "../../../assets/Memberships/seminyakImg.webp";
import bkkImg from "../../../assets/Memberships/bkkImg.webp";
import ceylonImg from "../../../assets/Memberships/ceylonFsImg.webp";

import qrCodeImg from "../../../assets/Memberships/qr.png";

import miamiImg from "../../../assets/Memberships/miamiImg.webp";

function Properties() {
  const [activeTab, setActiveTab] = useState("Domestic");

  const properties = [
    {
      image: munnarImg,
      title: "Hilltop Munnar By Fracspace",
      location: "Munnar, Kerala"
    },
    {
      image: allepeyImg,
      title: "Alleppey Backwater Resort",
      location: "Alleppey, Kerala"
    },
    {
      image: goaImg,
      title: "Avtara Vida",
      location: "Calangute, Goa"
    },
    {
      image: dsbhImg,
      title: "Dreamscape Hotel",
      location: "Banjara Hills, Hyderabad"
    },
    {
      image: elevenViewsImg,
      title: "Eleven Views",
      location: "Avenue 4 Banjara Hills, Hyderabad"
    },
    {
      image: dsouImg,
      title: "Dreamscape Hotel",
      location: "Manikonda, Hyderabad"
    }
  ];

  const globalProperties = [
    {
      image: miamiImg,
      title: "Fracspace Brickell Bay",
      location: "Miami, Florida"
    },
    {
      image: seminyakImg,
      title: "Fracspace Seminyak",
      location: "Bali,Indonesia"
    },
    {
      image: bkkImg,
      title: "Fracspace BKK One",
      location: "Bangkok, Thailand"
    },
    {
      image: ceylonImg,
      title: "Lakeview by Fracspace Ceylon",
      location: "Colombo, Srilanka"
    }
  ];

  return (
    <section className={Style.luxuryEscapes}>
      <div className={Style.container}>
        {/* Header */}
        <div className={Style.header}>
          <h2 className={Style.heading}>
            Curated <span>Luxury Escapes</span>
          </h2>

          <div className={Style.tabs}>
            <button
              className={`${Style.tabBtn} ${
                activeTab === "Domestic" ? Style.activeTab : ""
              }`}
              onClick={() => setActiveTab("Domestic")}
            >
              Domestic
            </button>

            <button
              className={`${Style.tabBtn} ${
                activeTab === "Global" ? Style.activeTab : ""
              }`}
              onClick={() => setActiveTab("Global")}
            >
              Global
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className={Style.cardGrid}>
          {activeTab == "Domestic" &&
            properties.map((item, index) => (
              <div key={index} className={Style.card}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={Style.cardImage}
                />

                <span className={Style.badge}>1 Credit/Night</span>

                <div className={Style.overlay}></div>

                <div className={Style.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                </div>
              </div>
            ))}

          {activeTab == "Global" &&
            globalProperties.map((item, index) => (
              <div key={index} className={Style.card}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={Style.cardImage}
                />

                <span className={Style.badge}>1 Credit/Night</span>

                <div className={Style.overlay}></div>

                <div className={Style.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                </div>
              </div>
            ))}
        </div>

        <div className={Style.scanComponent}>
          <div className={Style.headerContainer}>
            <h2 className={Style.header}>Scan. Join. Escape</h2>
          </div>

          <div className={Style.qrImageContainer}>
            <img className={Style.qrImg} src={qrCodeImg} />
          </div>
          <p className={Style.content}>
            Scan the QR code to open the Fracspace app and join the Escape
            membership - directly, instantly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Properties;
