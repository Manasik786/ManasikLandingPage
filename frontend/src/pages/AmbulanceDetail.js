import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Buttn1 from "../components/Button/index";
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
      const { data } = await axios.get(`/api/v1/AirAmbulance`);
      setCard(data.data);
      console.log("New Data",card)
    };
    getdata();
  }, []);
  let str = pathname;
  str = str.substring(27);
  let checkpath = str.substring(0,5)
  console.log("new one",str)
  console.log("new one",checkpath)
  
  return (
   
    <>
    
    {
      card.map((item) => {
        return(
          
            ((item.CardDetail).substring(0,5) === checkpath ?
             < >
             <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>{item.CardDetail}</Modal.Header>
            <Popup />
          </Modal>
           <div className="contact-banner" key={item._id}>
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