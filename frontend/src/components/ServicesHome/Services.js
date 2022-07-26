import React, { useEffect,useState } from "react";
import Buttn1 from "../Button/index";
import Buttn2 from "../Button/Arabic";
import HotelServiceImage from "../../assets/images/hotelservice.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BackArrow from '../Button/Arabic'
// import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Modal from "react-bootstrap/Modal";
import Popup from "../Form/Popup";
import axios from 'axios';

const Services = (props) => {
    const cookies = new Cookies();
    const [getlanguage,setLanguage] = useState(cookies.get("language"));
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/CardItems`);
      setData(data.data);
      
    };
    getdata();
  }, []);
  const Service = async id => {

    const { data } = await axios.get('/api/v1/CardItems');
    console.log(data.data[0]._id)
    for (let i = 0; i < data.data.length; i++) {
      console.log(data.data[i])
      if (id == data.data[i]._id) {
        console.log(data.data[i])
        await window.localStorage.setItem("D", JSON.stringify(data.data[i]))
      }

    }
  }


  return (
    <>
    
    <section className="hotel-services">
    <div className="destination-main">
        
          <div className="custom-container" >
           {
            getlanguage != 'english'? <>
            <>
            {
              //  data.slice(0,8).map((item,i) => {
                data.slice(0,4).map((item,i) => {
                    return(
                      
                      (item.CardType) === 'service' ? <>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <h2 className='applyfromclass '>Services</h2>
                        </Modal.Header>
                        <Popup />
                      </Modal>
                      <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center mappingstylehome" key={item._id}>
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
                              className="primarybutton"
                              onClick={handleShow}
                            >
                              <Buttn1 text={"BOOK NOW"} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                      </>: <></>
                      
                      
                    )
                })
            }
            </>
            </>:
            <>
            {
              //  data.slice(0,8).map((item,i) => {
                data.slice(0,4).map((item,i) => {
                    return(
                      
                      (item.CardType) === 'service' ? <>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <h2 className='applyfromclass '>خدمات</h2>
                        </Modal.Header>
                        <Popup />
                      </Modal>
                      <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center mappingstylehome " key={item._id}>
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
                              className="primarybutton"
                              onClick={handleShow}
                            >
                              <Buttn2 text={"احجز الآن"} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                      </>: <></>
                      
                      
                    )
                })
            }
            </>
            
           }
          </div>
          </div>
        </section>
    </>
  )
}

export default Services