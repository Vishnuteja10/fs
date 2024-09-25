import React from 'react'
import Style from './BottomBanner.module.css'
import bottomBanner from '../../../assets/HowItWorks/bottomBanner.png'
import playstore from '../../../assets/images/googleplay.png'
import appstore from '../../../assets/images/appstore.png'

function BottomBanner() {
  return (
    <section className={Style.main}>
            <div className={Style.content}>
                 <div className={Style.miniContent}>Turn your vision into reality</div>
                 <div className={Style.header}>Join the future of real estate with Fracspace</div>
                 <div className={Style.appIconsContainer}>
                    <img src={playstore} alt='Download on playstore' onClick={() => window.open("https://play.google.com/store/apps/details?id=com.fracspace", "_blank")}></img> <img src={appstore} alt='download on apple store' onClick={() => window.open("https://apps.apple.com/in/app/fracspace/id6498551006", "_blank")}></img>
                 </div>
            </div>

            <div className={Style.imageContainer}>
                <img  src={bottomBanner} alt='Co owning properties'></img>
            </div>
    </section>
  )
}

export default BottomBanner