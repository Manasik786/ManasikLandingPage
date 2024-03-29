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
              flight times.
              Our Air Ambulance and medical crews operate 24/7 providing a
              professional international Air Ambulance services using latest
              medical techniques and equipment.
              Now Manasik Aviation will be the leader in ambulatory services as
              well. Our Air Ambulance and medical crews operate 24/7 providing a
              professional international Air Ambulance services using latest
              medical techniques and equipment.
            </p>
            
            

          </div>
          </div>
        </div>
        <div className="ambulanceGallery">
          {
            card.map((item) => {
              return(
                <>
                <div className="airambulance-cards air_rowreverse" key={item._id}>
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

        <div className="ambulance">
       
        <div className="gap"></div>
        <div className="ambulanec-banner"></div>
        <div className="ambulanec-content">
          <div className="ambulance-11">
          
          <div className="abulance33 aligncard">
            <h6 className="arabic-align">
            تقديم خدمة نقل المرضى بالإسعاف الجوي برحلات آمنه دون أي عناء و توفير كافة الخدمات و سبل الراحة منذ اللحظة الأولى حتى الأخيرة.
            الآن سنكون الشركة الرائدة في الخدمات المتنقلة مثل
              نحن سوف. تعمل طواقم الإسعاف الجوي والطواقم الطبية لدينا على مدار الساعة طوال أيام الأسبوع لتوفير أ
              خدمات الإسعاف الجوي الدولية المهنية باستخدام أحدث
              التقنيات والمعدات الطبية.
            
            </h6>
           
           
          </div>
         
          </div>
        </div>
        <div className="ambulanceGallery">
        {
            card.map((item) => {
              return(
                <>
                <div className="airambulance-cards air_rowreverse" key={item._id}>
                  <div className="ambulance-item">
                    <div className="ambulancetext">
                    <h2 className="arabic-align">{item.CardDetailar}</h2>
                    <h6 className="arabic-align">
                      {item.CardDescriptionsar}
                    </h6>
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
                    <SimpleBtn text={"اقرأ أكثر"}/>
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
        <div className="gap"></div>
        
        </div>
        
        </>
      }
      {/* <Footer/> */}
    </>
  );
};

export default Air_ambulance;


