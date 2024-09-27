import React from "react";
import Style from "./Reviews.module.css";

import img1 from "../../assets/Reviews/img1.png";
import img2 from "../../assets/Reviews/img2.png";
import img3 from "../../assets/Reviews/img3.png";
import img4 from "../../assets/Reviews/img4.png";
import img5 from "../../assets/Reviews/img5.png";
import img6 from "../../assets/Reviews/img6.png";

import Marquee from "react-fast-marquee";

function Reviews() {
  const reviewImages = [img1, img2, img3, img4, img5, img6,img1, img2, img3, img4, img5, img6];

  return (
    <section className={Style.main}>
    <div className={Style.reviewsContainer}>
      <div>
        <div className={Style.reviewsFLowLeftToRight}>
        <Marquee>
          {reviewImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Review ${index + 1}`}
              className={Style.reviewImage}
            />
          ))}
          </Marquee>
        </div>
      </div>
      <div className={Style.reviewsFLowRightToLeft}>
        <Marquee direction="right">
        {reviewImages.slice().reverse().map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Review ${index + 1}`}
            className={Style.reviewImage}
          />
        ))}
        </Marquee>
      </div>
    </div>
    </section>
  );
}

export default Reviews;
