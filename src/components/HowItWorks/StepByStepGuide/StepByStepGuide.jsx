import React from "react";
import Style from "./StepByStepGuide.module.css";
import Browse from '../../../assets/HowItWorks/Browse.png';
import Consult from '../../../assets/HowItWorks/Consult.png';
import Invest from '../../../assets/HowItWorks/invest.png';
import Manage from '../../../assets/HowItWorks/Manage.png';



function StepByStepGuide() {
  return (
    <div className={Style.main}>
      {/* <div className={Style.header}>Step By Step Guide With <span className={Style.name}>Fracspace</span></div> */}
      <div className={Style.howItWorks}>

        <div className={Style.content}>
          <div className={Style.contentHeader}>How it Works</div>
          <div className={Style.description}>Discover how fracspace works</div>
        </div>

        <div className={Style.itemsContainer}>

                 <div className={Style.item}>
                    <div className={Style.number}>
                        1
                    </div>
                     <div className={Style.imageContainer}>
                        <img src={Browse}></img>
                     </div>
                     <div className={Style.contentContainer}>
                        <div className={Style.itemHeader}>Browse</div>
                        <div className={Style.itemContent}>Explore properties through our app.</div>
                     </div>
                 </div>

                 <div className={Style.item}>
                 <div className={Style.number}>
                        2
                    </div>
                     <div className={Style.imageContainer}>
                        <img src={Consult}></img>
                     </div>
                     <div>
                        <div className={Style.itemHeader}>Consult</div>
                        <div className={Style.itemContent}>Get Investment advice from our experts.</div>
                     </div>
                 </div>

                 <div className={Style.item}>
                 <div className={Style.number}>
                        3
                    </div>
                     <div className={Style.imageContainer}>
                        <img src={Invest}></img>
                     </div>
                     <div>
                        <div className={Style.itemHeader}>Invest</div>
                        <div className={Style.itemContent}>Start earning with guarenteed returns.</div>
                     </div>
                 </div>

                 <div className={Style.item}>
                 <div className={Style.number}>
                        4
                    </div>
                     <div className={Style.imageContainer}>
                        <img src={Manage}></img>
                     </div>
                     <div>
                        <div className={Style.itemHeader}>Manage</div>
                        <div className={Style.itemContent}>Track property and financials through our app.</div>
                     </div>
                 </div>

        </div>

      </div>
    </div>
  );
}

export default StepByStepGuide;
