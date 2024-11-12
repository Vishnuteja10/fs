import React from 'react'
import Style from './TravelAccomodation.module.css'

import travelImg from '../../../../assets/UpComingServices/Accomodation/travel.png';
import accomodationImg from '../../../../assets/UpComingServices/Accomodation/accomodation.png'


function TravelAccomodation() {
  return (
    <div className={Style.main}>
        
         <div className={Style.container}>

        <div className={Style.itemContainer}>
          <div className={Style.item}>
            <img src={travelImg}></img>
          </div>
          <div className={Style.content}>Travel</div>
        </div>

        <div className={Style.itemContainer}>
          <div className={Style.item}>
            <img src={accomodationImg}></img>
          </div>
          <div className={Style.content}>Accomodation</div>
        </div>

        <div></div>
        <div></div>

       
      </div>
    </div>
  )
}

export default TravelAccomodation