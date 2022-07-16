import React,{useState} from 'react'
import Button from "../Button";
import Img4 from "../../assets/images/food1.jpg";
import Img3 from "../../assets/images/airplane1.jpg";
import Img2 from "../../assets/images/communication.jpg";
import Form from '../AmbulanceBook/index'
import Cookies from "universal-cookie";
import BackArrow from "../Button/Arabic";

const Index = () => {
  const cookies = new Cookies();
const [getlanguage, setLanguage] = useState(cookies.get("language"));
  return (
    <>
    <div className='destination-main'>
    <div className="custom-container">
            {
              getlanguage != 'english'? <>
              <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center">
              <div className="image-section d-none d-md-flex col-0 col-md-6 col-xxl-5">
                <div className="row g-0 flex-column justify-content-center align-items-center align-content-center cardimg">
                  <img src={Img2} />
                </div>
              </div>
              <div className="col-12 col-md-6 col-xxl-5 z-index cardtext1">
                <div className="row g-0">
                  <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 ">
                  <h3 className='servicespage1'>Communication Service</h3>
                    <br />
                    <p>
                    In This Modern World, Communication Is The Key For Every Thing{" "}
                    </p>
                    <p>
                    Throughout Your Sacred Journey, We Make Sure That You Will Not Be Disconnected From Your Beloved Ones Back In Your Country{" "}
                    </p>
                    
                    <p>
                    To Facilitate Yourself From This Service Manasik Aviation Will Provide You On Board SIM Services So yYou Can Activate It Cnce You Reached Saudi Arabia.
                    </p>
                    <br />
                    <Button text={"Book Now"} />
                  </div>
                </div>
              </div>
            </div>
              </>:<>
              <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center cardarabic">
              <div className="image-section d-none d-md-flex col-0 col-md-6 col-xxl-5">
                <div className="row g-0 flex-column justify-content-center align-items-center align-content-center">
                  <img src={Img2} />
                </div>
              </div>
              <div className="col-12 col-md-6 col-xxl-5 z-index cardtext1">
                <div className="row g-0">
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
            </div>
              </>
            }
          </div>
        </div>
    </>
  )
}

export default Index