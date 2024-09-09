import React from "react";
import Style from "./MeetOurTeam.module.css";
import meetTeamImage from "../../assets/MeetTeam/Image.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from '../../assets/MeetOurTeam/founder/unnathSir.jpeg'
import img2 from '../../assets/MeetOurTeam/sales/divya.jpeg'
import img3 from '../../assets/MeetOurTeam/sales/dns.jpeg'
import img4 from '../../assets/MeetOurTeam/marketing/diksha.jpeg'
import img5 from '../../assets/MeetOurTeam/sales/ganesh.jpeg'
import img6 from '../../assets/MeetOurTeam/construction/moin.jpeg'
import img7 from '../../assets/MeetOurTeam/tech/rakesh.jpeg'
import img8 from '../../assets/MeetOurTeam/tech/abha.jpeg'

import { useNavigate } from "react-router-dom";

function MeetOurTeam() {

  const navigate = useNavigate()


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={Style.main}>
      <div className={Style.header}>Meet Our Team</div>
      <div className={Style.container}>
        <Carousel responsive={responsive} autoPlay={true} swipeable={true}  infinite={true}  
      transitionDuration={1000}   dotListClass="custom-dot-list-style"  keyBoardControl={true} >

          <div className={Style.eachItem}>
            <div className={Style.imageContainer}>
              <img src={img1}></img>
            </div>
            <div className={Style.name}>Unnath Reddy</div>
            <div className={Style.role}>Visionary In Chief</div>
          </div>

          <div className={Style.eachItem}>
            <div className={Style.imageContainer}>
              <img src={img2}></img>
            </div>
            <div className={Style.name}>Divya</div>
            <div className={Style.role}>Business Head</div>
          </div>

          <div className={Style.eachItem}>
            <div className={Style.imageContainer}>
              <img src={img3}></img>
            </div>
            <div className={Style.name}>DNS Prashanth</div>
            <div className={Style.role}>Revenue Captain</div>
          </div>

          <div className={Style.eachItem}>
            <div className={Style.imageContainer}>
              <img src={img4}></img>
            </div>
            <div className={Style.name}>Diksha</div>
            <div className={Style.role}>Marketing Head</div>
          </div>

          <div className={Style.eachItem}>
            <div className={Style.imageContainer}>
              <img src={img5}></img>
            </div>
            <div className={Style.name}>Ganesh</div>
            <div className={Style.role}>Customer Cultivator</div>
          </div>

          <div className={Style.eachItem}>
            <div className={Style.imageContainer}>
              <img src={img6}></img>
            </div>
            <div className={Style.name}>Moin</div>
            <div className={Style.role}>Site Manager</div>
          </div>

          <div className={Style.eachItem}>
            <div className={Style.imageContainer}>
              <img src={img8}></img>
            </div>
            <div className={Style.name}>Abha</div>
            <div className={Style.role}>App Developer</div>
          </div>

          <div className={Style.eachItem}>
            <div className={Style.imageContainer}>
              <img src={img7}></img>
            </div>
            <div className={Style.name}>Rakesh</div>
            <div className={Style.role}>Backend Developer</div>
          </div>

          {/* <div className={Style.eachItem}>
            <div>
              <img src={meetTeamImage}></img>
            </div>
            <div className={Style.name}>John doe</div>
            <div className={Style.role}>Sales</div>
          </div>

          <div className={Style.eachItem}>
            <div>
              <img src={meetTeamImage}></img>
            </div>
            <div className={Style.name}>John doe</div>
            <div className={Style.role}>Sales</div>
          </div> */}
        </Carousel>
      </div>

      <div className={Style.viewAllTeam}>
             <button onClick={()=>navigate('/meetourteam')} >View All</button>
      </div>


    </div>
  );
}

export default MeetOurTeam;
