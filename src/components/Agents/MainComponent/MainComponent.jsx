import React from 'react'
import Style from './MainComponent.module.css'
import img1 from '../../../assets/Agents/img1.jpeg'

function MainComponent() {
  return (
    <div className={Style.main}>
        <h3 className={Style.header}>Welcome to Fracspace <br></br>Your Partner in Real Estate Excellence </h3>
        {/* <p className={Style.subheader}>Join our team of dedicated agents</p> */}
        <div className={Style.imageContainer}>
            <img  src={img1}></img>
        </div>
    </div>
  )
}

export default MainComponent