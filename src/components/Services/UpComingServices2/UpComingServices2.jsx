import React from 'react'
import Style from './UpComingServices2.module.css'

function UpComingServices2() {
  return (
    <div className={Style.main}>
        <div className={Style.header}>Upcoming Services</div>
        <div className={Style.services}>

            <div className={Style.serviceContainer1}>
                 <div className={Style.serviceName}>Property Management</div>
            </div>

            <div className={Style.serviceContainer2}>
                 <div className={Style.serviceName}>Travel & Accomodation</div>
            </div>

            <div className={Style.serviceContainer3}>
                 <div className={Style.serviceName}>Buy Sell Rent Property</div>
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
    </div>
  )
}

export default UpComingServices2