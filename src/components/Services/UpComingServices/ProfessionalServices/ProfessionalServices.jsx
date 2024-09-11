import React from 'react'
import Style from './ProfessionalServices.module.css'

import carpentry from '../../../../assets/UpComingServices/ProfessionalServices/CarpentryAndFurniture.png';
import plumbing from '../../../../assets/UpComingServices/ProfessionalServices/plumbing.png';
import masonry from '../../../../assets/UpComingServices/ProfessionalServices/Painting.png';
import electricalWork from "../../../../assets/UpComingServices/ProfessionalServices/ework.png";
import electricalInstallation from '../../../../assets/UpComingServices/ProfessionalServices/ElectricalInstallation.png';
import painting from '../../../../assets/UpComingServices/ProfessionalServices/Painting.png';

import carpentry1 from '../../../../assets/NewServices/professional/furnitureCarpentry.jpeg';
import electricalWork1 from '../../../../assets/NewServices/professional/electricalworks.jpeg';
import plumbing1 from '../../../../assets/NewServices/professional/plumbing.jpeg';
import electricalInstallation1 from '../../../../assets/NewServices/professional/electronics.jpeg';
import painting1 from '../../../../assets/NewServices/professional/painting.jpeg';






function ProfessionalServices() {
  return (
    <div className={Style.main}>

    <div className={Style.container}>

      <div className={Style.itemContainer}>
        <div className={Style.item}>
          <img src={electricalWork}></img>
        </div>
        <div className={Style.content}>Electrical Work </div>
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
  )
}

export default ProfessionalServices