import React from 'react'
import Style from './UpComingServices.module.css'
import propManagement from '../../assets/Services/prop.png'
import flight from '../../assets/Services/flight.png'
import cloud from '../../assets/Services/cloud.png'
import buySell from '../../assets/Services/buySell.png'

import { useNavigate } from 'react-router-dom'

function UpComingServices() {

    const navigate = useNavigate()


  return (
    <div className={Style.main}>
        <div className={Style.header}>Coming Soon</div>
        <div className={Style.services}>

            <div className={Style.serviceContainer1}>
                 <div className={Style.serviceName}>Property Management</div>
            </div>

            <div className={Style.serviceContainer2}>
                 <div className={Style.serviceName}>Travel & Accomodation</div>
            </div>

            <div className={Style.serviceContainer3}>
                 <div className={Style.serviceName}>Buy-Sell-Rent Properties</div>
            </div>

            {/* <div className={Style.serviceContainer1}>
                <div className={Style.serviceName}>Property Management</div>
                <div className={Style.imageContainer}>
                    <img className={Style.propManagementImg} src={propManagement}></img>
                </div>
            </div>

            <div className={Style.serviceContainer2}>
                <div className={Style.serviceName}>Travel & Stays</div>
                <div>
                <img src={cloud} className={Style.cloud1}></img>
                <img src={cloud} className={Style.cloud2}></img>
                <img src={cloud} className={Style.cloud3}></img>
                    <img className={Style.flight} src={flight}></img>
                </div>
            </div>

            <div className={Style.serviceContainer3}>
                <div className={Style.serviceName}>BUY, SELL, RENT <br></br>Property</div>
                <div>
                    <img className={Style.buySellImg} src={buySell}></img>
                </div>
            </div> */}

        </div>

         <div className={Style.knowMore}>
            <button  onClick={()=>navigate('/services')}>Know More</button>
         </div>

    </div>
  )
}

export default UpComingServices