import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useLocation } from "react-router-dom";
import img1 from "../assets/images/gallery.png";
import img4 from "../assets/images/al-nabawi-sunset.jpg";
import img5 from "../assets/images/Hotel.jpg";
import Buttn1 from "../components/Button/index";
import img2 from "../assets/images/tour.png";
import ArabicButton from "../components/Button/Arabic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from "../components/Form/Packages";
import Cookies from "universal-cookie";

const Packages = () => {

  const [card, setCard] = useState([]);
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));

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
    getlanguage != "english" ? <>
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
                {
                  item.PkgName == 'Ummrah' ? <>
                  <img src={img4}/>
                  </> : item.PkgName == 'Holiday' ? <img src={img2}/> : <>
                  <img src={img5}/>
                  </>
                 
                }
              </div>
              <div className="packagesdetails_content">
                    <h2>{item.PkgName} </h2>
                   {item.PkgDetail}
                    <div className="packagesdetails_include">
                      {/* <p>Hotel Include</p> */}
                      <p>Duration <span className='DaysOfstay'><span className='pkgstyle'>{item.DaysOfstay}</span> Days</span></p>
                      <p>Valid till <span className='DaysOfstay'><span className='pkgstyle'>{item.ValidTill}</span> </span></p>
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
            
            </> :  
            <>
            </>
            ) 
        )
      })
    }
    </> : <>
    {
      card.map((item) => {
        return(
          
            (item.PkgName === str ?
             <>
             <Modal show={show} onHide={handleClose}>
             <Modal.Header className='arabic-icon' closeButton>
                <span className='arabic-icon1'><h2 className='applyfromclass'>{item.PkgNamear}</h2></span>
             </Modal.Header>
              <Popup />
            </Modal>
            <div className="contact-banner">
            <div className="banner-content arabic-banner">
                <h1 className="arabic-align11">{item.PkgNamear}</h1>
                <p className="arabic-align11">?????????????? ?????????????? ???? ???? ???????????? ???????? ??????????</p>
                <p className="arabic-align11">?????????? ???????????? ??????????????</p>
              </div>
              
              </div>
            
            <div className="gap"></div>
            <div className="packagesdetails">
              <div className="packagesdetails_image">
              {
                  item.PkgName == 'Ummrah' ? <>
                  <img src={img4}/>
                  </> : item.PkgName == 'Holiday' ? <img src={img2}/> : <>
                  <img src={img5}/>
                  </>
                 
                }
              </div>
              <div className="packagesdetails_content">
                    <h2 className='arabic-align'>{item.PkgNamear} </h2>
                   <h6 className='arabic-align' > {item.PkgDetailar}</h6>
                    <div className="packagesdetails_include">
                      {/* <p>Hotel Include</p> */}
                      <p className='arabic-align'>?????? <span className='DaysOfstay'><span className='pkgstyle'>{item.DaysOfstay}</span> ????????</span></p>
                      <p className='arabic-align'>???????? ?????????? <span className='DaysOfstay'><span className='pkgstyle'>{item.ValidTillar}</span> </span></p>
                    </div>
                    <Button
                      variant="primary"
                      className="primarybutton"
                      onClick={handleShow}
                    >
                      <ArabicButton text={"???????? ????????"} />
                    </Button>
                  </div>
            </div>
            
            </> :  
            <>
            </>
            ) 
        )
      })
    }
    </>
   }
    </>
  )
}

export default Packages