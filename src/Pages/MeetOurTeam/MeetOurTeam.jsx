import React from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Style from "./MeetOurTeam.module.css";
import teamImg from "../../assets/MeetOurTeam/grp.png";
import salesImgOne from "../../assets/MeetOurTeam/sales/s1.png";
import linkedIn from "../../assets/MeetOurTeam/linkedIn.png";

import Footer from "../../components/Footer/Footer";

import playStore from "../../assets/appImages/playstore.png";
import appleStore from "../../assets/appImages/apple-store.png";

import teamImage from "../../assets/MeetOurTeam/team/team.jpeg";

import sameekshaImg from "../../assets/MeetOurTeam/sales/sm.jpeg";
import ganeshImg from "../../assets/MeetOurTeam/sales/ganesh.jpeg";
import hemanthImg from "../../assets/MeetOurTeam/sales/hemanth.jpeg";
import dnsImg from "../../assets/MeetOurTeam/sales/dns.jpeg";
import prashanthImg from "../../assets/MeetOurTeam/sales/prashanth.jpeg";
import surajImg from "../../assets/MeetOurTeam/sales/suraj.jpeg";
import divyaImg from "../../assets/MeetOurTeam/sales/divya.jpeg";

import dikshaImg from "../../assets/MeetOurTeam/marketing/diksha.jpeg";
import riaImg from "../../assets/MeetOurTeam/marketing/ria.jpeg";
import sudheerImg from "../../assets/MeetOurTeam/marketing/sudheer.jpeg";

import abhaImg from "../../assets/MeetOurTeam/tech/abha.jpeg";
import rakeshImg from "../../assets/MeetOurTeam/tech/rakesh.jpeg";
import vishnuImg from "../../assets/MeetOurTeam/tech/vishnuteja.jpeg";
import deekshaImg from "../../assets/MeetOurTeam/tech/deeksha.jpeg";
import aparnaImg from "../../assets/MeetOurTeam/tech/aparna.jpeg";
import rohithImg from "../../assets/MeetOurTeam/tech/rohith.jpeg";

import moinImg from "../../assets/MeetOurTeam/construction/moin.jpeg";
import shivaniImg from "../../assets/MeetOurTeam/construction/shivani.jpeg";
import tharunImg from "../../assets/MeetOurTeam/construction/tharun.jpeg";

import akhilaImg from "../../assets/MeetOurTeam/hrAndAccounts/akhila.jpeg";
import naveenSirImg from "../../assets/MeetOurTeam/hrAndAccounts/naveenSir.jpeg";
import unnathSirImg from '../../assets/MeetOurTeam/founder/unnathSir.jpeg'

import deepakImg from '../../assets/MeetOurTeam/fitnessteam/deepak.jpeg'
import hemanth2Img from '../../assets/MeetOurTeam/fitnessteam/hemanth.jpeg'
import mansoorImg from '../../assets/MeetOurTeam/fitnessteam/mansoor.jpeg'
import pavanImg from '../../assets/MeetOurTeam/fitnessteam/pavan.jpeg'
import lalithImg from '../../assets/MeetOurTeam/fitnessteam/lalith.jpeg'
import gopiImg from '../../assets/MeetOurTeam/fitnessteam/gopi1.jpeg'

import shivaImg from '../../assets/MeetOurTeam/officeSupport/shiva.jpeg'
import karthikImg from '../../assets/MeetOurTeam/officeSupport/karthik.jpeg'
import ajayImg from '../../assets/MeetOurTeam/officeSupport/ajay.jpeg'

import watsappImg from '../../assets/appImages/watsapp.png'


