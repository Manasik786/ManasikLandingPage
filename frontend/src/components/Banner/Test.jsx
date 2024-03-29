import React,{useState,useEffect} from 'react'
import Cookies from "universal-cookie";
import { useLocation } from "react-router-dom";
import axios from 'axios';

const Test = () => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  const { pathname } = useLocation();
  const [card, setCard] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/CardItems`);
      setCard(data.data);
    };
    getdata();
  }, []);

  
 
   if (pathname === "/contactus") return(
    <>
    <div className="contact-banner">
       {
        getlanguage != 'english' ? <>
        <div className="banner-content ">
         <h1>Contact</h1>
         <p>Manasik Aviation is basically airline</p>
         <p>and does business of airline</p>
       </div>
        </> : <>
        <div className="banner-content arabic-banner">
         <h1 className="arabic-align11">وظائف</h1>
         <p className="arabic-align11">ماناسيك للطيران هي في الأساس شركة طيران</p>
         <p className="arabic-align11">ويقوم بأعمال الطيران</p>
       </div>
        </>
       }
     </div>
    </>
  );
  else if (pathname === "/careers") return(
    <>
    <div className="contact-banner">
       {
        getlanguage != 'english' ? <>
        <div className="banner-content ">
         <h1>Careers</h1>
         <p>Manasik Aviation is basically airline</p>
         <p>and does business of airline</p>
       </div>
        </> : <>
        <div className="banner-content arabic-banner">
         <h1 className="arabic-align11">وظائف</h1>
         <p className="arabic-align11">ماناسيك للطيران هي في الأساس شركة طيران</p>
         <p className="arabic-align11">ويقوم بأعمال الطيران</p>
       </div>
        </>
       }
     </div>
    </>
  );
  else if (pathname === "/aboutus") return(
    <>
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
    </>
  );
  else if (pathname === "/services") return(
    <>
    {
            getlanguage != 'english' ? <>
            <div className="banner-content">
            <h1> Services</h1>
            <p>Manasik aviation is basically airline</p>
            <p>and does business of airline</p>
          </div>
            </>:<>
            <div className="banner-content arabic-banner">
            <h1 className="arabic-align11">خدمات المطاعم</h1>
            <p className="arabic-align11">ماناسيك للطيران هي في الأساس شركة طيران</p>
            <p className="arabic-align11">ويقوم بأعمال الطيران</p>
          </div>
            </>
          }
    </>
  );
  else if (pathname === "/packages") return(
    <>
    <div className="contact-banner">
          {
            getlanguage != 'english' ? <>
            <div className="banner-content">
            <h1>Popular Packages</h1>
            <p>Manasik aviation is basically airline</p>
            <p>and does business of airline</p>
          </div>
            </>:<>
            <div className="banner-content arabic-banner">
            <h1 className="arabic-align11">الوجهات المشهورة</h1>
            <p className="arabic-align11">ماناسيك للطيران هي في الأساس شركة طيران</p>
            <p className="arabic-align11">ويقوم بأعمال الطيران</p>
          </div>
            </>
          }
        </div>
    </>
  );
  else if (pathname === "/ambulance") return(
    <>
    <div className="contact-banner">
      
          {
            getlanguage != 'english' ? <>
            <div className="banner-content">
              <>
              
              <h1>Air Ambulance</h1>
                    <p>Manasik aviation is basically airline</p>
                    <p>and does business of airline</p>
              </>
             </div>
            </>:<>
            <div className="banner-content arabic-banner">
            <h1 className="arabic-align11">الإسعاف الجوي</h1>
            <p className="arabic-align11">ماناسيك للطيران هي في الأساس شركة طيران</p>
            <p className="arabic-align11">ويقوم بأعمال الطيران</p>
          </div>
            </>
          }
        </div>
    </>
  );
  else if (pathname === "/aviationdestination") return(
    <>
    <div className="contact-banner">
       {
        getlanguage != 'english' ? <>
        <div className="banner-content">
            <h1>Popular Destination</h1>
            <p>Manasik aviation is basically airline</p>
            <p>and does business of airline</p>
          </div>
        </> : <>
        <div className="banner-content arabic-banner">
            <h1 className="arabic-align11">الوجهات المشهورة</h1>
            <p className="arabic-align11">ماناسيك للطيران هي في الأساس شركة طيران</p>
            <p className="arabic-align11">ويقوم بأعمال الطيران</p>
          </div>
        </>
       }
     </div>
    </>
  );
  else if (pathname === "/privacy") return(
    <>
    <div className="contact-banner">
       {
        getlanguage != 'english' ? <>
        <div className="banner-content">
         <h1>Privacy Policy</h1>
         <p>Manasik Aviation is ready to serve you in</p>
         <p> every manner for more information please contact us on</p>
       </div>
        </> : <>
        <div className="banner-content arabic-banner">
         <h1 className="arabic-align11">اتصال</h1>
         <p className="arabic-align11">مناسيك للطيران على استعداد لخدمتك</p>
         <p className="arabic-align11"> بكل طريقة لمزيد من المعلومات يرجى الاتصال بنا على</p>
       </div>
        </>
       }
     </div>
    </>
  );
  else if (pathname === "/term&condition") return(
    <>
    <div className="contact-banner">
       {
        getlanguage != 'english' ? <>
        <div className="banner-content">
         <h1>Term and Condition</h1>
         <p>Manasik Aviation is ready to serve you in</p>
         <p> every manner for more information please contact us on</p>
       </div>
        </> : <>
        <div className="banner-content arabic-banner">
         <h1 className="arabic-align11">الأحكام والشروط</h1>
         <p className="arabic-align11">مناسيك للطيران على استعداد لخدمتك</p>
         <p className="arabic-align11"> بكل طريقة لمزيد من المعلومات يرجى الاتصال بنا على</p>
       </div>
        </>
       }
     </div>
    </>
  );
  return (
   <>
   
   </>
  )
}

export default Test