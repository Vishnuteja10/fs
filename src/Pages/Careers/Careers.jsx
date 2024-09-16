import React from "react";
import Style from "./Careers.module.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import bgImg from "../../assets/Careers/bgImg.png";
import timeImg from "../../assets/Careers/refresh.png";
import EmployeeStories from "../../components/EmployeeStories/EmployeeStories";
import Footer from "../../components/Footer/Footer";
// import PlaceIcon from '@mui/icons-material/Place';

import playStore from "../../assets/appImages/playstore.png";
import appleStore from "../../assets/appImages/apple-store.png";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import watsappImg from '../../assets/appImages/watsapp.png'
import AppIconsComponent from "../../components/AppIconsComponent/AppIconsComponent";

function Careers() {
  return (
    <ScrollToTop>
      <div className={Style.main}>

        <AppIconsComponent />

        {/* <div className={Style.appIconsContainer}>
          <div onClick={() => window.open("https://play.google.com/store/apps/details?id=com.fracspace", "_blank")}>
            <img className={Style.playStore} src={playStore}></img>
          </div>

          <div onClick={() => window.open("https://apps.apple.com/in/app/fracspace/id6498551006", "_blank")}>
            <img className={Style.appleStore} src={appleStore}></img>
          </div>

          
        <div onClick={() => window.open("https://wa.me/9880626111", "_blank")}>
          <img className={`${Style.watsapp} ${Style.bounce}`} src={watsappImg}></img>
        </div>

        </div> */}

        <div className={Style.navBar}>
          <Navbar2 />
        </div>

        <div className={Style.main2}>
          {/* <div>Careers</div> */}
          <div className={Style.header}>We're Looking For Talented People</div>
          <div className={Style.imageContainer}>
            <img src={bgImg}></img>
          </div>

          <div className={Style.Container}>
            <div className={Style.jobCategory}>Job Openings</div>

            <div className={Style.jobsContainer}>
              <div className={Style.jobItem}>
                <div className={Style.jobRoleContainer}>
                  <div className={Style.jobRole}>Jr HR</div>
                  {/* <div className={Style.joblocation}>
                    {" "}
                    Hyderabad,Telangana,India
                  </div> */}
                </div>
                <div className={Style.description}>
                  Fracspace is seeking a motivated and talented Junior HR
                  professional to join our dynamic team in Hyderabad. This
                  full-time position requires 1 to 3 years of work experience in
                  Human Resources. The Junior HR role involves handling key HR
                  functions, including recruitment, employee relations, and
                  implementing HR policies.
                </div>
                <div className={Style.jobTypeContainer}>
                  <div className={Style.type}>Full time</div>
                  <div className={Style.jobLoc}>On Site</div>
                </div>
                <div className={Style.applyContainer}>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/jobs/search/?currentJobId=4019919199&keywords=fracspace&origin=BLENDED_SEARCH_RESULT_NAVIGATION_JOB_CARD&originToLandingJobPostings=4019919199%2C4019911699%2C4019914692",
                        "_blank"
                      )
                    }
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* <div className={Style.jobItem}>
                <div className={Style.jobRoleContainer}>
                  <div className={Style.jobRole}>
                    Sr Digital Marketing Executive
                  </div>
                  <div className={Style.joblocation}>
                    {" "}
                    Hyderabad,Telangana,India
                  </div>
                </div>
                <div className={Style.description}>
                  FracSpace Private Limited is seeking a talented Sr Digital
                  Marketing Executive to join our dynamic team. This mid-level
                  position, based in Hyderabad, requires a proficient individual
                  who can develop and execute strategies to drive business in
                  new and existing markets. The ideal candidate will have a
                  strong background in digital marketing and a passion for real
                  estate.
                </div>

                <div className={Style.jobTypeContainer}>
                  <div className={Style.type}>Full time</div>
                  <div className={Style.jobLoc}>On Site</div>
                </div>

                <div className={Style.applyContainer}>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/jobs/search/?currentJobId=4019918205&keywords=fracspace&origin=BLENDED_SEARCH_RESULT_NAVIGATION_JOB_CARD&originToLandingJobPostings=4019919199%2C4019911699%2C4019914692",
                        "_blank"
                      )
                    }
                  >
                    Apply
                  </button>
                </div>
              </div> */}

            </div>
          </div>

          <div className={Style.Container}>
            <div className={Style.jobCategory}></div>

            <div className={Style.jobsContainer}>
              <div className={Style.jobItem}>
              <div className={Style.jobRoleContainer}>
                  <div className={Style.jobRole}>
                    Sr Digital Marketing Executive
                  </div>
                  {/* <div className={Style.joblocation}>
                    {" "}
                    Hyderabad,Telangana,India
                  </div> */}
                </div>
                <div className={Style.description}>
                  Junior CRM Executive-Real Estate role in Fracspace Private
                  Limited, a leading fractional ownership company in real
                  estate, headquartered in Hyderabad. Full-Time position with
                  1-3 years experience.
                </div>

                <div className={Style.jobTypeContainer}>
                  <div className={Style.type}>Full time</div>
                  <div className={Style.jobLoc}>On Site</div>
                </div>

                <div className={Style.applyContainer}>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/jobs/search/?currentJobId=4019918205&keywords=fracspace&origin=BLENDED_SEARCH_RESULT_NAVIGATION_JOB_CARD&originToLandingJobPostings=4019919199%2C4019911699%2C4019914692",
                        "_blank"
                      )
                    }
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div className={Style.jobItem}>
                <div className={Style.jobRoleContainer}>
                  <div className={Style.jobRole}>Inside Sales Presales </div>
                  {/* <div className={Style.joblocation}>
                    {" "}
                    Hyderabad,Telangana,India
                  </div> */}
                </div>
                <div className={Style.description}>
                  Inside Sales Presales Immediate position at FracSpace Private
                  Limited is a Full-Time role based in Hyderabad. This is a
                  Fresher level position with minimum 0 years and maximum 1
                  years of experience.
                </div>

                <div className={Style.jobTypeContainer}>
                  <div className={Style.type}>Full time</div>
                  <div className={Style.jobLoc}>On Site</div>
                </div>

                <div className={Style.applyContainer}>
                  <button  onClick={() =>
                      window.open(
                        "https://www.linkedin.com/jobs/search/?currentJobId=4019923216&keywords=fracspace&origin=BLENDED_SEARCH_RESULT_NAVIGATION_JOB_CARD&originToLandingJobPostings=4019919199%2C4019911699%2C4019914692",
                        "_blank"
                      )
                    }>Apply</button>
                </div>
              </div>

              <div className={Style.jobItem}>
                <div className={Style.jobRoleContainer}>
                  <div className={Style.jobRole}>Junior Executive Personal Assistant (Male preffered)</div>
                  {/* <div className={Style.joblocation}>
                    {" "}
                    Hyderabad,Telangana,India
                  </div> */}
                </div>
                <div className={Style.description}>
                  Junior Executive Personal Assistant role with 1 to 3 years of
                  experience in Hyderabad. Full-Time position at FracSpace
                  Private Limited in the Real Estate industry. Salary range
                  depending on experience.
                </div>

                <div className={Style.jobTypeContainer}>
                  <div className={Style.type}>Full time</div>
                  <div className={Style.jobLoc}>On Site</div>
                </div>

                <div className={Style.applyContainer}>
                  <button  onClick={() =>
                      window.open(
                        "https://www.linkedin.com/jobs/search/?currentJobId=4019918073&keywords=fracspace&origin=BLENDED_SEARCH_RESULT_NAVIGATION_JOB_CARD&originToLandingJobPostings=4019919199%2C4019911699%2C4019914692",
                        "_blank"
                      )
                    }>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.employeeStories}>{/* <EmployeeStories /> */}</div>

        <div className={Style.footer}>
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
}

export default Careers;
