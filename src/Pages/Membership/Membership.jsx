import React from "react";
import Style from "./Membership.module.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import DetailsExplaination from "../../components/MembershipComponents/DetailsExplaination/DetailsExplaination";
import HeroSection from "../../components/MembershipComponents/HeroSection/HeroSection";
import MemInfo from "../../components/MembershipComponents/MemInfo/MemInfo";
import MemComparison from "../../components/MembershipComponents/MembershipComparison/MemComparison";
import ChoosePlan from "../../components/MembershipComponents/ChoosePlan/ChoosePlan";
import Properties from "../../components/MembershipComponents/Properties/Properties";

function Membership() {
  return (
    <ScrollToTop>
      <div>
        <div className={Style.navBar}>
          <Navbar2 />
        </div>

        <div>
          <HeroSection />
        </div>

        <div>
          <MemInfo />
        </div>

        <div>
          <MemComparison />
        </div>

        <div>
          <ChoosePlan />
        </div>

        <div>
          <DetailsExplaination />
        </div>

        <div>
          <Properties />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
}

export default Membership;
