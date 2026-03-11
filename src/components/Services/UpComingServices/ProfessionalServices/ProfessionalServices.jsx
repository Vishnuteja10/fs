import React from "react";
import Style from "./ProfessionalServices.module.css";

import carpentry from "../../../../assets/UpComingServices/ProfessionalServices/CarpentryAndFurniture.png";
import plumbing from "../../../../assets/UpComingServices/ProfessionalServices/Plumbing.png";

import electricalWork from "../../../../assets/UpComingServices/ProfessionalServices/ework.png";

import painting from "../../../../assets/UpComingServices/ProfessionalServices/Painting.png";

function ProfessionalServices() {
  return (
    <div className={Style.main}>
      <div className={Style.container}>
        <div className={Style.itemContainer}>
          <div className={Style.item}>
            <img src={electricalWork}></img>
          </div>
          <div className={Style.content}>Electrical</div>
        </div>

        <div className={Style.itemContainer}>
          <div className={Style.item}>
            <img src={plumbing}></img>
          </div>
          <div className={Style.content}>Plumbing</div>
        </div>

        <div className={Style.itemContainer}>
          <div className={Style.item}>
            <img src={painting}></img>
          </div>
          <div className={Style.content}>Painting</div>
        </div>
      </div>

      <div className={Style.container2}>
        <div className={Style.itemContainer}>
          <div className={Style.item}>
            <img src={carpentry}></img>
          </div>
          <div className={Style.content}>Carpentry</div>
        </div>

        {/* <div className={Style.itemContainer}>
        <div className={Style.item}>
          <img src={masonry}></img>
        </div>
        <div className={Style.content}>Masonry</div>
      </div> */}

        {/* <div className={Style.itemContainer}>
        <div className={Style.item}>
          <img src={houseKeeping}></img>
        </div>
        <div className={Style.content}>Housekeeping</div>
      </div> */}

        {/* <div className={Style.itemContainer}>
        <div className={Style.item}>
          <img src={security}></img>
        </div>
        <div className={Style.content}>Security</div>
      </div> */}

        {/* <div className={Style.itemContainer}>
        <div className={Style.item}>
          <img src={electricalInstallation}></img>
        </div>
        <div className={Style.content}>Electronics Installation</div>
      </div> */}
      </div>

      {/* <div className={Style.container}>
      <div>
        <div className={Style.item}>
          <img ></img>
        </div>
        <div className={Style.content}></div>
      </div>

    </div> */}
    </div>
  );
}

export default ProfessionalServices;
