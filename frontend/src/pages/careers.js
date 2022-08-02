import React,{useState,useEffect} from "react";
import Buttn1 from "../components/Button/index";
import Footer from "../components/Footer/index1";
import Cookies from "universal-cookie";
import BackArrow from '../components/Button/Arabic'
import { Tabs, Tab } from "react-bootstrap";
import Fly from '../components/Tabs/Fly'
import Hotel from '../components/Tabs/Hotel'
import Resturent from '../components/Tabs/Resturent'
import Banner from "../components/Banner/Test";
import WarningCard from "../components/Card/WarningCard";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from "../components/Form/Popup";

const Careers = () => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  })
  const[card,setCard] = useState([]);
  useEffect(() => {
    const getData = async() => {
      const {data} = await axios.get(`/api/v1/CardItems`);
      setCard(data.data)
    }
    getData();
  },[])

  return (
   <>
    {
      loading ? <>
      <div className='outerloader'>
                <div class="loader">
                </div>
                </div>
      </> : <>
      
      <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton></Modal.Header>
    <Popup />
   </Modal>
   <Banner/>
   {
    getlanguage != 'english' ? <>
    <div className="contact-form1">
     {
      card.map((item) => {
        return(
          (item.CardType) === 'career' ? <>
          <div className="career_section">
      
      <div className="career-cards">
        <div className="career-left">
         <img src={item.images[0].url}/>
        </div>
        <div className="career-right">
          <p className="career-style">
            {item.CardDescriptions}
          </p>
          {/* <Button
                        variant="primary"
                        className="primarybutton "
                        onClick={handleShow}
                      >
                        <Buttn1 text={"BOOK NOW"} />
                      </Button> */}
        </div>
      </div>
    </div>
          </> : <></>
        )
      })
     }

     <div className="hq-careers">
      <div className="inner-careers">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 tab careertabs"
      >
        <Tab eventKey="home" title="fly manasik" className="manasiktabs">
        <Fly/>
        </Tab>
        <Tab eventKey="profile" title="manasik Restaurant" className="manasiktabs">
          <Resturent/>
        </Tab>
        <Tab eventKey="contact" title="manasik hotel" className="manasiktabs">
        <Hotel/>
        </Tab>
      </Tabs>
        
      </div>
     </div>

     
   </div>
    </> : <>
    <div className="contact-form1">
    {
      card.map((item) => {
        return(
          (item.CardType) === 'career' ? <>
          <div className="career_section">
      
      <div className="career-cards">
        <div className="career-left">
         <img src={item.images[0].url}/>
        </div>
        <div className="career-right">
          <p className="career-style">
            {item.CardDescriptionsar}
          </p>
          {/* <Button
                        variant="primary"
                        className="primarybutton "
                        onClick={handleShow}
                      >
                        <Buttn1 text={"BOOK NOW"} />
                      </Button> */}
        </div>
      </div>
    </div>
          </> : <></>
        )
      })
     }

     <div className="hq-careers">
      <div className="inner-careers">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 tab"
      >
        <Tab eventKey="home" title="يطير المناسك" className="manasiktabs">
        <Fly/>
        </Tab>
        <Tab eventKey="profile" title="مطعم مناسيك" className="manasiktabs">
          <Hotel/>
        </Tab>
        <Tab eventKey="contact" title="فندق مناسيك" className="manasiktabs">
          <Resturent/>
        </Tab>
      </Tabs>
      </div>
     </div>
     
   </div>
    </>
   }
      </>
    }
   </>
  );
};

export default Careers;
