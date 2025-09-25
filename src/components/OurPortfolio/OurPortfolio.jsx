import React, { useEffect, useRef, useState } from "react";
import Style from "./OurPortfolio.module.css";

import locationIcon from "../../assets/Portfolio/locationIcon.png";

import coOwnImage from "../../assets/coown/img2.jpeg";

import coOwnImage2 from "../../assets/coown/img1.jpeg";

import leftArrow from "../../assets/Portfolio/leftArrow.png";
import rightArrow from "../../assets/Portfolio/rightArrow.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import SoldOut from "../../assets/images/SoldOut.png";
import HotProperty from "../../assets/images/HotProperty.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";

import { useMediaQuery } from "react-responsive";

function OurPortfolio() {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const navigate = useNavigate();

  const [selectedLoction, setSelectedLocation] = useState("kerala");

  const [goaProperties, setGoaProperties] = useState([{}]);
  const [hyderabadProperties, setHyderabadProperties] = useState([{}]);
  const [keralaProperties, setKeralaProperties] = useState([{}]);
  const [karnatakaProperties, setKarnatakaProperties] = useState([{}]);

  const [varanasiProperties, setVaranasiProperties] = useState([{}]);
  const [nelloreProperties, setNelloreProperties] = useState([{}]);

  const [allProperties, setAllProperties] = useState([{}]);

  const containerRef = useRef(null);

  const scrollAmount = 80; // Adjust this based on the width of the contentBox

  const PROPERTIES_API =
    "https://apitest.fracspace.com/api/users/getPropertyDetails";

  const PROPERTIY_API =
    "https://apitest.fracspace.com/api/users/getPropertyDetailsById?_id=65ba3687d41d5864da966265";

  let properties;

  let goaProp;
  let hydProp;
  let keralaProp;
  let karnatakaProp;
  let varanasiProp;
  let nelloreProp;

  const headers = {
    "x-api-key": "Fracspace@2024"
  };

  useEffect(() => {
    axios.get(PROPERTIES_API, { headers }).then(
      (response) => {
        console.log("response is", response);
        setAllProperties(response?.data?.properties);
        properties = response?.data?.properties;
        goaProp = properties
          .filter((property) => property?.city?.toLowerCase() == "goa")
          .sort((a, b) => a.num - b.num);
        hydProp = properties
          .filter((property) => property?.city?.toLowerCase() == "hyderabad")
          .sort((a, b) => a.num - b.num);
        keralaProp = properties
          .filter((property) => property?.city?.toLowerCase() == "munnar")
          .sort((a, b) => a.num - b.num);

        karnatakaProp = properties
          .filter((property) => property?.city?.toLowerCase() == "kabini")
          .sort((a, b) => a.num - b.num);

        varanasiProp = properties
          .filter((property) => property?.city?.toLowerCase() == "varanasi")
          .sort((a, b) => a.num - b.num);

        nelloreProp = properties
          .filter((property) => property?.city?.toLowerCase() == "nellore")
          .sort((a, b) => a.num - b.num);

        setGoaProperties(goaProp);
        setHyderabadProperties(hydProp);
        setKeralaProperties(keralaProp);
        setKarnatakaProperties(karnatakaProp);
        setVaranasiProperties(varanasiProp);
        setNelloreProperties(nelloreProp);
        // console.log("kerala properties", keralaProp);

        // console.log(
        //   "response while fetching properties",
        //   allProperties,
        //   hydProp
        // );
      },
      (error) => {
        // console.log("error while fetching properties", error);
      }
    );
  }, []);

  const handleNext = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth;
      const scrollLeft = containerRef.current.scrollLeft;
      const clientWidth = containerRef.current.clientWidth;

      if (scrollLeft + clientWidth < containerWidth) {
        containerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth"
        });
      }
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;

      if (scrollLeft > 0) {
        containerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div className={Style.main}>
      <h2>Our Portfolio</h2>

      <section className={Style.propertyLocations}>
        <div
          className={`${Style.location} ${
            selectedLoction == "kerala" ? Style.selected : ""
          }`}
          onClick={() => {
            setSelectedLocation("kerala");
          }}
        >
          <img
            className={Style.locationIcon}
            src={locationIcon}
            alt="location icon"
          ></img>
          Munnar
        </div>

        <div
          className={`${Style.location} ${
            selectedLoction == "karnataka" ? Style.selected : ""
          }`}
          onClick={() => {
            setSelectedLocation("karnataka");
          }}
        >
          <img
            className={Style.locationIcon}
            src={locationIcon}
            alt="location icon"
          ></img>
          Kabini
        </div>

        <div
          className={`${Style.location} ${
            selectedLoction == "varanasi" ? Style.selected : ""
          }`}
          onClick={() => {
            setSelectedLocation("varanasi");
          }}
        >
          <img
            className={Style.locationIcon}
            src={locationIcon}
            alt="location icon"
          ></img>
          Varanasi
        </div>

        <div
          className={`${Style.location} ${
            selectedLoction == "hyderabad" ? Style.selected : ""
          }`}
          onClick={() => {
            setSelectedLocation("hyderabad");
          }}
        >
          <img
            className={Style.locationIcon}
            src={locationIcon}
            alt="location icon"
          ></img>
          Hyderabad
        </div>

        <div
          className={`${Style.location} ${
            selectedLoction == "nellore" ? Style.selected : ""
          }`}
          onClick={() => {
            setSelectedLocation("nellore");
          }}
        >
          <img
            className={Style.locationIcon}
            src={locationIcon}
            alt="location icon"
          ></img>
          Nellore
        </div>

        <div
          className={`${Style.location} ${
            selectedLoction == "goa" ? Style.selected : ""
          }`}
          onClick={() => {
            setSelectedLocation("goa");
          }}
        >
          <img
            className={Style.locationIcon}
            src={locationIcon}
            alt="location icon"
          ></img>
          Goa
        </div>
      </section>

      {!isMobile &&
        (selectedLoction == "goa" ||
          selectedLoction == "hyderabad" ||
          selectedLoction == "varanasi") && (
          <div className={Style.arrowContainer}>
            <div className={Style.leftArrowContainer} onClick={handlePrev}>
              {/* <FontAwesomeIcon icon={faChevronLeft} style={{color: "#fcfcfc",}} /> */}
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={Style.arrowIconLeft}
              />
              {/* <img src={leftArrow}></img> */}
            </div>

            <div className={Style.rightArrowContainer} onClick={handleNext}>
              {/* <img src={rightArrow}></img> */}
              {/* <FontAwesomeIcon icon={faChevronRight} style={{color: "#f9fafb",}} /> */}
              <FontAwesomeIcon
                icon={faChevronRight}
                className={Style.arrowIconRight}
              />
            </div>
          </div>
        )}

      <section ref={containerRef} className={Style.propertiesContainer}>
        {selectedLoction === "hyderabad" && (
          <div className={Style.properties}>
            {hyderabadProperties?.map(
              (property, index) =>
                property?.name !== "FRACSPACE DATES COUNTY" && (
                  <article
                    key={index}
                    className={Style.eachProperty}
                    onClick={() => navigate(`/eachProperty/${property?._id}`)}
                  >
                    <div className={Style.propertyImages}>
                      <img
                        className={Style.propertyImage}
                        src={property?.image?.Image1}
                      ></img>
                      {property?.H_property == true ? (
                        <img
                          src={HotProperty}
                          className={Style.hotProperty}
                        ></img>
                      ) : (
                        <img src={SoldOut} className={Style.soldOut}></img>
                      )}
                    </div>

                    <div className={Style.propertyDetails}>
                      <h6>{property?.name}</h6>

                      {!isMobile ? (
                        <div className={Style.detailsContainer}>
                          <div className={Style.leftContainer}>
                            <div>
                              <div>Frac Price : ₹ {property?.FC_Price}</div>
                              <div>
                                {property?.Type} | {property?.area}
                              </div>
                            </div>
                          </div>

                          <div className={Style.rightContainer}>
                            <div>{property?.Location}</div>

                            <div className={Style.btnContainer}>
                              <button
                                onClick={() =>
                                  navigate(`/eachproperty/${property?._id}`)
                                }
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div>
                            <div>Frac Price : {property?.FC_Price}</div>
                          </div>
                          <div>{property?.Location}</div>
                          <div>
                            {property?.Type} | {property?.area}
                          </div>
                          <div className={Style.btnContainer}>
                            <button
                              onClick={() =>
                                navigate(`/eachProperty/${property?._id}`)
                              }
                            >
                              View Details
                            </button>
                          </div>{" "}
                        </div>
                      )}
                    </div>
                  </article>
                )
            )}

            {/* <article className={Style.eachProperty}>
              <div className={Style.propertyImages}>
                <img src={coOwnImage}></img>
              </div>

              <div className={Style.propertyDetails}>
                <h6>Abode I</h6>
                <div>
                  <div>Frac Price : 12,000,000</div>
                </div>
                <div>Revora,Goa</div>
                <div>6 Glamping Domes | 2 acres</div>
                <div className={Style.btnContainer}>
                  <button>View Details</button>
                </div>
              </div>
            </article> */}
          </div>
        )}

        {selectedLoction === "nellore" && (
          <div className={Style.properties}>
            {nelloreProperties?.map((property, index) => (
              <article
                key={index}
                className={Style.eachProperty}
                onClick={() => navigate(`/eachProperty/${property?._id}`)}
              >
                <div className={Style.propertyImages}>
                  <img
                    className={Style.propertyImage}
                    src={property?.image?.Image1}
                  ></img>
                  {property?.H_property == true ? (
                    <img src={HotProperty} className={Style.hotProperty}></img>
                  ) : (
                    <img src={SoldOut} className={Style.soldOut}></img>
                  )}
                </div>

                <div className={Style.propertyDetails}>
                  <h6>{property?.name}</h6>

                  {!isMobile ? (
                    <div className={Style.detailsContainer}>
                      <div className={Style.leftContainer}>
                        <div>
                          <div>Frac Price : ₹ {property?.FC_Price}</div>
                          <div>
                            {property?.Type} | {property?.area}
                          </div>
                        </div>
                      </div>

                      <div className={Style.rightContainer}>
                        <div>{property?.Location}</div>

                        <div className={Style.btnContainer}>
                          <button
                            onClick={() =>
                              navigate(`/eachproperty/${property?._id}`)
                            }
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <div>Frac Price : {property?.FC_Price}</div>
                      </div>
                      <div>{property?.Location}</div>
                      <div>
                        {property?.Type} | {property?.area}
                      </div>
                      <div className={Style.btnContainer}>
                        <button
                          onClick={() =>
                            navigate(`/eachProperty/${property?._id}`)
                          }
                        >
                          View Details
                        </button>
                      </div>{" "}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {selectedLoction === "varanasi" && (
          <div className={Style.properties}>
            {varanasiProperties?.map((property, index) => (
              <article
                key={index}
                className={Style.eachProperty}
                onClick={() => navigate(`/eachProperty/${property?._id}`)}
              >
                <div className={Style.propertyImages}>
                  <img
                    className={Style.propertyImage}
                    src={property?.image?.Image1}
                  ></img>
                  {property?.H_property == true ? (
                    <img src={HotProperty} className={Style.hotProperty}></img>
                  ) : (
                    <img src={SoldOut} className={Style.soldOut}></img>
                  )}
                </div>

                <div className={Style.propertyDetails}>
                  <h6>{property?.name}</h6>

                  {!isMobile ? (
                    <div className={Style.detailsContainer}>
                      <div className={Style.leftContainer}>
                        <div>
                          <div>Frac Price : ₹ {property?.FC_Price}</div>
                          <div>
                            {property?.Type} | {property?.area}
                          </div>
                        </div>
                      </div>

                      <div className={Style.rightContainer}>
                        <div>{property?.Location}</div>

                        <div className={Style.btnContainer}>
                          <button
                            onClick={() =>
                              navigate(`/eachproperty/${property?._id}`)
                            }
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <div>Frac Price : {property?.FC_Price}</div>
                      </div>
                      <div>{property?.Location}</div>
                      <div>
                        {property?.Type} | {property?.area}
                      </div>
                      <div className={Style.btnContainer}>
                        <button
                          onClick={() =>
                            navigate(`/eachProperty/${property?._id}`)
                          }
                        >
                          View Details
                        </button>
                      </div>{" "}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {selectedLoction === "kerala" && (
          <div className={Style.properties}>
            {keralaProperties?.map((property, index) => (
              <article
                key={index}
                className={Style.eachProperty}
                onClick={() => navigate(`/eachProperty/${property?._id}`)}
              >
                <div className={Style.propertyImages}>
                  <img
                    className={Style.propertyImage}
                    src={property?.image?.Image1}
                  ></img>
                  {property?.H_property == true ? (
                    <img src={HotProperty} className={Style.hotProperty}></img>
                  ) : (
                    <img src={SoldOut} className={Style.soldOut}></img>
                  )}
                </div>

                <div className={Style.propertyDetails}>
                  <h6>{property?.name}</h6>

                  {!isMobile ? (
                    <div className={Style.detailsContainer}>
                      <div className={Style.leftContainer}>
                        <div>
                          <div>Frac Price : ₹ {property?.FC_Price}</div>
                          <div>
                            {property?.Type} | {property?.area}
                          </div>
                        </div>
                      </div>

                      <div className={Style.rightContainer}>
                        <div>{property?.Location}</div>

                        <div className={Style.btnContainer}>
                          <button
                            onClick={() =>
                              navigate(`/eachproperty/${property?._id}`)
                            }
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <div>Frac Price : {property?.FC_Price}</div>
                      </div>
                      <div>{property?.Location}</div>
                      <div>
                        {property?.Type} | {property?.area}
                      </div>
                      <div className={Style.btnContainer}>
                        <button
                          onClick={() =>
                            navigate(`/eachProperty/${property?._id}`)
                          }
                        >
                          View Details
                        </button>
                      </div>{" "}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {selectedLoction === "karnataka" && (
          <div className={Style.properties}>
            {karnatakaProperties?.map((property, index) => (
              <article
                key={index}
                className={Style.eachProperty}
                onClick={() => navigate(`/eachProperty/${property?._id}`)}
              >
                <div className={Style.propertyImages}>
                  <img
                    className={Style.propertyImage}
                    src={property?.image?.Image1}
                  ></img>
                  {property?.H_property == true ? (
                    <img src={HotProperty} className={Style.hotProperty}></img>
                  ) : (
                    <img src={SoldOut} className={Style.soldOut}></img>
                  )}
                </div>

                <div className={Style.propertyDetails}>
                  <h6>{property?.name}</h6>

                  {!isMobile ? (
                    <div className={Style.detailsContainer}>
                      <div className={Style.leftContainer}>
                        <div>
                          <div>Frac Price : ₹ {property?.FC_Price}</div>
                          <div>
                            {property?.Type} | {property?.area}
                          </div>
                        </div>
                      </div>

                      <div className={Style.rightContainer}>
                        <div>{property?.Location}</div>

                        <div className={Style.btnContainer}>
                          <button
                            onClick={() =>
                              navigate(`/eachproperty/${property?._id}`)
                            }
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <div>Frac Price : {property?.FC_Price}</div>
                      </div>
                      <div>{property?.Location}</div>
                      <div>
                        {property?.Type} | {property?.area}
                      </div>
                      <div className={Style.btnContainer}>
                        <button
                          onClick={() =>
                            navigate(`/eachProperty/${property?._id}`)
                          }
                        >
                          View Details
                        </button>
                      </div>{" "}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {selectedLoction === "goa" && (
          <div className={Style.properties}>
            {goaProperties?.map((property, index) => (
              <article
                key={index}
                className={Style.eachProperty}
                onClick={() => navigate(`/eachProperty/${property?._id}`)}
              >
                <div className={Style.propertyImages}>
                  <img
                    className={Style.propertyImage}
                    src={property?.image?.Image1}
                  ></img>
                  {property?.H_property == true ? (
                    <img src={HotProperty} className={Style.hotProperty}></img>
                  ) : (
                    <img src={SoldOut} className={Style.soldOut}></img>
                  )}
                </div>

                <div className={Style.propertyDetails}>
                  <h6>{property?.name}</h6>

                  {!isMobile ? (
                    <div className={Style.detailsContainer}>
                      <div className={Style.leftContainer}>
                        <div>
                          <div>Frac Price : ₹ {property?.FC_Price}</div>
                          <div>
                            {property?.Type} | {property?.area}
                          </div>
                        </div>
                      </div>

                      <div className={Style.rightContainer}>
                        <div>
                          {property?.name ==
                          "STREAM BY INDULGE POWERED BY FRACSPACE"
                            ? "Revora, Goa"
                            : property?.Location}
                        </div>

                        <div className={Style.btnContainer}>
                          <button
                            onClick={() =>
                              navigate(`/eachproperty/${property?._id}`)
                            }
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <div>Frac Price : {property?.FC_Price}</div>
                      </div>
                      <div>
                        {property?.name ==
                        "STREAM BY INDULGE POWERED BY FRACSPACE"
                          ? "Revora, Goa"
                          : property?.Location}
                      </div>
                      <div>
                        {property?.Type} | {property?.area}
                      </div>
                      <div className={Style.btnContainer}>
                        <button
                          onClick={() =>
                            navigate(`/eachProperty/${property?._id}`)
                          }
                        >
                          View Details
                        </button>
                      </div>{" "}
                    </div>
                  )}
                  {/* <div>
                    <div>Frac Price : {property?.FC_Price}</div>
                  </div>
                  <div>{property?.Location}</div>
                  <div>
                    {property?.Type} | {property?.area}
                  </div>
                  <div className={Style.btnContainer}>
                    <button
                      onClick={() => navigate(`/eachproperty/${property?._id}`)}
                    >
                      View Details
                    </button>
                  </div> */}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default OurPortfolio;
