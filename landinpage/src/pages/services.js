import React, { useState } from "react";
import DestinationCard from "../components/Card/index";
import Banner from "../components/Banner/Banner";
import DestinationCard1 from "../components/Card/index1";
import Img4 from "../assets/images/sofa.jpg";
import Cookies from "universal-cookie";
import Luggage from '../components/Card/Luggage'
import Catering from '../components/Card/Catering';
import Communication from '../components/Card/Communication';
import Tourism from '../components/Card/Tourism'
import Service from "../components/ServicesHome/Services";


const Services = () => {
  const cookies = new Cookies();
  const [getlanguage, setLanguage] = useState(cookies.get("language"));

  return (
    <>
      <div className="ambulance">
        <Banner />
        <DestinationCard1/>
        <div className="gap"></div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Services;
