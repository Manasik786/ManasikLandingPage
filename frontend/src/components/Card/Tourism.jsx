import React,{useState} from "react";
import Button from "../Button";
import Img4 from "../../assets/images/tourism.jpg";
import Img3 from "../../assets/images/airplane1.jpg";
import Img2 from "../../assets/images/airplane2.jpg";
import Form from "../AmbulanceBook/index";
import Cookies from "universal-cookie";
import BackArrow from "../Button/Arabic";


const Index = () => {
  const cookies = new Cookies();
  const [getlanguage, setLanguage] = useState(cookies.get("language"));
  return (
    <>
      <div className="destination-main">
        <div className="custom-container  ">
          {getlanguage != "english" ? (
            <>
              <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center ">
                <div className="col-12 col-md-6 col-xxl-5">
                  <div className="row g-0 ">
                    <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 z-index cardtext1">
                    <h3 className='servicespage1'>Local tourism </h3>
                      <br />
                      <p>
                      From Mountains of Abha To the Oldest City of Madain Al Salih From Beaches Of Red Sea To The World Largest Sand Dessert Saudi Arabia Is Land Of Heritage and Vibrant Culture
                      </p>
                      <br />
                      <p>Our Holyday Packages Include Tours to</p>
                    <br />
                    <div className="services-list">
                      <div className="services-list-main">
                        <p>Abha</p>
                      </div>
                      <div className="services-list-main">
                        <p>Taif</p>
                      </div>
                      <div className="services-list-main">
                        <p>Jeddah</p>
                      </div>
                      <div className="services-list-main">
                        <p>Madian Salih</p>
                      </div>
                      <div className="services-list-main">
                        <p>Tabbaha</p>
                      </div>
                    </div>
                      <br />
                      <Button text={"Buy Now"} />
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
