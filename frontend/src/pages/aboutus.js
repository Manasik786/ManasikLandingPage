import React, {useState,useEffect} from "react";
import Button from "../components/Button";
import bottomleft from "../assets/images/b1.png";
import Card from '../components/Card/vision'
import Mission from '../components/Card/mission'

import Footer from "../components/Footer/index1";
import Cookies from "universal-cookie";
import BackArrow from '../components/Button/Arabic'
import Img1 from "../assets/images/Makkah.jpg";
import Img2 from "../assets/images/madinah1.png";
import axios from "axios";
import CEOMessage from "../components/Card/CEOMessage";
import AboutManasik from '../components/Card/AboutPage'
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
            <h1 className="arabic-align11">معلومات عنا</h1>
            <p className="arabic-align11">ماناسيك للطيران هي في الأساس شركة طيران</p>
            <p className="arabic-align11">ويقوم بأعمال الطيران</p>
          </div>
            </>
          }
        </div>
        <div className="home-main aboutustop">
        <div className="custom-container">
            {
              getlanguage != 'english' ? <>
              <AboutManasik/>
              </>: <>
              <AboutManasik/>
              </>
            }
          </div>
        </div>
       <div className="vision">
       <Card/>
       <Mission/>
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
       
       {
           data.slice(0,2).map((item) => {
            return(
              <div className="aboutcard11">
              <div className='popular-card' key={item._id}>
            <div className="about-images1">
            <div className='images1'>
              <img src={item.images[0].url}/>

            </div>
            <h5 className="arabic-align">{item.CardTypear}</h5>
            {/* <h6>From USD 47,535</h6> */}
            </div>
            
          </div>
          </div>
            )
          })
        }
       </div>
       </div>
        </>
       }
       <div className="vision">
       <CEOMessage/>
       </div>
       
      
       {/* <Footer/> */}
    </>
  );
};

export default Whoweare;

