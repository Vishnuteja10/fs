import React from 'react'

import Style from './AppIconsComponent.module.css'

import playStore from "../../assets/appImages/playstore.png";
import appleStore from "../../assets/appImages/apple-store.png";

import watsappImg from '../../assets/appImages/watsapp.png'

function AppIconsComponent() {
  return (
    <div className={Style.appIconsContainer}>

    <div onClick={() => window.open("https://play.google.com/store/apps/details?id=com.fracspace", "_blank")}>
      <img className={Style.playStore} src={playStore}></img>
    </div>

    <div onClick={() => window.open("https://apps.apple.com/in/app/fracspace/id6498551006", "_blank")}>
      <img className={Style.appleStore} src={appleStore}></img>
    </div>

    <div onClick={() => window.open("https://wa.me/9880626111", "_blank")}>
      <img className={`${Style.watsapp} ${Style.bounce}`} src={watsappImg}></img>
    </div>

  </div>
  )
}

export default AppIconsComponent