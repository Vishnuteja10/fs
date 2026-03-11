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

import watsappImg from "../../assets/appImages/watsapp.png";
import AppIconsComponent from "../../components/AppIconsComponent/AppIconsComponent";

import { Helmet } from "react-helmet";

function Careers() {
  return (
    <ScrollToTop>
      <div className={Style.main}>
        <AppIconsComponent />

        <Helmet>
          <title>Careers at Fracspace</title>
          <meta
            name="description"
            content="Join Fracspace and explore exciting career opportunities in sales,marketing,tech and operations."
          />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <div className={Style.navBar}>
          <Navbar2 />
        </div>

        <section className={Style.main2}>
          {/* <div>Careers</div> */}
          <h1 className={Style.header}>We're Looking For Talented People</h1>
          <div className={Style.imageContainer}>
            <img alt="Fracspace Careers" src={bgImg}></img>
          </div>

          <div className={Style.Container}>
            <h2 className={Style.jobCategory}>Job Openings</h2>

            <div className={Style.jobsContainer}>
              {/* <article className={Style.jobItem}>
                <div className={Style.jobRoleContainer}>
                  <div className={Style.jobRole}>Jr HR</div>
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
              </article> */}
            </div>
          </div>

          <div className={Style.Container}>
            <div className={Style.jobCategory}></div>

            <div className={Style.jobsContainer}>
              <article className={Style.jobItem}>
                <div className={Style.jobRoleContainer}>
                  <div className={Style.jobRole}>Pre Sales Executive</div>
                  {/* <div className={Style.joblocation}>
                    {" "}
                    Hyderabad,Telangana,India
                  </div> */}
                </div>
                <div className={Style.description}>
                  The Pre Sales Executive position at FracSpace Private Limited
                  is an excellent opportunity for a fresher to join our team in
                  Hyderabad. As a full-time role, the candidate will engage with
                  our cutting-edge fractional ownership platform, assisting in
                  driving business in both new and existing markets. The
                  position invites those passionate about real estate and client
                  interactions.
                </div>

                <div className={Style.jobTypeContainer}>
                  <div className={Style.type}>Full time</div>
                  <div className={Style.jobLoc}>On Site</div>
                </div>

                <div className={Style.applyContainer}>
                  {/* <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/jobs/search/?currentJobId=4019918205&keywords=fracspace&origin=BLENDED_SEARCH_RESULT_NAVIGATION_JOB_CARD&originToLandingJobPostings=4019919199%2C4019911699%2C4019914692",
                        "_blank"
                      )
                    }
                  >
                    Apply
                  </button> */}
                  <div className={Style.applyJob}>
                    <div className={Style.type}>To Apply :</div>
                    <div>
                      <span className={Style.type}>
                        Share Your Resume : hr@fracspace.com
                      </span>
                    </div>
                    <div>
                      <span className={Style.type}>Contact : 92814 43562</span>
                    </div>
                  </div>
                </div>
                <div className={Style.downloadContainer}>
                  <button
                    className={Style.downloadButton}
                    onClick={() => window.open("/presales.pdf", "_blank")}
                  >
                    📄 Download Job Description (PDF)
                  </button>
                </div>
              </article>

              <article className={Style.jobItem}>
                <div className={Style.jobRoleContainer}>
                  <div className={Style.jobRole}>Hospitality Executive</div>
                  {/* <div className={Style.joblocation}>
                    {" "}
                    Hyderabad,Telangana,India
                  </div> */}
                </div>
                <div className={Style.description}>
                  We are looking for a proactive and well-presented Hospitality
                  Executive to manage operations across multiple properties. The
                  ideal candidate should have strong communication skills, a
                  problem solving mindset, and the ability to multitask
                  efficiently. This role demands someone who can oversee guest
                  satisfaction, coordinate maintenance, manage billing, and
                  ensure operational excellence across 7 properties.
                </div>
                <div>
                  <div className={Style.type}>Requirements</div>
                  <div>
                    <div>
                      {" "}
                      Minimum 1 year of relevant experience in the hospitality
                      industry{" "}
                    </div>
                    <div>
                      {" "}
                      A Bachelor’s degree in Hospitality Management is
                      preferred.
                    </div>
                  </div>
                </div>

                <div className={Style.jobTypeContainer}>
                  <div className={Style.type}>Full time</div>
                  <div className={Style.jobLoc}>On Site</div>
                </div>

                <div className={Style.applyJob}>
                  <div className={Style.type}>To Apply :</div>
                  <div>
                    <span className={Style.type}>
                      Share Your Resume : hr@fracspace.com
                    </span>
                  </div>
                  <div>
                    <span className={Style.type}>Contact : 92814 43562</span>
                  </div>
                </div>
                <div className={Style.downloadContainer}>
                  <button
                    className={Style.downloadButton}
                    onClick={() =>
                      window.open("/hospitalityexecutive.pdf", "_blank")
                    }
                  >
                    📄 Download Job Description (PDF)
                  </button>
                </div>
              </article>

              {/* <article className={Style.jobItem}>
                <div className={Style.jobRoleContainer}>
                  <div className={Style.jobRole}>
                    Junior Executive Personal Assistant (Male preffered)
                  </div>
                 
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
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/jobs/search/?currentJobId=4019918073&keywords=fracspace&origin=BLENDED_SEARCH_RESULT_NAVIGATION_JOB_CARD&originToLandingJobPostings=4019919199%2C4019911699%2C4019914692",
                        "_blank"
                      )
                    }
                  >
                    Apply
                  </button>
                </div>
              </article> */}
            </div>
          </div>
        </section>

        <div className={Style.employeeStories}>{/* <EmployeeStories /> */}</div>

        <div className={Style.footer}>
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
}

export default Careers;
