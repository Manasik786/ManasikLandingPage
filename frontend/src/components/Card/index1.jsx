import React, { useState,useEffect } from "react";
import Buttn1 from "../Button";
import Form from "../AmbulanceBook/index";
import Cookies from "universal-cookie";
import BackArrow from "../Button/Arabic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from "../Form/Popup";
import axios from 'axios';


const Index = () => {
  const cookies = new Cookies();
  const [getlanguage, setLanguage] = useState(cookies.get("language"));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/CardItems`);
      setData(data.data);
      
      // console.log("Response",data.data)
      // console.log("Data is",data.data)
    };
    getdata();
  }, []);

  // let pattern = /Services/i;


  return (
    <>
      
      <div className="destination-main">
        <div className="custom-container">
          {getlanguage != "english" ? (
            <>
              {
                data.map((item,i) => {
                  return(
                    (item.CardType) === 'service' ? <>
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <h2 className="h2.applyfromclass"> {item.CardTitle}</h2>
                    </Modal.Header>
                    
                    <Popup />
                  </Modal>
                <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center mappingstyle" key={item._id}>
                  <div className="image-section d-md-flex col-0 col-md-6 col-xxl-5">
                    <div className="row g-0 flex-column justify-content-center align-items-center align-content-center cardimg">
                      <img src={item.images[0].url} />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xxl-5 z-index cardtext1">
                    <div className="row g-0">
                      <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 ">
                        <h3 className="servicespage1">{item.CardTitle}</h3>
                        <br />
                        <p>
                        {item.CardDescriptions}
                        </p>

                        <br />
                        <Button
                          variant="primary"
                          className="primarybutton "
                          onClick={handleShow}
                        >
                          <Buttn1 text={"BOOK NOW"} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                    </> : <></>
                  )
                })
              }
            </>
          ) : (
            <>
             {
                data.map((item,i) => {
                  return(
                    (item.CardType) === 'service' ? <>
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header className='arabic-icon' closeButton>
                <span className='arabic-icon1'><h2 className='applyfromclass'>
                {item.CardTitlear}
                  </h2></span>
             </Modal.Header>
                    
                    <Popup />
                  </Modal>
                <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center mappingstyle" key={item._id}>
                  <div className="image-section d-md-flex col-0 col-md-6 col-xxl-5">
                    <div className="row g-0 flex-column justify-content-center align-items-center align-content-center cardimg">
                      <img src={item.images[0].url} />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xxl-5 z-index cardtext1">
                    <div className="row g-0">
                      <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 ">
                      <h3 className="servicespage1 arabic-align">{item.CardTitlear}</h3>
                        <br />
                        <p className="arabic-align">
                        {item.CardDescriptionsar}
                        </p>

                        <br />
                        <Button
                          variant="primary"
                          className="primarybutton "
                          onClick={handleShow}
                        >
                           <BackArrow
                        text={"احجز الآن"}
                        className="backarrowbutton"
                      />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                    </> : <></>
                  )
                })
              }
              
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
