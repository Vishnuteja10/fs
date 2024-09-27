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
    <section className={Style.main}>
        <h1 className={Style.header}>Coming Soon</h1>
        <div className={Style.services}>

            <article className={Style.serviceContainer1}>
                 <h2 className={Style.serviceName}>Property Management</h2>
            </article>

            <article className={Style.serviceContainer2}>
                 <h2 className={Style.serviceName}>Travel & Accomodation</h2>
            </article>

            <article className={Style.serviceContainer3}>
                 <h2 className={Style.serviceName}>Buy-Sell-Rent Properties</h2>
            </article>

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

    </section>
  )
}

export default UpComingServices