import React from "react";
import Style from "./BuySellRent.module.css";
import buyImg from '../../../../assets/UpComingServices/BuySellRent/buy.png'
import sellImg from '../../../../assets/UpComingServices/BuySellRent/sell.png'
import rentImg from '../../../../assets/UpComingServices/BuySellRent/rent.png'

function BuySellRent() {
  return (
    <div className={Style.main}>
      <div className={Style.container}>
        <div className={Style.itemContainer}>
          <div className={Style.item}>
            <img src={buyImg}></img>
          </div>
          <div className={Style.content}>Buy</div>
        </div>

        <div className={Style.itemContainer}>
          <div className={Style.item}>
            <img src={sellImg}></img>
          </div>
          <div className={Style.content}>Sell</div>
        </div>

        <div className={Style.itemContainer}>
          <div className={Style.item}>
            <img src={rentImg}></img>
          </div>
          <div className={Style.content}>Rent</div>
        </div>
      </div>
    </div>
  );
}

export default BuySellRent;
