import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Buttn1 from "../components/Button/index";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from "../components/Form/Popup";
import Cookies from "universal-cookie";
import Buttn2 from "../components/Button/Arabic";


const ServiceDetails = () => {

  const [card, setCard] = useState([]);
  const { pathname } = useLocation();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/CardItems`);
      setCard(data.data);
      console.log("New Data",card)
    };
    getdata();
  }, []);
  let str = pathname;
  str = str.substring(16);
  let newpath = str.replace(/([A-Z])/g, ' $1').trim()
  console.log("Path is 1",newpath)


  return (
    <>
     {
      getlanguage != "english" ? <>
       {
      card.map((item) => {
        return(
          
            (item.CardTitle === newpath ?
             <>
               <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <h2 className='applyfromclass'>{item.CardTitle}</h2>
                </Modal.Header>
                <Popup />
              </Modal>
            <div className="contact-banner">
            <div className="banner-content">
                <h1>{item.CardTitle}</h1>
                <p>Manasik aviation is basically airline</p>
                <p>and does business of airline</p>
              </div>
              
              </div>
            
            <div className="gap"></div>
            <div className="packagesdetails">
              <div className="packagesdetails_image">
                <img src={item.images[0].url} />
              </div>
              <div className="packagesdetails_content">
                    <h2>{item.CardTitle} </h2>
                   
                    <div className="packagesdetails_include">
                      <p>{item.CardDescriptions}</p>
                    </div>
                    <Button
                      variant="primary"
                      className="primarybutton"
                      onClick={handleShow}
                    >
                      <Buttn1 text={"BOOK NOW"} />
                    </Button>
                  </div>
            </div>
            
            </> :  <></>)
          
        )
      })
    }
      </> : <>
      {
      card.map((item) => {
        return(
          
            (item.CardTitle === newpath ?
             <>
               <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <h2 className='applyfromclass'>{item.CardTitlear}</h2>
                </Modal.Header>
                <Popup />
              </Modal>
            <div className="contact-banner">
            <div className="banner-content">
                <h1 className='arabic-align'>{item.CardTitlear}</h1>
                <p className='arabic-align'>ماناسيك للطيران هي في الأساس شركة طيران</p>
                <p className='arabic-align'>ويقوم بأعمال الطيران</p>
              </div>
              
              </div>
            
            <div className="gap"></div>
            <div className="packagesdetails">
              <div className="packagesdetails_image">
                <img src={item.images[0].url} />
              </div>
              <div className="packagesdetails_content">
                    <h2 className='arabic-align'>{item.CardTitlear} </h2>
                   
                    <div className="packagesdetails_include">
                      <p className='arabic-align'>{item.CardDescriptionsar}</p>
                    </div>
                    <Button
                      variant="primary"
                      className="primarybutton"
                      onClick={handleShow}
                    >
                      <Buttn2 text={"احجز الآن"} />
                    </Button>
                  </div>
            </div>
            
            </> :  <></>)
          
        )
      })
    }
      </>
     }
    </>
  )
}

export default ServiceDetails