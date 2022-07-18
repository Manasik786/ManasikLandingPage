import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useLocation } from "react-router-dom";
import img1 from "../assets/images/gallery.png";
import Buttn1 from "../components/Button/index";
import img2 from "../assets/images/Yanbu.jpg";
import ArabicButton from "../components/Button/Arabic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from "../components/Form/Popup";

const ServiceDetails = () => {

  const [card, setCard] = useState([]);
  const { pathname } = useLocation();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/CardItems`);
      setCard(data.data);
      console.log("New Data",card)
    };
    getdata();
  }, []);
  let str = pathname;
  str = str.substring(1);
  return (
    <>
   
    {
      card.map((item) => {
        return(
          
            (item.CardDetail === 'Hotel Services' ?
             <>
               <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <h2 className='applyfromclass'>{item.CardDetail}</h2>
                </Modal.Header>
                <Popup />
              </Modal>
            <div className="contact-banner">
            <div className="banner-content">
                <h1>{item.CardDetail}</h1>
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
                    <h2>{item.CardDetail} </h2>
                   {item.PkgDetail}
                    <div className="packagesdetails_include">
                      <p>{item.CardDescriptions}</p>
                    </div>
                    <Button
                      variant="primary"
                      className="primarybutton"
                      onClick={handleShow}
                    >
                      <Buttn1 text={"APPLY NOW"} />
                    </Button>
                  </div>
            </div>
            
            </> :  <></>)
          
        )
      })
    }
    </>
  )
}

export default ServiceDetails