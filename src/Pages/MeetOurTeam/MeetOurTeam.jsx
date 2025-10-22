import React, { useState } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Style from "./MeetOurTeam.module.css";

import linkedIn from "../../assets/MeetOurTeam/linkedIn.png";

import Footer from "../../components/Footer/Footer";

import teamImage from "../../assets/MeetOurTeam/team/team.jpeg";

import diptiImg from "../../assets/MeetOurTeam/sales/dipti.jpg";
import hemanthImg from "../../assets/MeetOurTeam/sales/hemanth.jpeg";
import dnsImg from "../../assets/MeetOurTeam/sales/dns.jpeg";
import prashanthImg from "../../assets/MeetOurTeam/sales/prashanth.jpeg";
import avinashImg from "../../assets/MeetOurTeam/sales/avinash.jpg";
import harirajImg from "../../assets/MeetOurTeam/sales/hariraj.jpg";

import divyaImg from "../../assets/MeetOurTeam/sales/divya.jpeg";
import rishabImg from "../../assets/MeetOurTeam/sales/rishab.jpeg";

import sudheerImg from "../../assets/MeetOurTeam/marketing/sudheer.jpeg";
import hruthikImg from "../../assets/MeetOurTeam/marketing/hruthik.webp";
import vivekanandaImg from "../../assets/MeetOurTeam/marketing/vivekananda.webp";

import abhaImg from "../../assets/MeetOurTeam/tech/abha.jpeg";
import rakeshImg from "../../assets/MeetOurTeam/tech/rakesh.jpeg";
import vishnuImg from "../../assets/MeetOurTeam/tech/vishnuteja.jpeg";
import sadikImg from "../../assets/MeetOurTeam/tech/sadikh.webp";
import tejaswiniImg from "../../assets/MeetOurTeam/tech/tejaswini.webp";

import krishnaImg from "../../assets/MeetOurTeam/tech/krishna.jpg";
import akhilImg from "../../assets/MeetOurTeam/tech/akhil.jpg";
import yeshwanthImg from "../../assets/MeetOurTeam/tech/yeshwanth.jpg";

import tarunReddyImg from "../../assets/MeetOurTeam/construction/tarunReddy.jpg";
import madhuImg from "../../assets/MeetOurTeam/construction/madhu.webp";

import naveenSirImg from "../../assets/MeetOurTeam/hrAndAccounts/naveenSir.jpeg";

import prajnaImg from "../../assets/MeetOurTeam/hrAndAccounts/prajna.jpg";
import dikshith from "../../assets/MeetOurTeam/hrAndAccounts/dikshith.webp";

import unnathSirImg from "../../assets/MeetOurTeam/founder/unnathSir.jpeg";

import deepakImg from "../../assets/MeetOurTeam/fitnessteam/deepak.jpeg";
import mansoorImg from "../../assets/MeetOurTeam/fitnessteam/mansoor.jpeg";

import gopiImg from "../../assets/MeetOurTeam/fitnessteam/gopi1.jpeg";
import vivekImg from "../../assets/MeetOurTeam/fitnessteam/vivek.jpeg";
import dinuImg from "../../assets/MeetOurTeam/fitnessteam/dinu.webp";

import shivaImg from "../../assets/MeetOurTeam/officeSupport/shiva.jpeg";

import srinivasImg from "../../assets/MeetOurTeam/officeSupport/srinivas.jpeg";
import ranjithImg from "../../assets/MeetOurTeam/officeSupport/ranjith.jpeg";

import compressedImage1 from "../../assets/shrimmer/ourteam/compressed1.jpeg";
import compressedImage from "../../assets/shrimmer/ourteam/compressedImg.jpeg";

import compressedImage2 from "../../assets/shrimmer/ourteam/compressed2.jpeg";

import teamCompressedImage from "../../assets/shrimmer/ourteam/teamCompressed.jpeg";

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import AppIconsComponent from "../../components/AppIconsComponent/AppIconsComponent";

import { Helmet } from "react-helmet";
import OffersTopBanner from "../../components/OffersTopBanner/OffersTopBanner";

