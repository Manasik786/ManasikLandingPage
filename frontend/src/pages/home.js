import React, { useEffect,useState } from "react";
import Buttn1 from "../components/Button";
import HajjImage from "../assets/images/hajj.png";
import HolidayImage from "../assets/images/holiday.png";
import HotelImage from "../assets/images/hotel.png";
import HotelServiceImage from "../assets/images/hotelservice.png";
import GalleryImage from "../assets/images/gallery.png";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
import Banner from "../components/Banner";
import Search from "../components/Search";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "../components/Footer/index1";
import Cookies from "universal-cookie";
import BackArrow from '../components/Button/Arabic'
import Slider from '../components/Slider/Slider'
import Modal from 'react-bootstrap/Modal';
import Popup from '../components/Form/Popup'
// import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Services from '../components/ServicesHome/Services'
import '../search.css'
import axios from 'axios'
import AboutManasik from '../components/Card/About'


const Home = ({ onHandleClick }) => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState("1");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [card, setCard] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/GalleryItems`);
      setCard(data.data);
      console.log("New Data",card)
    };
    getdata();
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    centerMargin: "20px",
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        },
      },
    ],
  };

  return (
    <>
    
      <div className="header-banner">
        <Banner />
        <Search />
      </div>
      <Modal show={show} onHide={handleClose} className='modalclass'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Popup/>
      </Modal>
      {/* {`${selectedBanner !== 'home' ? "header-banner vh-50" : "header-banner"} `} */}
      <div className="home-main">
      <Services/>

        <section className="aircraft-section">
          <div className="custom-container">
            <div className="row g-0 justify-content-center justify-content-xxl-between align-items-center">
              <div className="image-section d-md-flex col-0 col-md-6 col-xxl-5">
                <div className="row g-0 flex-column justify-content-center align-items-center align-content-center"></div>
              </div>
              <>
              {
                getlanguage != 'english'? <>
                <div className="col-12 col-md-6 col-xxl-5 about">
                <div className="row g-0">
                  <AboutManasik/>
                </div>
              </div>
                </>:<>
                <div className="col-12 col-md-6 col-xxl-5 about arabicstyle">
                <div className="row g-0">
                  <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11">
                    <h2 className="arabic-align">حول مناسيك</h2>
                    <br />
                    <p className="arabic-align">
                    مناسيك للطيران هي شركة طيران سعودية مقرها
                      المقر الرئيسي في مدينة جدة.{" "}
                    </p>
                    <br />
                    <p className="arabic-align">
                    جاء طيران مناسيك إلى الوجود من منظور
                      القيم الدينية والثقافية ، حيث نعطي الأولوية و
                      التأكيد على القيم الإسلامية.{" "}
                    </p>
                    <br />
                    <p className="arabic-align">
                    طيران المناسك هو انعكاس للثقافة السعودية
                      والضيافة ، حيث نعرض الصورة الحقيقية لنا
                      الثقافة والقيم ، هذا يجعل رحلتك أكثر
                      ممتع.{" "}
                    </p>
                  </div>
                </div>
              </div>
                </>
              }
              </>
            </div>
          </div>
        </section>
        <section className="package-section">
          <div className="custom-container">
            {
              getlanguage != 'english' ? <>
              <div className="row g-0 justify-content-center justify-content-xxl-between align-items-center">
              {}
              <div className="col-12 col-md-12 col-xxl-12 about">
                <h2>Packages</h2>
                <br />
                <div>
                <Slider/>
                </div>
              </div>
            </div>
              </> : <>
              <div className="row g-0 justify-content-center justify-content-xxl-between align-items-center">
              {}
              <div className="col-12 col-md-12 col-xxl-12 about">
                <h2>الحزم</h2>
                <br />
                <div>
                  <div class="row1">
                    <div class="column1">
                      <div class="card1">
                        <img src={HajjImage} className='card-images'/>
                        <h3>الحج والعمرة</h3>
                        <p>
                        الآن يمكنك حجز فندقك معنا
                          من خلال موقعنا الإلكتروني مع نظام حجز سهل. الآن أنت
                          يمكنك حجز فندقك مع طيران مناسيك من خلال.
                        </p>
                        <div className="newpack">
                          <BackArrow text={"اشتري الآن"}  className="backarrowbutton"/>
                        </div>
                      </div>
                    </div>

                    <div class="column1">
                      <div class="card1">
                        <img src={HotelImage} />
                        <h3>خدمات فندقية</h3>
                        <p>
                        الآن يمكنك حجز فندقك معنا
                          من خلال موقعنا الإلكتروني مع نظام حجز سهل. الآن أنت
                          يمكنك حجز فندقك مع طيران مناسيك من خلال.
                        </p>
                        <div className="newpack">
                        <BackArrow text={"اشتري الآن"}  className="backarrowbutton"/>
                        </div>
                      </div>
                    </div>

                    <div class="column1">
                      <div class="card1">
                        <img src={HolidayImage} />
                        <h3>حزم العطلة</h3>
                        <p>
                        الآن يمكنك حجز فندقك معنا
                          من خلال موقعنا الإلكتروني مع نظام حجز سهل. الآن أنت
                          يمكنك حجز فندقك مع طيران مناسيك من خلال.
                        </p>
                        <div className="newpack">
                        <BackArrow text={"اشتري الآن"}  className="backarrowbutton"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </>
            }
          </div>
        </section>

        <section className="hotel-services1">
          <div className="custom-container">
            {
              getlanguage != 'english' ? <>
              <div className="gallerydiv">
              <div className="gallery-left1">
                <span className="gallery-text">
                <h3>Our Gallery</h3>
                <h6>Saudi Arab is opening is door to world through its new tourist visa All international visitors from eligible countries can apply for tourist visa.</h6>
                <h6> To guide you with legal procedure, Manasik aviation online portal will assist you to get your process done ,for apply please fill the forum below</h6>
                </span>
                 <div class="row2">
                 {card.map((item) => {
                  return (
                    <>
                      <div className="column2">
                        <div className="card2">
                          <img src={item.images[0].url} onClick={() => setToggle(item._id)}/>
                        </div>
                      </div>
                    </>
                  );
                })}
                  
                </div>
              </div>
              <div className="gallery-right1">
              {
        card.map((item) => {
          return(
            <>
            {toggle === item._id ? (
                   <img src={item.images[0].url} key={item._id}/>
                ) : <div className="zero"></div>}
            </>
          )
        })
      }
             
              </div>
            </div>
            <div className="row g-3 justify-content-center align-items-center">
              <div className="col-12 col-md-6 col-xxl-5"></div>
              <div className="d-flex col-0 col-md-6 col-xxl-6">
                <div className="row g-0 flex-column justify-content-center align-items-center align-content-center">
                 <div className="ctmbtn" onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}>
                 <Link to='/gallery'>
                 <Buttn1 className={"mt-4"} text="View ALL" />
                 </Link>
                 </div>
                </div>
              </div>
            </div>
              </>:<>
              <div className="gallerydiv">
              <div className="gallery-left1">
                <span className="gallery-text">
                <h3>معرضنا</h3>
                <h6> المملكة العربية السعودية تفتح باباً على العالم من خلال تأشيرتها السياحية الجديدة ويمكن لجميع الزوار الدوليين من الدول المؤهلة التقدم للحصول على تأشيرة سياحية.</h6>
                <h6> لإرشادك في الإجراءات القانونية ، ستساعدك بوابة الطيران عبر الإنترنت على إنجاز العملية الخاصة بك ، للتقديم ، يرجى ملء المنتدى أدناه</h6>
               
                </span>
                 <div class="row2">
                  <div class="column2">
                    <div class="card2">
                      <img src={GalleryImage}/>
                    </div>
                  </div>

                  <div class="column2">
                    <div class="card2">
                    <img src={GalleryImage}/>
                    </div>
                  </div>
                  <div class="column2">
                    <div class="card2">
                    <img src={GalleryImage}/>
                    </div>
                  </div>
                  <div class="column2">
                    <div class="card2">
                    <img src={GalleryImage}/>
                    </div>
                  </div>
                  
                  <div class="column2">
                    <div class="card2">
                    <img src={GalleryImage}/>
                    </div>
                  </div>
                  <div class="column2">
                    <div class="card2">
                    <img src={GalleryImage}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-right1">
              <img src={GalleryImage}/>
              </div>
            </div>
            <div className="row g-3 justify-content-center align-items-center">
              <div className="col-12 col-md-6 col-xxl-5"></div>
              <div className="d-flex col-0 col-md-6 col-xxl-6">
                <div className="row g-0 flex-column justify-content-center align-items-center align-content-center">
                 <div className="ctmbtn">
                 <BackArrow className={"mt-4"} text="مشاهدة الكل" />
                 </div>
                </div>
              </div>
            </div>
              </>
            }
          </div>
        </section>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Home;
