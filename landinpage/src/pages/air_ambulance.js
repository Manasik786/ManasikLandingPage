import React,{useState,useEffect} from "react";
import Buttn1 from "../components/Button";
import Cookies from "universal-cookie";
import Banner from '../components/Banner/Test'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Popup from '../components/Form/Popup'
import axios from "axios";
import SimpleBtn from "../components/Button/SimpleButton";
import { Link } from "react-router-dom";


// import Form from '../components/AmbulanceBook/index'
const Air_ambulance = () => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [card,setCard] = useState([]);

  useEffect(() => {
    const getData = async() => {
      const {data} = await axios.get(`/api/v1/AirAmbulance`);
      setCard(data.data)
    }
    getData()
  },[])
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Popup/>
      </Modal>
    <div className="contact-banner">
      <Banner/>
      </div>
      {
        getlanguage != 'english' ? <>
        <div className="ambulance">
        
        <div className="gap"></div>
        <div className="ambulanec-banner"></div>
        <div className="ambulanec-content">
          <div className="ambulance-11">
          
          <div className="abulance33">
            <p>
              Manasik Aviation proud to announce the addition Citation
              Sovereign, fully equipped with the Life Port, Inc. Ambulatory
              interior configuration. Our Air Ambulance Aircrafts deliver the
              kind of true jet speed that can literary save lives by reducing
              flight times.{" "}
            </p>
            <p>
              Our Air Ambulance and medical crews operate 24/7 providing a
              professional international Air Ambulance services using latest
              medical techniques and equipment.
            </p>
            <p>
              Now Manasik Aviation will be the leader in ambulatory services as
              well. Our Air Ambulance and medical crews operate 24/7 providing a
              professional international Air Ambulance services using latest
              medical techniques and equipment.
            </p>
            <Button variant="primary" className='primarybutton' onClick={handleShow}>
                  <Buttn1 text={"Book NOW"}/>
                </Button>

          </div>
          <div className="abulance22"></div>
          </div>
        </div>
        <div className="ambulanceGallery">
          {
            card.map((item) => {
              return(
                <>
                <div className="airambulance-cards air_rowreverse">
                  <div className="ambulance-item">
                    <div className="ambulancetext">
                    <h2>{item.CardDetail}</h2>
                    <p>
                      {item.CardDescriptions}
                    </p>
                    <Link
                      to={{
                        pathname: `AmbulanceDetail/${(item.CardDetail).replace(/ /g,'')}`,
                        state: {
                          // whatever you need to send with the route transition
                        },
                      }}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                    <SimpleBtn text={"Read more"}/>
                    </Link>
                    </div>
                  </div>
                  <div className="ambulance-item">
                    <img src={item.images[0].url} />
                  </div>
                  </div>
                </>
              )
            })
          }
          
        </div>
        {/* <div className="gap"></div>
        <div className="ambulanceForm">
          
        </div> */}
        
      </div>
        </> : 
        <>

        {/* <div className="ambulance">
       
        <div className="gap"></div>
        <div className="ambulanec-banner"></div>
        <div className="ambulanec-content">
          <div className="ambulance-11">
          
          <div className="abulance33 aligncard">
            <p>
            تقديم خدمة نقل المرضى بالإسعاف الجوي برحلات آمنه دون أي عناء و توفير كافة الخدمات و سبل الراحة منذ اللحظة الأولى حتى الأخيرة.{" "}
            </p>
            <p>
            تعمل طواقم الإسعاف الجوي والطواقم الطبية لدينا على مدار الساعة طوال أيام الأسبوع لتقديم خدمات إسعاف جوي دولية احترافية باستخدام أحدث التقنيات والمعدات الطبية.
            </p>
            <p>
            الآن سنكون الشركة الرائدة في الخدمات المتنقلة مثل
              نحن سوف. تعمل طواقم الإسعاف الجوي والطواقم الطبية لدينا على مدار الساعة طوال أيام الأسبوع لتوفير أ
              خدمات الإسعاف الجوي الدولية المهنية باستخدام أحدث
              التقنيات والمعدات الطبية.
            </p>
            <Button className="airambulance" text={"اطلب الآن"} />
          </div>
          <div className="abulance22"></div>
          </div>
        </div>
        <div className="ambulanceGallery">
          <div className="airambulance-cards arabicstyle">
            <div className="ambulance-item">
              <div className="ambulancetext">
              <h2 className="arabic-align">معدات طبية</h2>
              <p className="arabic-align">
              الآن سنكون الرواد في الخدمات المتنقلة
                كذلك. تعمل طواقم الإسعاف الجوي والطواقم الطبية لدينا على مدار الساعة طوال أيام الأسبوع
                تقديم خدمات إسعاف جوي دولية احترافية
                باستخدام أحدث التقنيات والمعدات الطبية
              </p>
              </div>
            </div>
            <div className="ambulance-item">
              <img src={Img4} />
            </div>

            <div className="ambulance-item">
              <img src={Img3} />
            </div>
            <div className="ambulance-item">
            <div className="ambulancetext">
              <h2 className="arabic-align">الطائرات</h2>
              <p className="arabic-align">
              الآن سنكون الرواد في الخدمات المتنقلة
                كذلك. تعمل طواقم الإسعاف الجوي والطواقم الطبية لدينا على مدار الساعة طوال أيام الأسبوع
                تقديم خدمات إسعاف جوي دولية احترافية
                باستخدام أحدث التقنيات والمعدات الطبية
              </p>
              </div>
            </div>
            <div className="ambulance-item">
            <div className="ambulancetext">
              <h2 className="arabic-align">تعليق</h2>
              <p className="arabic-align">
              الآن سنكون الرواد في الخدمات المتنقلة
                كذلك. تعمل طواقم الإسعاف الجوي والطواقم الطبية لدينا على مدار الساعة طوال أيام الأسبوع
                تقديم خدمات إسعاف جوي دولية احترافية
                باستخدام أحدث التقنيات والمعدات الطبية
              </p>
              </div>
            </div>
            <div className="ambulance-item">
              <img src={Img2} />
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="ambulanceForm">
          
        </div>
        <div className="gap"></div>
        </div> */}
        
        </>
      }
      {/* <Footer/> */}
    </>
  );
};

export default Air_ambulance;