import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function MeetOurTeam() {
  return (
    <ScrollToTop>
    <div>
      <div className={Style.appIconsContainer}>
        <div onClick={() => window.open("https://play.google.com/store/apps/details?id=com.fracspace", "_blank")}>
          <img className={Style.playStore} src={playStore}></img>
        </div>

        <div onClick={() => window.open("https://apps.apple.com/in/app/fracspace/id6498551006", "_blank")}>
          <img className={Style.appleStore} src={appleStore}></img>
        </div>

        <div onClick={() => window.open("https://wa.me/9880626111", "_blank")}>
          <img className={`${Style.watsapp} ${Style.bounce}`} src={watsappImg}></img>
        </div>
      </div>

      <div className={Style.navBar}>
        <Navbar2 />
      </div>

      <div className={Style.header}>Meet Our Team</div>
      <div className={Style.imageContainer}>
        <img src={teamImage} loading="lazy" alt="team"></img>
      </div>

      <div className={Style.teamContainer}>
        <div className={Style.header}>Meet The Team</div>
        <div className={Style.info}>
          Get to know the people behind Fracspace who make it all possible.
        </div>

        <div className={Style.salesTeamContainer1}>
          <div>
          <div className={Style.salesHeader1}>Visionary in Chief</div>

          <div className={Style.salesTeamImages}>
            <div className={Style.itemOne}>
              <img loading="lazy" alt="image" className={Style.itemImage} src={unnathSirImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/unnath-reddy-7b4614188/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Unnath Reddy</div>
              <div className={Style.role}>Founder</div>
            </div>

          </div>
          </div>
        </div>

        <div className={Style.salesTeamContainer}>
          <div className={Style.salesHeader}>Business & Sales Team</div>

          <div className={Style.salesTeamImages}>
            <div className={Style.itemOne}>
              <div>
              <img className={Style.itemImage} src={divyaImg}></img>
              {/* <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div> */}
              <div className={Style.name}>Divya</div>
              <div className={Style.role}>Business Head</div>
              </div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={sameekshaImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/sameeksha-nadepally-60825b280/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Sameeksha</div>
              <div className={Style.role}>Revenue Captain</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={ganeshImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/ganesh-gaddagunti-ab4222212/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Ganesh</div>
              <div className={Style.role}>Customer Cultivator</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={hemanthImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/hemanth-kumar-72b42525b/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Hemanth</div>
              <div className={Style.role}>Customer Cultivator</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={dnsImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/prasanth-dns-9a8a27217/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Prasanth </div>
              <div className={Style.role}>Revenue Captain</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={prashanthImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/prashanth-reddy-05987a1a1/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Prashanth</div>
              <div className={Style.role}>Customer Cultivator</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={surajImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/suraj-reddy-79149b31b/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Suraj</div>
              <div className={Style.role}>Revenue Captain</div>
            </div>

            {/* <div className={Style.itemOne}>
              <img className={Style.itemImage} src={salesImgOne}></img>
              <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>John doe</div>
              <div className={Style.role}>Revenue Captain</div>
            </div> */}

            {/* <div className={Style.itemOne}>
              <img className={Style.itemImage} src={salesImgOne}></img>
              <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>John doe</div>
              <div className={Style.role}>Revenue Captain</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={salesImgOne}></img>
              <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>John doe</div>
              <div className={Style.role}>Revenue Captain</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={salesImgOne}></img>
              <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>John doe</div>
              <div className={Style.role}>Revenue Captain</div>
            </div>
             */}
          </div>
        </div>

        <div className={Style.salesTeamContainer}>
          <div className={Style.salesHeader}>Marketing Team</div>

          <div className={Style.salesTeamImages}>
            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={dikshaImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/dikshah-david-89997b199/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Diksha</div>
              <div className={Style.role}>Marketing Head</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={sudheerImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/kondra-sudheer-707197305/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Sudheer</div>
              <div className={Style.role}>Graphic Designer</div>
            </div>

            {/* <div className={Style.itemOne}>
              <img className={Style.itemImage} src={riaImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/ria-srivastava-1244001b7",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Ria</div>
              <div className={Style.role}>Graphic Designer</div>
            </div> */}

            {/* <div className={Style.itemOne}>
              <img className={Style.itemImage} src={salesImgOne}></img>
              <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>John doe</div>
              <div className={Style.role}>Revenue Captain</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={salesImgOne}></img>
              <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>John doe</div>
              <div className={Style.role}>Revenue Captain</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={salesImgOne}></img>
              <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>John doe</div>
              <div className={Style.role}>Revenue Captain</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={salesImgOne}></img>
              <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>John doe</div>
              <div className={Style.role}>Revenue Captain</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={salesImgOne}></img>
              <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>John doe</div>
              <div className={Style.role}>Revenue Captain</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={salesImgOne}></img>
              <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>John doe</div>
              <div className={Style.role}>Revenue Captain</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={salesImgOne}></img>
              <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>John doe</div>
              <div className={Style.role}>Revenue Captain</div>
            </div> */}
          </div>
        </div>

        <div className={Style.salesTeamContainer}>
          <div className={Style.salesHeader}>Tech Team</div>

          <div className={Style.salesTeamImages}>
            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={abhaImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/abha-tiwari-4764a71b3/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Abha Tiwari</div>
              <div className={Style.role}>App Developer</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={rakeshImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/rakeshdontula66/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Rakesh</div>
              <div className={Style.role}>Backend Developer</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={vishnuImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vishnuteja-mudepalli-9a78a9199/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Vishnuteja</div>
              <div className={Style.role}>Full Stack Web Developer</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={rohithImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/rpaveri/", "_blank")
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Rohith</div>
              <div className={Style.role}>Research Analyst</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={deekshaImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/deeksha-n-337597278/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Deeksha</div>
              <div className={Style.role}>UI/UX Designer</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={aparnaImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/aparna-kalavakolanu-923a10271/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Aparna</div>
              <div className={Style.role}>UI/UX Designer</div>
            </div>
          </div>
        </div>

        <div className={Style.salesTeamContainer}>
          <div className={Style.salesHeader}>Construction Team</div>

          <div className={Style.salesTeamImages}>

          <div className={Style.itemOne}>
              <img className={Style.itemImage} src={shivaniImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/shivani-ambure-7b4b462a4/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Shivani</div>
              <div className={Style.role}>Jr Architect</div>
            </div>


            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={moinImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/shaik-moinpasha-017b20229/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Moin Pasha</div>
              <div className={Style.role}>Site Manager</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={tharunImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() => window.open("https://www.linkedin.com/in/tarun-ragam-9a9887326/", "_blank")}
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Tarun Kumar</div>
              <div className={Style.role}>Site Supervisor</div>
            </div>

            {/* <div className={Style.itemOne}>
              <img className={Style.itemImage} src={rohithImg}></img>
              <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>rohith</div>
              <div className={Style.role}>Revenue Captain</div>
            </div> */}
          </div>
        </div>

        <div className={Style.salesTeamContainer}>
          <div className={Style.salesHeader}>HR & Accounts</div>

          <div className={Style.salesTeamImages}>
            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={akhilaImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/akhila08lkd/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Akhila</div>
              <div className={Style.role}>HR Executive</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={naveenSirImg}></img>
              {/* <div
                className={Style.linkedInContainer}
                onClick={() => window.open(" ", "_blank")}
              >
                <img src={linkedIn}></img>
              </div> */}
              <div className={Style.name}>Naveen</div>
              <div className={Style.role}>Finance Head</div>
            </div>
          </div>
        </div>


        <div className={Style.salesTeamContainer}>
          <div className={Style.salesHeader}>Hospitality Team</div>
          

          <div className={Style.salesTeamImages}>

          <div className={Style.itemOne}>
              <img className={Style.itemImage} src={pavanImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() => window.open("https://www.linkedin.com/in/sapa-pavan-kumar-a35a62205/ ", "_blank")}
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Pavan</div>
              <div className={Style.role}>Hospitality Sales</div>
            </div>

          <div className={Style.itemOne}>
              <img className={Style.itemImage} src={hemanth2Img}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() => window.open("https://www.linkedin.com/in/hemanth-kumar-4ab4782bb/ ", "_blank")}
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Hemanth</div>
              <div className={Style.role}>Physiotherapist</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={lalithImg}></img>
              {/* <div
                className={Style.linkedInContainer}
                onClick={() => window.open(" ", "_blank")}
              >
                <img src={linkedIn}></img>
              </div> */}
              <div className={Style.name}>Lalith</div>
              <div className={Style.role}>Front Office</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={mansoorImg}></img>
              {/* <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div> */}
              <div className={Style.name}>Mansoor</div>
              <div className={Style.role}>Fitness Trainer</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={deepakImg}></img>
              {/* <div
                className={Style.linkedInContainer}
                onClick={() => window.open(" ", "_blank")}
              >
                <img src={linkedIn}></img>
              </div> */}
              <div className={Style.name}>Deepak</div>
              <div className={Style.role}>Fitness Trainer</div>
            </div>

           

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={gopiImg}></img>
              {/* <div
                className={Style.linkedInContainer}
                onClick={() => window.open(" ", "_blank")}
              >
                <img src={linkedIn}></img>
              </div> */}
              <div className={Style.name}>Gopi</div>
              <div className={Style.role}>Fitness Trainer</div>
            </div>

            {/* <div className={Style.itemOne}>
              <img className={Style.itemImage} src={hemanth2Img}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() => window.open(" ", "_blank")}
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Hemanth</div>
              <div className={Style.role}>Physiotherapist</div>
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={pavanImg}></img>
              <div
                className={Style.linkedInContainer}
                onClick={() => window.open(" ", "_blank")}
              >
                <img src={linkedIn}></img>
              </div>
              <div className={Style.name}>Pavan</div>
              <div className={Style.role}>Hospitality Sales</div>
            </div> */}


          </div>
        </div>


        <div className={Style.salesTeamContainer}>
          <div className={Style.salesHeader}>House Team</div>

          <div className={Style.salesTeamImages}>
            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={karthikImg}></img>
              {/* <div
                className={Style.linkedInContainer}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/akhila08lkd/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn}></img>
              </div> */}
              <div className={Style.name}>Karthik</div>
              {/* <div className={Style.role}>HR Executive</div> */}
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={shivaImg}></img>
              {/* <div
                className={Style.linkedInContainer}
                onClick={() => window.open(" ", "_blank")}
              >
                <img src={linkedIn}></img>
              </div> */}
              <div className={Style.name}>Shiva</div>
              {/* <div className={Style.role}>Finance Head</div> */}
            </div>

            <div className={Style.itemOne}>
              <img className={Style.itemImage} src={ajayImg}></img>
              {/* <div
                className={Style.linkedInContainer}
                onClick={() => window.open(" ", "_blank")}
              >
                <img src={linkedIn}></img>
              </div> */}
              <div className={Style.name}>Ajay</div>
              {/* <div className={Style.role}>Finance Head</div> */}
            </div>


          </div>
        </div>


      </div>

      <div>
        <Footer />
      </div>
    </div>
    </ScrollToTop>
  );
}
