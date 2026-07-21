import React, { useState } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Style from "./MeetOurTeam.module.css";

import linkedIn from "../../assets/MeetOurTeam/linkedIn.png";

import Footer from "../../components/Footer/Footer";

import teamImage from "../../assets/MeetOurTeam/team/team.jpeg";

import dnsImg from "../../assets/MeetOurTeam/sales/dns1.webp";
import abhishekImg from "../../assets/MeetOurTeam/sales/abhishek.webp";
import divyaImg from "../../assets/MeetOurTeam/sales/divya.webp";
import gitanshImg from "../../assets/MeetOurTeam/sales/gitansh.jpg";
import harshathImg from "../../assets/MeetOurTeam/sales/harshath.jpg";
import charithImg from "../../assets/MeetOurTeam/sales/charith.jpg";
import pranaviImg from "../../assets/MeetOurTeam/sales/pranavi.jpg";
import nithyaImg from "../../assets/MeetOurTeam/sales/nithya.jpg";
import siriImg from "../../assets/MeetOurTeam/sales/siri.jpg";
import likithaImg from "../../assets/MeetOurTeam/sales/likitha.jpg";

// import sudheerImg from "../../assets/MeetOurTeam/marketing/sudheer.jpeg";
import hruthikImg from "../../assets/MeetOurTeam/marketing/hruthik.webp";
import vivekanandaImg from "../../assets/MeetOurTeam/marketing/vivekananda.webp";
import mithunImg from "../../assets/MeetOurTeam/marketing/mithun.jpg";
import gopichandImg from "../../assets/MeetOurTeam/marketing/gopichand.jpg";
import nikithaImg from "../../assets/MeetOurTeam/marketing/nikitha.jpg";

import rakeshImg from "../../assets/MeetOurTeam/tech/rakesh1.webp";
import vishnuImg from "../../assets/MeetOurTeam/tech/vishnu.webp";
import tejaswiniImg from "../../assets/MeetOurTeam/tech/tejaswini.webp";
import krishnaImg from "../../assets/MeetOurTeam/tech/krishna.webp";
import akhilImg from "../../assets/MeetOurTeam/tech/akhil.webp";
import shashidharImg from "../../assets/MeetOurTeam/tech/shashidhar.jpg";

import tarunReddyImg from "../../assets/MeetOurTeam/construction/tarun.webp";
import madhuImg from "../../assets/MeetOurTeam/construction/madhu1.webp";

import naveenSirImg from "../../assets/MeetOurTeam/hrAndAccounts/naveenSir.webp";
import mounikaImg from "../../assets/MeetOurTeam/hrAndAccounts/mounika.jpg";
import accounts1Img from "../../assets/MeetOurTeam/hrAndAccounts/accounts1.jpg";
import accounts2Img from "../../assets/MeetOurTeam/hrAndAccounts/accounts2.jpg";

import unnathSirImg from "../../assets/MeetOurTeam/founder/unnathSir.jpeg";

import hospitalityManagerImg from "../../assets/MeetOurTeam/fitnessteam/hospitality.jpg";
import deepakImg from "../../assets/MeetOurTeam/fitnessteam/deepak.webp";
import mansoorImg from "../../assets/MeetOurTeam/fitnessteam/mansoor.webp";

import shivaImg from "../../assets/MeetOurTeam/officeSupport/shiva.webp";

import srinivasImg from "../../assets/MeetOurTeam/officeSupport/srinivas.webp";
import ranjithImg from "../../assets/MeetOurTeam/officeSupport/ranjith.webp";

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
                  src={isImageLoaded ? abhishekImg : compressedImage1}
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
                <div className={Style.name}>Abhishek</div>
                <div className={Style.role}>Client Cultivator</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? gitanshImg : compressedImage1}
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
                <div className={Style.name}>Gitansh</div>
                <div className={Style.role}>Client Cultivator</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? harshathImg : compressedImage1}
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
                <div className={Style.name}>Harshath</div>
                <div className={Style.role}>Client Cultivator</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? charithImg : compressedImage1}
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
                <div className={Style.name}>Charith</div>
                <div className={Style.role}>Client Cultivator</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? pranaviImg : compressedImage1}
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
                <div className={Style.name}>Pranavi</div>
                <div className={Style.role}>Client Cultivator</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? nithyaImg : compressedImage1}
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
                <div className={Style.name}>Nithya</div>
                <div className={Style.role}>Client Cultivator</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? siriImg : compressedImage1}
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
                <div className={Style.name}>Siri</div>
                <div className={Style.role}>Client Cultivator</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? likithaImg : compressedImage1}
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
                <div className={Style.name}>Likitha</div>
                <div className={Style.role}>Client Cultivator</div>
              </article>
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

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? nikithaImg : compressedImage1}
                />
                {/* <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/gundeti-hruthik-sai-a8ba09327/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div> */}
                <div className={Style.name}>Nikitha</div>
                <div className={Style.role}>PR & Media Manager</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? mithunImg : compressedImage1}
                />
                {/* <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/gundeti-hruthik-sai-a8ba09327/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div> */}
                <div className={Style.name}>Mithun</div>
                <div className={Style.role}>Graphic Designer</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? gopichandImg : compressedImage1}
                />
                {/* <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/gundeti-hruthik-sai-a8ba09327/",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div> */}
                <div className={Style.name}>Gopichand</div>
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
                <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/tejaswini-kilaru01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div>
                <div className={Style.name}>Tejaswini</div>
                <div className={Style.role}>UI/UX Designer </div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? shashidharImg : compressedImage1}
                />
                {/* <div
                  className={Style.linkedInContainer}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/tejaswini-kilaru01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                      "_blank"
                    )
                  }
                >
                  <img src={linkedIn}></img>
                </div> */}
                <div className={Style.name}>Shashidhar</div>
                <div className={Style.role}>IT Admin </div>
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
            <div className={Style.salesHeader}>HR & Accounts Team</div>

            <div className={Style.salesTeamImages}>
              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? mounikaImg : compressedImage1}
                />

                <div className={Style.name}>Mounika</div>
                <div className={Style.role}>HR</div>
              </article>

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

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? accounts1Img : compressedImage1}
                />

                <div className={Style.name}>Tejaswini</div>
                <div className={Style.role}>Accountant</div>
              </article>

              <article className={Style.itemOne}>
                <img
                  loading="lazy"
                  alt="team mate image"
                  onLoad={handleImageLoad}
                  className={
                    isImageLoaded ? Style.itemImage : Style.placeholderImage
                  }
                  src={isImageLoaded ? accounts2Img : compressedImage1}
                />

                <div className={Style.name}>Faizhan</div>
                <div className={Style.role}>Junior Accountant</div>
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
                  src={isImageLoaded ? hospitalityManagerImg : compressedImage1}
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
                <div className={Style.name}>Faraz</div>
                <div className={Style.role}>Assistant General Manager </div>
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
