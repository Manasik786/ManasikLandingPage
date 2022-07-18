import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import DestinationCard1 from "../components/Card/index1";
import Cookies from "universal-cookie";


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
