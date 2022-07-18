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

const Packages = () => {

  const [card, setCard] = useState([]);
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/PackageView`);
      setCard(data.data);
      console.log("New Data",card)
    };
    getdata();
  }, []);
  let str = pathname;
  str = str.substring(10);
  return (
    <>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton></Modal.Header>
    <Popup />
   </Modal>
    {
      card.map((item) => {
        return(
          
            (item.PkgName === str ?
             <>
             <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
              <h2 className='applyfromclass'>{item.PkgName}</h2>
              </Modal.Header>
              <Popup />
            </Modal>
            <div className="contact-banner">
            <div className="banner-content">
                <h1>{item.PkgName}</h1>
                <p>Manasik aviation is basically airline</p>
                <p>and does business of airline</p>
              </div>
              
              </div>
            
            <div className="gap"></div>
            <div className="packagesdetails">
              <div className="packagesdetails_image">
                <img src={img1} />
              </div>
              <div className="packagesdetails_content">
                    <h2>{item.PkgName} </h2>
                   {item.PkgDetail}
                    <div className="packagesdetails_include">
                      <p>Hotel Include</p>
                      <p>{item.DaysOfstay}</p>
                      <p>Valid till {item.ValidTill}</p>
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
    </>
  )
}

export default Packages