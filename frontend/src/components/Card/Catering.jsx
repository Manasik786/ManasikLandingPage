import React,{useState} from "react";
import Buttn1 from "../Button";
import Img4 from "../../assets/images/catering.png";
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
                    <h3 class="servicespage1">Cattering Service</h3>
                      <br />
                      <p>
                        We at Manasik Aviation have specially designed meal plan
                        system for the specific route plan , with full Halal
                        food available on , we have the best catering service
                        for the guest .
                      </p>
                      <br />
                     
                      <p>
                        Manasik Aviation is a partner of Saudi Arabian leading
                        catering company, the aim is to provide the best
                        possible service to the guest with keeping in mind the
                        Saudi Culture and hospitality{" "}
                      </p>
                      <br />
                      <Button variant="primary" className='primarybutton' onClick={handleShow}>
                  <Buttn1 text={"BUY NOW"}/>
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