export default function MeetOurTeam() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true); // Update state when image has loaded
  };

  return (
    <ScrollToTop>
      <div>
        <Helmet>
          <title>Meet Our Team | Fracspace</title>
          <meta
            name="description"
            content="Get to know the dedicated team behind Fracspace, including our visionary leaders and skilled agents."
          />
          <meta name="robots" content="index, follow" />

         
        </Helmet>

        <AppIconsComponent />

        {/* <div className={Style.topBanner}>
          <OffersTopBanner />
        </div> */}

        <div className={Style.navBar}>
          <Navbar2 />
        </div>

        <header className={Style.header}>Meet Our Team</header>
        <div className={Style.imageContainer}>
          <img
            src={isImageLoaded ? teamImage : teamCompressedImage}
            loading="lazy"
            alt="team"
            onLoad={handleImageLoad}
            className={isImageLoaded ? Style.teamImage : Style.placeholderImage}
          ></img>
        </div>

        <div className={Style.teamContainer}>
          <div className={Style.header}>Meet The Team</div>
          <div className={Style.info}>
            Get to know the people behind Fracspace who make it all possible.
          </div>

          <article className={Style.salesTeamContainer1}>
            <div>
              <h2 className={Style.salesHeader1}>Visionary in Chief</h2>

              <div className={Style.salesTeamImages}>
                <div className={Style.itemOne}>
                  <img
                    loading="lazy"
                    alt="image"
                    onLoad={handleImageLoad}
                    className={
                      isImageLoaded ? Style.itemImage : Style.placeholderImage
                    }
                    src={isImageLoaded ? unnathSirImg : compressedImage}
                  />
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
          </article>

          <section className={Style.salesTeamContainer}>
            <div className={Style.salesHeader}>Business & Sales Team</div>

            <div className={Style.salesTeamImages}>
              <article className={Style.itemOne}>
                <div>
                  <img
                    loading="lazy"
                    alt="team mate image"
                    onLoad={handleImageLoad}
                    className={
                      isImageLoaded ? Style.itemImage : Style.placeholderImage
                    }
                    src={isImageLoaded ? divyaImg : compressedImage2}
                  />
                  {/* <div className={Style.linkedInContainer}>
                <img src={linkedIn}></img>
              </div> */}
                  <div className={Style.name}>Divya</div>
                  <div className={Style.role}>Second in Command</div>
                </div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? dnsImg : compressedImage1}
                />
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
                <div className={Style.role}>Special Projects Commander</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? rishabImg : compressedImage1}
                />
                <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/rishab-tirunahari-94216a271/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div>
                <div className={Style.name}>Rishab</div>
                <div className={Style.role}>Director of Sales - Fracspace</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? prashanthImg : compressedImage1}
                />
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
                <div className={Style.role}>Hospitality & Growth Manager</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? avinashImg : compressedImage1}
                />
                {/* <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/prashanth-reddy-05987a1a1/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div> */}
                <div className={Style.name}>Avinash</div>
                <div className={Style.role}>Sales Manager</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? harirajImg : compressedImage1}
                />
                {/* <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/prashanth-reddy-05987a1a1/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div> */}
                <div className={Style.name}>Hari Raj</div>
                <div className={Style.role}>Pre Sales Executive</div>
              </article>

              {/* <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? diptiImg : compressedImage2}
                />
                <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/diptimayee-sahu-5172b929b",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div>
                <div className={Style.name}>Diptimayee Sahu</div>
                <div className={Style.role}>Presales Executive</div>
              </article> */}
            </div>
          </section>

          <section className={Style.salesTeamContainer}>
            <div className={Style.salesHeader}>Marketing Team</div>

            <div className={Style.salesTeamImages}>
              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? sudheerImg : compressedImage1}
                />
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
                <div className={Style.role}> Sr Graphic Designer</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? vivekanandaImg : compressedImage1}
                />
                <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/vivekananda-potarlanka-best-digitalmarketingexecutive/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div>
                <div className={Style.name}>Vivek</div>
                <div className={Style.role}> Digital Marketing Specialist</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? hruthikImg : compressedImage1}
                />
                <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/gundeti-hruthik-sai-a8ba09327/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div>
                <div className={Style.name}>Hruthik</div>
                <div className={Style.role}>Video Editor</div>
              </article>
            </div>
          </section>

          <section className={Style.salesTeamContainer}>
            <div className={Style.salesHeader}>Tech Team</div>

            <div className={Style.salesTeamImages}>
              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? abhaImg : compressedImage2}
                />
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
                <div className={Style.role}>Tech Lead</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? rakeshImg : compressedImage1}
                />
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
                <div className={Style.role}>
                  Second Engineer In Command(SDE-2)
                </div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? vishnuImg : compressedImage1}
                />
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
                <div className={Style.role}>Sr Full Stack Web Developer</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? krishnaImg : compressedImage1}
                />
                <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/krishna-gupta-6b16b7224/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div>
                <div className={Style.name}>Krishna</div>
                <div className={Style.role}>Junior Software Developer </div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? akhilImg : compressedImage1}
                />
                <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/akhil-balthi-0382892bb/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div>
                <div className={Style.name}>Akhil</div>
                <div className={Style.role}>Junior Software Developer </div>
              </article>

              {/* <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? sadikImg : compressedImage1}
                />
                <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/akhil-balthi-0382892bb/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div>
                <div className={Style.name}>Sadikh</div>
                <div className={Style.role}>IT Admin </div>
              </article> */}

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? tejaswiniImg : compressedImage1}
                />
                {/* <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/akhil-balthi-0382892bb/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div> */}
                <div className={Style.name}>Tejaswini</div>
                <div className={Style.role}>UI/UX designer </div>
              </article>
            </div>
          </section>

          <section className={Style.salesTeamContainer}>
            <div className={Style.salesHeader}>Construction Team</div>

            <div className={Style.salesTeamImages}>
              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? tarunReddyImg : compressedImage2}
                />
                <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/tarun-reddy-23a875272",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div>
                <div className={Style.name}>Tarun </div>
                <div className={Style.role}>Project Commander</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? madhuImg : compressedImage2}
                />
                {/* <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/tarun-reddy-23a875272",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div> */}
                <div className={Style.name}>Madhu </div>
                <div className={Style.role}>Site Engineer</div>
              </article>
            </div>
          </section>

          <section className={Style.salesTeamContainer}>
            <div className={Style.salesHeader}> Accounts & HR Team</div>

            <div className={Style.salesTeamImages}>
              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? naveenSirImg : compressedImage1}
                />

                <div className={Style.name}>Naveen</div>
                <div className={Style.role}>Finance Head</div>
              </article>

              {/* <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? dikshith : compressedImage1}
                />
               
                <div className={Style.name}>Dikshith</div>
                <div className={Style.role}>Growth & Culture Manager</div>
              </article> */}

              {/* <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? hemanthImg : compressedImage1}
                />
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
                <div className={Style.role}>Growth & Culture Manager</div>
              </article> */}

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? prajnaImg : compressedImage2}
                />
                <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/prajna-kamath-56a625363/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div>
                <div className={Style.name}>Prajna</div>
                <div className={Style.role}>HR Executive</div>
              </article>
            </div>
          </section>

          <section className={Style.salesTeamContainer}>
            <div className={Style.salesHeader}>Hospitality Team</div>

            <div className={Style.salesTeamImages}>
              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? dinuImg : compressedImage1}
                />
                {/* <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/vivek-athmakur/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div> */}
                <div className={Style.name}>Dinu</div>
                <div className={Style.role}>General Manager / Operations</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? mansoorImg : compressedImage1}
                />
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
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? deepakImg : compressedImage1}
                />
                {/* <div
                      className={Style.linkedInContainer}
                    onClick={() => window.open(" ", "_blank")}
                     >
                   <img src={linkedIn}></img>
                    </div> */}
                <div className={Style.name}>Deepak</div>
                <div className={Style.role}>Fitness Trainer</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? gopiImg : compressedImage1}
                />
                {/* <div
                className={Style.linkedInContainer}
                onClick={() => window.open(" ", "_blank")}
              >
                <img src={linkedIn}></img>
              </div> */}
                <div className={Style.name}>Gopi</div>
                <div className={Style.role}>Fitness Trainer</div>
              </article>
            </div>
          </section>

          <section className={Style.salesTeamContainer}>
            <div className={Style.salesHeader}>House Team</div>

            <div className={Style.salesTeamImages}>
              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? shivaImg : compressedImage1}
                />

                <div className={Style.name}>Shiva</div>
                {/* <div className={Style.role}>Finance Head</div> */}
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? srinivasImg : compressedImage1}
                />
                <div className={Style.name}>Srinivas</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? ranjithImg : compressedImage1}
                />
                <div className={Style.name}>Ranjith</div>
              </article>

              {/* <article className={Style.itemOne}>
              <img className={Style.itemImage} src={ajayImg}></img>
              <div className={Style.name}>Ajay</div>
            </article> */}
            </div>
          </section>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
}
