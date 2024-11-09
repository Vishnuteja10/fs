import React, { useState } from 'react'
import Style from './UpComingServices.module.css'
import Interior from './Interior/Interior'
import Construction from './Construction/Construction'
import ProfessionalServices from './ProfessionalServices/ProfessionalServices'
import BuySellRent from './BuySellRent/BuySellRent'
import TravelAccomodation from './TravelAccomodation/TravelAccomodation'

function UpComingServices() {

    const [selected,setSelected] = useState('construction') 

  return (
    <section className={Style.main}>
        <h2 className={Style.header}>Services</h2>

        <div className={Style.services}>
            {/* <div onClick={()=>setSelected('interior')} className={selected== 'interior' ? Style.selected : Style.interior}>Interior Designing</div> */}
            <div id={Style.constructionService} onClick={()=>setSelected('construction')} className={ selected=='construction' ? Style.selected : Style.construction}>Construction/Interior Design</div>
            <div id={Style.professionalServices} onClick={()=>setSelected('professionalServices')} className={ selected == 'professionalServices' ? Style.selected :  Style.professionalServices}>Property Management</div>

            <div id={Style.buysellrent} onClick={()=>setSelected('buysellrent')} className={ selected=='buysellrent' ? Style.selected : Style.buysellrent}>Buy-Sell-Rent Properties</div>

            <div id={Style.comingsoon} onClick={()=>setSelected('comingsoon')} className={ selected=='comingsoon' ? Style.selected : Style.comingsoon}>Coming soon</div>
        </div>

        <div className={Style.containers}>
            <div>
               {selected == 'interior' && <Interior />}
               {selected == 'construction' && <Construction />}
               {selected == 'professionalServices' && <ProfessionalServices />}
               {selected == 'buysellrent' && <BuySellRent />}
               {selected == 'comingsoon' && <TravelAccomodation />}
            </div>
        </div>

    </section>
  )
}

export default UpComingServices