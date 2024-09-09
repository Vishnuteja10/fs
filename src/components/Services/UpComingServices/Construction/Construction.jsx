import React from "react";
import Style from "./Construction.module.css";

import apartment from "../../../../assets/UpComingServices/Construction/Apartments.png";
import commercialBuildings from "../../../../assets/UpComingServices/Construction/CommercialBuildings.png";
// import construction from '../../../../assets/UpComingServices/Construction/Construction.png'
import GatedVillas from "../../../../assets/UpComingServices/Construction/GatedVillas.png";
import ResidentialHouses from "../../../../assets/UpComingServices/Construction/ResidentialHouses.png";
import Resorts from "../../../../assets/UpComingServices/Construction/Resorts.png";

import apartment1 from "../../../../assets/NewServices/construction/apartments.jpeg";
import commercialBuildings1 from "../../../../assets/NewServices/construction/commercialbuilding.jpeg";
import GatedVillas1 from "../../../../assets/NewServices/construction/gatedvilla.jpeg";
import ResidentialHouses1 from "../../../../assets/NewServices/construction/residentialbuilding.jpeg";
import Resorts1 from "../../../../assets/NewServices/construction/resort.jpeg";

function Construction() {
  return (
    <div className={Style.main}>
      <div className={Style.container}>

        <div className={Style.itemContainer}>
          <div className={Style.contentContainer}>
            <div className={Style.item}>
              <img src={apartment}></img>
            </div>
            <div className={Style.content}>Apartments</div>
          </div>
        </div>

        <div className={Style.itemContainer}>
          <div className={Style.contentContainer}>
            <div className={Style.item}>
              <img src={Resorts}></img>
            </div>
            <div className={Style.content}>Resorts</div>
          </div>
        </div>

        <div className={Style.itemContainer}>
          <div className={Style.contentContainer}>
            <div className={Style.item}>
              <img src={GatedVillas}></img>
            </div>
            <div className={Style.content}>Gated Villas</div>
          </div>
        </div>

      </div>

      <div className={Style.container2}>

        <div className={Style.itemContainer}>
          <div className={Style.contentContainer}>
            <div className={Style.item}>
              <img src={commercialBuildings}></img>
            </div>
            <div className={Style.content}>Commercial Buildings</div>
          </div>
        </div>

        <div className={Style.itemContainer}>
          <div className={Style.contentContainer}>
            <div className={Style.item}>
              <img src={ResidentialHouses}></img>
            </div>
            <div className={Style.content}>Residential Houses</div>
          </div>
        </div>

      </div>

      {/* <div className={Style.container}>
        <div>
          <div className={Style.item}>
            <img src={kidsRoomDesign}></img>
          </div>
          <div className={Style.content}>Kids Room Design</div>
        </div>

      </div> */}
    </div>
  );
}

export default Construction;
