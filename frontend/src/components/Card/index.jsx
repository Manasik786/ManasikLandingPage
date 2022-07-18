import React,{useState} from "react";
import Buttn1 from "../Button";
import Img4 from "../../assets/images/transport.jpg";
import Img3 from "../../assets/images/airplane1.jpg";
import Img2 from "../../assets/images/airplane2.jpg";
import Form from "../AmbulanceBook/index";
import Cookies from "universal-cookie";
import BackArrow from "../Button/Arabic";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Popup from '../Form/Popup'

const Index = () => {
  const cookies = new Cookies();
  const [getlanguage, setLanguage] = useState(cookies.get("language"));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Popup/>
      </Modal>
      <div className="destination-main">
        <div className="custom-container  ">
          {getlanguage != "english" ? (
            <>
              <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center ">
                <div className="col-12 col-md-6 col-xxl-5">
                  <div className="row g-0 ">
                    <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 z-index cardtext1">
                    <h3 className='servicespage1'>Transport Service</h3>
                      <br />
                      <p>
                      We at Manasik aviation provide transport services for our guests with traveling inside the city or out of it.
                      </p>
                      <br />
                     
                      <p>
                      We provide services for individual as well as for the groups, we have all type of rides from cars to buses.{" "}
                      </p>
                      <br />
                      <Button variant="primary" className='primarybutton' onClick={handleShow}>
                  <Buttn1 text={"BOOK NOW"}/>
                </Button>
                    </div>
                  </div>
                </div>
                <div className="image-section d-none d-md-flex col-0 col-md-6 col-xxl-5">
                  <div className="row g-0  flex-column justify-content-center align-items-center align-content-center cardimage11">
                    <img src={Img4} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center cardarabic">
                <div className="col-12 col-md-6 col-xxl-5">
                  <div className="row g-0 ">
                    <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 z-index cardtext1">
                      <br />
                      <p className="arabic-align">
                      لدينا خطة وجبات مصممة خصيصا
                        نظام لخطة الطريق المحددة ، مع الحلال الكامل
                        الطعام متاح ، لدينا أفضل خدمة تموين
                        للضيف.
                      </p>
                      <br />
                      <p className="arabic-align">
                      مع الأخذ في الاعتبار الثقافة الجغرافية لدينا
                        الوجهة ، خصصنا الوجبة مع التأكيد على
                        الأطعمة الثقافية مقدمًا ، مما يجعل الضيف أكثر رضا
                        خلال رحلتهم{" "}
                      </p>
                      <br />
                      <p className="arabic-align">
                      مناسيك للطيران هي شريك رائد في المملكة العربية السعودية
                        شركة تموين ، الهدف هو تقديم الأفضل
                        الخدمة الممكنة للضيف مع مراعاة
                        الثقافة السعودية والضيافة{" "}
                      </p>
                      <br />
                      <BackArrow text={"احجز الآن"}   className="backarrowbutton"/>
                    </div>
                  </div>
                </div>
                <div className="image-section d-none d-md-flex col-0 col-md-6 col-xxl-5">
                  <div className="row g-0  flex-column justify-content-center align-items-center align-content-center cardimage11">
                    <img src={Img4} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
