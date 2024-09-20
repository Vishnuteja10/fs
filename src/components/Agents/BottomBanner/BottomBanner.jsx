import React from 'react'
import Style from './BottomBanner.module.css'

function BottomBanner() {
  return (
    <div className={Style.main}>

      <div className={Style.leftContainer}>
        <div className={Style.header}>Join our team today!</div>
        <div className={Style.content}>Fill out the application form below, and one of our team members will reach out to guide you through the onboarding process.</div>
      </div>

      <div className={Style.buttonContainer}>
             <button>Join us now</button>
      </div>

    </div>
  )
}

export default BottomBanner