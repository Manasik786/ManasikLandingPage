import React, { useState, useEffect } from "react";
import Button from "../Button";
import Form from "../AmbulanceBook/index";
import Cookies from "universal-cookie";
import axios from "axios";

const Index = () => {
  const cookies = new Cookies();
  const [getlanguage, setLanguage] = useState(cookies.get("language"));

  const [card, setCard] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/CardItems`);
      setCard(data.data);
      console.log("New Data", card);
    };
    getdata();
  }, []);

  return (
    <>
      {getlanguage != "english" ? (
        <>
          {card.map((item) => {
            return item.CardType === "About" ? (
              <>
                <div
                  className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 "
                  key={item._id}
                >
                  <h2>{item.CardTitle}</h2>
                  <p >{item.CardDescriptions}</p>
                </div>
              </>
            ) : (
              <></>
            );
          })}
        </>
      ) : (
        <>
          {card.map((item) => {
            return item.CardType === "About" ? (
              <>
                <div
                  className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 "
                  key={item._id}
                >
                  <h2 className="arabic-align">{item.CardTitlear}</h2>
                  <h6 className="arabic-align">{item.CardDescriptionsar}</h6>
                </div>
              </>
            ) : (
              <></>
            );
          })}
        </>
      )}
    </>
  );
};

export default Index;
