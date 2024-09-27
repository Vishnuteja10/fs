import React from "react";
import Style from "./Interior.module.css";
import img1 from "../../../../assets/Interior/img1.png";
import img2 from "../../../../assets/Interior/img2.png";
import img3 from "../../../../assets/Interior/img3.png";
import img4 from "../../../../assets/Interior/img4.png";
import img5 from "../../../../assets/Interior/img5.png";
import img6 from "../../../../assets/Interior/img6.png";
import img7 from "../../../../assets/Interior/img7.png";
import img8 from "../../../../assets/Interior/img8.png";
import img9 from "../../../../assets/Interior/img9.png";

// import bathroomDesign from "../../../../assets/NewServices/interior/bathroom.jpeg";
// import fallCeiling from "../../../../assets/NewServices/interior/fallceiling.jpeg";
// import furniture from "../../../../assets/NewServices/interior/furniture.jpeg";
// import interiorDesign from "../../../../assets/UpComingServices/Interior/interiorDesign.png";
// import kidsRoomDesign from "../../../../assets/NewServices/interior/kidsroom.jpeg";
// import kitchenDesign from "../../../../assets/NewServices/interior/kitchen.jpeg";
// import Lighting from "../../../../assets/NewServices/interior/lighting.jpeg";
// import WallDesign from "../../../../assets/NewServices/interior/walldesign.jpeg";


import bathroomDesign from '../../../../assets/UpComingServices/Interior/BathroomDesign.png'
import fallCeiling from '../../../../assets/UpComingServices/Interior/FallCeilling.png'
import furniture from '../../../../assets/UpComingServices/Interior/Furniture.png'

import interiorDesign from '../../../../assets/UpComingServices/Interior/InteriorDesign.png'
import kidsRoomDesign from '../../../../assets/UpComingServices/Interior/KidsRoomDesign.png'
import kitchenDesign from '../../../../assets/UpComingServices/Interior/KitchenDesign.png'

import Lighting from '../../../../assets/UpComingServices/Interior/Lighting.png'
import WallDesign from '../../../../assets/UpComingServices/Interior/WallDesign.png'

function Interior() {
  return (
    <section className={Style.main}>

      <div className={Style.container}>

        <article className={Style.itemContainer}>
          <div className={Style.contentContainer}>
            <div className={Style.item}>
              <img src={Lighting} alt="lighting"></img>
            </div>
            <div className={Style.content}>Lighting</div>
          </div>
        </article>

        <article className={Style.itemContainer}>
          <div className={Style.contentContainer}>
            <div className={Style.item}>
              <img src={furniture} alt="furniture"></img>
            </div>
            <div className={Style.content}>Furniture</div>
          </div>
        </article>

        <article className={Style.itemContainer}>
          <div className={Style.contentContainer}>
            <div className={Style.item}>
              <img src={WallDesign} alt="wall design"></img>
            </div>
            <div className={Style.content}>Wall Design</div>
          </div>
        </article>

      </div>

      <div className={Style.container2}>

        <article className={Style.itemContainer}>
          <div className={Style.contentContainer}>
            <div className={Style.item}>
              <img src={fallCeiling} alt="fall ceiling"></img>
            </div>
            <div className={Style.content}>Fall Ceiling</div>
          </div>
        </article>

        <article className={Style.itemContainer}>
          <div className={Style.contentContainer}>
            <div className={Style.item}>
              <img src={kitchenDesign} alt="kitchen design"></img>
            </div>
            <div className={Style.content}>Kitchen Designs</div>
          </div>
        </article>

        <article className={Style.itemContainer}>
          <div className={Style.contentContainer}>
            <div className={Style.item}>
              <img src={bathroomDesign} alt="Bathroom designs"></img>
            </div>
            <div className={Style.content}>Bathroom Designs</div>
          </div>
        </article>

      </div>

      <div className={Style.container3}>

        <article className={Style.itemContainer}>
          <div className={Style.contentContainer}>
            <div className={Style.item}>
              <img src={kidsRoomDesign} alt="kids room design"></img>
            </div>
            <div className={Style.content}>Kids Room Design</div>
          </div>
        </article>

      </div>

    </section>
  );
}

export default Interior;
