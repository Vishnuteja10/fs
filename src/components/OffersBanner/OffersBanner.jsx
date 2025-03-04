import React from "react";

import Style from "./OffersBanner.module.css";

import { Carousel } from "react-bootstrap";

function OffersBanner() {
  return (
    <div className={Style.bannerContainer}>
      <Carousel controls={true} indicators={true} interval={5000} fade>
        <Carousel.Item>
          <div className={Style.bannerText}>
            <h3>🎉 Exclusive Offers for the First 10 Customers 🎉</h3>
            <p>Buy Any 1 Fraction</p>
            <ul>
              <li>
                💰 Get an instant discount of ₹2 lakhs (only for one-shot
                payments).
              </li>
              <li>
                🏡 Enjoy one week complimentary stay at the property invested
                in.
              </li>
              <li>
                🌍 Additional one-week complimentary stay at any Fracspace
                domestic property.
              </li>
            </ul>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={Style.bannerText}>
            <h3>🔥 Buy Any 2 Fractions - Bigger Rewards! 🔥</h3>
            <ul>
              <li>💵 Get 25% discount on the total fraction cost.</li>
              <li>
                🏡 Enjoy one week complimentary stay at the property invested
                in.
              </li>
              <li>
                🌍 Additional one-week complimentary stay at any Fracspace
                domestic property.
              </li>
              <li>📈 Minimum 8% return on the invested amount only.</li>
            </ul>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default OffersBanner;
