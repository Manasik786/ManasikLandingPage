import React, { useEffect,useState } from "react";
import Buttn1 from "../Button";
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

const Services = () => {
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

console.log("The Main",data)

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Popup />
      </Modal>
    <section className="hotel-services">
    <div className="destination-main">
        
          <div className="custom-container" >
           {
            getlanguage != 'english'? <>
            <>
            {
                data.slice(0,3).map((item,i) => {
                    return(
                      <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center mappingstylehome" key={item._id}>
                      <div className="image-section d-md-flex col-0 col-md-6 col-xxl-5">
                        <div className="row g-0 flex-column justify-content-center align-items-center align-content-center cardimg">
                          <img src={item.images[0].url} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xxl-5 z-index cardtext1">
                        <div className="row g-0">
                          <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 ">
                            <h3 className="servicespage1">{item.CardDetail}</h3>
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
                              <Buttn1 text={"BUY NOW"} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                })
            }
            </>
            </>:<>
            <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center arabicstyle">
              <div className="image-section d-md-flex col-0 col-md-6 col-xxl-5">
                <div className="row g-0 flex-column justify-content-center align-items-center align-content-center">
                  <img src={HotelServiceImage} />
                </div>
              </div>
              <div className="col-12 col-md-6 col-xxl-5 z-index">
                <div className="row g-0">
                  <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 ">
                    <h2 className="arabic-align">خدمات فندقية</h2>
                    <br />
                    <p className="arabic-align">
                    الآن يمكنك حجز فندقك مع طيران مناسيك من خلال
                      موقعنا الإلكتروني مع نظام حجز سهل
                    </p>
                    <br />
                    <p className="arabic-align">
                    الآن يمكنك حجز فندقك مع طيران مناسيك من خلال
                      موقعنا الإلكتروني مع نظام حجز سهل
                    </p>
                    <br />
                    <p className="arabic-align">
                    الآن يمكنك حجز فندقك مع طيران مناسيك من خلال
                      موقعنا الإلكتروني مع نظام حجز سهل
                    </p>
                    <br />
                    <p className="arabic-align">يوفر فندقنا جميع الخدمات الأساسية بما في ذلك</p>
                    <br />
                    <div className="services-list">
                      <div className="services-list-main arabic-align">
                        <i class="fa fa-check"></i> <p>24/7 المساعدة</p>
                      </div>
                      <div className="services-list-main arabic-align">
                        <i class="fa fa-check"></i> <p>مطعم</p>
                      </div>
                      <div className="services-list-main arabic-align">
                        <i class="fa fa-check"></i> <p>مغسلة</p>
                      </div>
                      <div className="services-list-main arabic-align">
                        <i class="fa fa-check"></i> <p>خدمات الكابينة</p>
                      </div>
                      <div className="services-list-main arabic-align">
                        <i class="fa fa-check"></i> <p>خدمات تأجير السيارات</p>
                      </div>
                    </div>
                    <br />
                    <Button variant="primary" className='primarybutton' onClick={handleShow}>
                    <BackArrow text={"اشتري الآن"} className="backarrowbutton" />
                    </Button>
                    
                  </div>
                </div>
              </div>
            </div>
            </>
           }
          </div>
          </div>
        </section>
    </>
  )
}

export default Services