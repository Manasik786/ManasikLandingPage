import React, {useState,useEffect} from "react";
import Button from "../components/Button";
import bottomleft from "../assets/images/b1.png";
import MobilePlatform from "../assets/images/onlinePlatform.png";
import HotelServiceImage from "../assets/images/catering.png";
import LeftCloud from '../assets/images/leftcloud.png'
import Card from '../components/Card/vision'
import Footer from "../components/Footer/index1";
import Cookies from "universal-cookie";
import BackArrow from '../components/Button/Arabic'
import Img1 from "../assets/images/Makkah.jpg";
import Img2 from "../assets/images/madinah1.png";
import axios from "axios";
import CEOMessage from "../components/Card/CEOMessage";
import AboutManasik from '../components/Card/About'
import WhyManasik from '../components/Card/WhyManasik'

const Whoweare = () => {
  
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));

  const [card, setCard] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/CardItems`);
      setCard(data.data);
      
    };
    getdata();
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/GalleryItems`);
      setData(data.data);
      
    };
    getdata();
  }, []);
  
  return (
    <>
      <div className="contact-banner">
          {
            getlanguage != 'english' ? <>
            <div className="banner-content">
            <h1>About Us</h1>
            <p>Manasik aviation is basically airline</p>
            <p>and does business of airline</p>
          </div>
            </> : <>
            <div className="banner-content arabic-banner">
            <h1>معلومات عنا</h1>
            <p>ماناسيك للطيران هي في الأساس شركة طيران</p>
            <p>ويقوم بأعمال الطيران</p>
          </div>
            </>
          }
        </div>
        <div className="home-main aboutustop">
        <section className="hotel-services">
          <div className="custom-container">
            {
              getlanguage != 'english' ? <>
              <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center">
              <div className="image-section d-md-flex col-0 col-md-6 col-xxl-5">
                <div className="row g-0 flex-column justify-content-center align-items-center align-content-center">
                  <img src={HotelServiceImage} />
                </div>
              </div>
              <div className="col-12 col-md-6 col-xxl-5 z-index">
                <div className="row g-0">
                  <AboutManasik/>
                  
                </div>
              </div>
            </div>
              </>: <>
              <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center arabicstyle">
              <div className="image-section d-md-flex col-0 col-md-6 col-xxl-5">
                <div className="row g-0 flex-column justify-content-center align-items-center align-content-center">
                  <img src={HotelServiceImage} />
                </div>
              </div>
              <div className="col-12 col-md-6 col-xxl-5 z-index">
                <div className="row g-0">
                  <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11">
                    <h2 className="arabic-align">خدمات النقل</h2>
                    <br />
                    <p className="arabic-align">
                    نحن نقدم خدمات النقل لدينا
                      الضيوف الذين يسافرون داخل المدينة أو خارجها نحن
                      تقديم الخدمات للأفراد وكذلك للمجموعات ،
                      لدينا جميع أنواع المشاوير من السيارات إلى الحافلات.{" "}
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
                    <BackArrow text={"اشتري الآن"}  className="backarrowbutton"/>
                  </div>
                </div>
              </div>
            </div>
              </>
            }
          </div>
        </section>
        </div>
       <div className="vision">
       <Card/>
       </div>
       {
        getlanguage != 'english' ? <>
        <div className="about-bg">
       <div className="scaleimage-about">
      
        {
           data.slice(0,2).map((item) => {
            return(
              <div className="aboutcard11">
              <div className='popular-card' key={item._id}>
            <div className="about-images1">
            <div className='images1'>
              <img src={item.images[0].url}/>

            </div>
            <h5>{item.CardType}</h5>
            {/* <h6>From USD 47,535</h6> */}
            </div>
            
          </div>
          </div>
            )
          })
        }
       
       

       </div>
       </div>
        </> : <>
        <div className="about-bg">
       <div className="scaleimage-about">
       <div className="aboutcard11">
       <div className='popular-card'>
            <div className="about-images1">
            <div className='images1'>
              <img src={Img1}/>

            </div>
            <h5>المدينة المنورة</h5>
            <h6>من 47535 دولار أمريكي</h6>
          
            </div>
            
          </div>
       </div>

          <div className="aboutcard11">
          <div className='popular-card'>
            <div className="about-images1">
            <div className='images1'>
              <img src={Img2}/>

            </div>
            <h5>مكه </h5>
            <h6>من 47535 دولار أمريكي</h6>
            </div>
            
          </div>
          </div>
       </div>
       </div>
        </>
       }
       <div className="career-warning1">
       <div className="warning-card">
         <div className="warning-left1">
           <div className="imgceo">

           </div>
         </div>
         <div className="warning-right">
           {
            getlanguage != 'english' ? <>
            <CEOMessage/>
            </> : <>
            <div className="warning-section newceo">
             <h2 className="arabic-align">رسالة الرئيس التنفيذي</h2>
             <p className="arabic-align">
             "الآن وبعد 25 عامًا من رحلتي المهنية الطويلة والناجحة ، يسعدني أن أعلن عن ماناسيك للطيران ، مع تحديد ممارساتنا الحالية والتزامنا بمستقبل أفضل. كمنظمة تجمع الأشخاص معًا وتضعهم في المكان الذي يحتاجون إليه ، نحن نتفهم مسؤوليتنا تجاه حماية المساحات التي نعمل فيها وتعزيز بيئة آمنة ومجزية لموظفينا وعملائنا.</p>
             <p className="arabic-align">
             تسبب تفشي كوفيد -19 في اضطراب غير مسبوق في جميع أنحاء العالم. كن مطمئنًا ، تعمل فرقنا بلا كلل لتوفير نفس معايير الخدمة الاستثنائية التي تتوقعها.                </p>
             <p className="arabic-align">
             رسالتي إلى جميع العملاء والموظفين والموظفين الذين يواصلون إيمانهم بمناسيك ، أشكركم على ثقتكم وولائهم خلال هذا الوقت الصعب ".              </p>
              <p className="arabic-align">أتمنى لك ولأحبائك الصحة الجيدة ،</p>
              <h6 className="arabic-align">يوسف عبدالله الجهاني</h6>
           </div>
            </>
           }
         </div>
       </div>
     </div>
      
       {/* <Footer/> */}
    </>
  );
};

export default Whoweare;

