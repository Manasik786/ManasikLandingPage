import React,{useState} from 'react'
import Button from "../Button";
import Img4 from "../../assets/images/food1.jpg";
import Img3 from "../../assets/images/airplane1.jpg";
import Img2 from "../../assets/images/luggage.jpg";
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
                  <h3 className='servicespage1'>Luggage Service</h3>
                    <br />
                    <p>
                    We at Manasik Aviation have specially focused plan for luggage handling service. Our aim is to save guest precious  time.{" "}
                    </p>
                    <p>Our representative will be at arrival terminal to help the guest  to get their luggage as soon as possible</p>
                    <p>We at  Manasik Aviation have VIP luggage handling system where we provide VIP services for the guest  to get their  luggage without waiting on the belt , our representative will do all the required Action to clear out your luggage.</p>
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