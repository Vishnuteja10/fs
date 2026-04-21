import React, { useState, useEffect } from "react";

import Style from "./EachProperty.module.css";

import Navbar2 from "../../components/Navbar2/Navbar2";

import image1 from "../../assets/images/backgroundImage1.png";
import image2 from "../../assets/images/backgroundImage2.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import AppIconsComponent from "../../components/AppIconsComponent/AppIconsComponent";

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
// import { useMediaQuery } from "react-responsive";

function EachProperty() {
  // const isTablet = useMediaQuery('(min-width:600px) and (max-width:1024px)');

  const { id } = useParams();

  const [formVisible, setFormVisible] = useState(false);

  const [propertyDetails, setPropertyDetails] = useState();

  const PROPERTY_API = `https://apitest.fracspace.com/api/users/getPropertyById/${id}`;

  const ENQUIRY_API =
    "https://apitest.fracspace.com/api/v1/webApi/enquiryFormRegardingCoownership";

  const initialState = {
    name: "",
    email: "",
    contact: "",
    countryCode: "",
    phoneNumber: "",
    budget: "",
    agreeToContact: false
  };

  const [formData, setFormData] = useState(initialState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitContactDetails = async () => {
    try {
      const response = await axios.post(ENQUIRY_API, formData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "Fracspace@2024"
        }
      });
      // console.log("response is",response);
    } catch (error) {
      // console.log("error is", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    if (!formData.contact) {
      alert("Contact is required");
      return;
    }

    submitContactDetails();
    setFormSubmitted(true);
    setFormData(initialState);
    // You can handle the form submission here, e.g., sending data to the server.
  };

  const handlePhoneChange = (value, country) => {
    const countryCode = country.dialCode;
    const phone = value.slice(country.dialCode.length);
    // console.log("phone num is", phone);

    setFormData({
      ...formData,
      contact: "+" + value,
      countryCode: "+" + countryCode,
      phoneNumber: phone
    });
  };

  let propDetails;

  const headers = {
    "x-api-key": "Fracspace@2024"
  };

  useEffect(() => {
    // console.log("property api is", PROPERTY_API, id);
    axios.get(PROPERTY_API, { headers }).then(
      (response) => {
        
        propDetails = response?.data?.property;
        setPropertyDetails(response?.data?.property);
       
      },
      (error) => {
        
      }
    );
  }, []);

  useEffect(() => {
    // const handleScroll = () => {
    //   const propertyDetailsSection = document.querySelector(
    //     `.${Style.propertyDetails}`
    //   ).offsetTop;
    //   const scrollTop = window.scrollY;
    //   const navbarHeight = document.querySelector(
    //     `.${Style.navbar}`
    //   ).offsetHeight;

    //   // If scrolled past the property details section, show the form
    //   if (scrollTop + navbarHeight >= propertyDetailsSection) {
    //     setFormVisible(true);
    //   } else {
    //     setFormVisible(false);
    //   }
    // };

    const handleScroll = () => {
      const propertyDetailsSection = document.querySelector(
        `.${Style.propertyDetails}`
      ).offsetTop;
      const footerSection = document.querySelector(
        `.${Style.footerContainer}`
      ).offsetTop;
      const scrollTop = window.scrollY;
      const navbarHeight = document.querySelector(
        `.${Style.navbar}`
      ).offsetHeight;

      // If scrolled past the property details section but not reaching the footer, show the form
      if (
        scrollTop + navbarHeight >= propertyDetailsSection &&
        scrollTop + window.innerHeight < footerSection
      ) {
        setFormVisible(true);
      } else {
        setFormVisible(false); // Hide form near footer or above property section
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // UseEffect to hide the thank-you message after 3 seconds
  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false); // Reset the formSubmitted state after 3 seconds
      }, 5000);

      // Cleanup function to clear the timeout if the component unmounts before 3 seconds
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <ScrollToTop>
      <div className={Style.main}>
        <div className={Style.navbar}>
          <Navbar2 />
        </div>

        <AppIconsComponent />

        <div className={Style.main2}>
          <div className={Style.header}>
            <h2>{propertyDetails?.name}</h2>
          </div>

          <div className={Style.imageCarouselContainer}>
            <Carousel
              width="88vw"
              swipeable={true}
              autoPlay={true}
              infiniteLoop={true}
              dynamicHeight={true}
              interval={3000}
              showArrows={true}
              stopOnHover={false}
            >
              {propertyDetails?.image &&
                Object.values(propertyDetails.image).map((img, index) => (
                  <div key={index}>
                    <img
                      className={Style.propertyImage}
                      src={img}
                      alt={`Property Image ${index + 1}`}
                    />
                  </div>
                ))}
            </Carousel>
          </div>

          <div className={Style.propertyDetailsContainer}>
            <section className={Style.propertyDetails}>
              <div>
                <h3>About this property</h3>
                <p>{propertyDetails?.Description}</p>
              </div>

              <div className={Style.attributesContainer}>
                <div className={Style.container}>
                  <div className={Style.atrributes}>
                    <span className={Style.attribute}>Attributes</span>{" "}
                    <span className={Style.value}>
                      {propertyDetails?.Type} | {propertyDetails?.area}{" "}
                    </span>
                  </div>
                  <div className={Style.atrributes}>
                    <span className={Style.attribute}>Location</span>{" "}
                    <span className={Style.value}>
                      {propertyDetails?.Location}
                    </span>
                  </div>
                  <div className={Style.atrributes}>
                    <span className={Style.attribute}>Total Fracs</span>{" "}
                    <span className={Style.value}>
                      {propertyDetails?.TotalFractions}
                    </span>
                  </div>
                  <div className={Style.atrributes}>
                    <span className={Style.attribute}>Available Fracs</span>{" "}
                    <span className={Style.value}>
                      {propertyDetails?.AvailableFractions}
                    </span>
                  </div>
                  <div className={Style.atrributes}>
                    <span className={Style.attribute}>Frac Price</span>{" "}
                    <span className={Style.value}>
                      ₹ {propertyDetails?.FC_Price}
                    </span>
                  </div>
                </div>
              </div>

              <div className={Style.amenitiesContainer}>
                <h3 className={Style.distinctiveAmentiesText}>Distinctive Amenities</h3>
                <div className={Style.distinctiveAmenities}>
                  <ul>
                    {propertyDetails?.DistinctiveAmenities?.map(
                      (amenity, index) => (
                        <li key={index} className={Style.eachAmenity}>
                          <div className={Style.amenityImageContainer}>
                            <img src={amenity?.image}></img>
                          </div>
                          <div className={Style.amenityName}>
                            {" "}
                            {amenity?.name}
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {propertyDetails?.locationHighlights?.length > 0 && (
                <div className={Style.locationHighlights}>
                  <h2>Location Highlights</h2>
                  <div className={Style.locationsContainer}>
                    {propertyDetails?.locationHighlights?.map(
                      (location, index) => (
                        <div key={index} className={Style.locationItem}>
                          <div className={Style.locationImageContainer}>
                            <img src={location?.image}></img>
                          </div>
                          <div className={Style.content}>{location?.name}</div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </section>

            <section
              className={`${Style.enquiryFormContainer} ${
                formVisible ? Style.visible : ""
              }`}
            >
              <article>
                <div>
                  <form onSubmit={handleSubmit} className={Style.enquiryForm}>
                    <h2>Enquiry Form</h2>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={Style.formInput}
                    />

                    <PhoneInput
                      country={"in"}
                      value={formData.contact}
                      onChange={handlePhoneChange}
                      inputStyle={{
                        width: "100%",
                        height: "6vh",
                        fontSize: "1rem"
                      }}
                      // inputStyle={Style.phoneInput}
                      required
                      className={Style.formControl}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email ID"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={Style.formInput}
                    />

                    {/* New Budget Dropdown */}
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className={Style.formInput}
                    >
                      <option value="">Select Your Budget</option>
                      <option value="below 10,00,000">Below 10,00,000</option>
                      <option value="10,00,000 - 20,00,000">
                        10,00,000 - 20,00,000
                      </option>
                      <option value="above 20,00,000">Above 20,00,000</option>
                    </select>

                    <div className={Style.checkboxContainer}>
                      <input
                        className={Style.checkBox}
                        type="checkbox"
                        name="agreeToContact"
                        checked={formData.agreeToContact}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            agreeToContact: e.target.checked
                          })
                        }
                        required
                      />
                      <label className={Style.checkboxLabel}>
                        By submitting your contact details, you authorize
                        Fracspace and its representatives to contact you.
                      </label>
                    </div>
                    <button type="submit">Submit</button>

                    {formSubmitted && (
                      <div className={Style.thankYouMessage}>
                        <p>
                          We have received your enquiry and will get back to you
                          shortly!
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </article>
            </section>
          </div>
        </div>

        <div className={Style.footerContainer}>
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
}

export default EachProperty;
