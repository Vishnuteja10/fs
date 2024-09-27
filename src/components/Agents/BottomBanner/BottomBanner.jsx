import React from 'react'
import Style from './BottomBanner.module.css'

import {Link as ScrollLink} from 'react-scroll'

function BottomBanner() {
  return (
    
    <div className={Style.main}>

      <div className={Style.leftContainer}>
        <div className={Style.header}>Join Our Team Today!</div>
        <div className={Style.content}>Fill out the application form below, and one of our team members will reach out to guide you through the onboarding process.</div>
      </div>

      <div className={Style.buttonContainer}>
        <ScrollLink to='agentContactForm' smooth={true} duration={200}>
             <button>Join us now</button>
             </ScrollLink>
      </div>

    </div>
  )
}

export default BottomBanner