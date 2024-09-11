import React, { useState } from 'react'
import Style from './UpComingServices.module.css'
import Interior from './Interior/Interior'
import Construction from './Construction/Construction'
import ProfessionalServices from './ProfessionalServices/ProfessionalServices'

function UpComingServices() {

    const [selected,setSelected] = useState('construction') 

  return (
    <div className={Style.main}>
        <div className={Style.header}>Comming Soon</div>
        <div className={Style.services}>
            {/* <div onClick={()=>setSelected('interior')} className={selected== 'interior' ? Style.selected : Style.interior}>Interior Designing</div> */}
            <div onClick={()=>setSelected('construction')} className={ selected=='construction' ? Style.selected : Style.construction}>Construction/Interior Design</div>
            <div id={Style.professionalServices} onClick={()=>setSelected('professionalServices')} className={ selected == 'professionalServices' ? Style.selected :  Style.professionalServices}>Professional Services</div>
        </div>
        <div className={Style.containers}>
            <div>
               {selected == 'interior' && <Interior />}
               {selected == 'construction' && <Construction />}
               {selected == 'professionalServices' && <ProfessionalServices />}
            </div>
        </div>
    </div>
  )
}

export default UpComingServices