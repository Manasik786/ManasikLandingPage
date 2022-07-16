import React,{useState} from 'react'
import Cookies from "universal-cookie";

const Banner = () => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  
  return (
    <>
    <div className="contact-banner">
          {
            getlanguage != 'english' ? <>
            <div className="banner-content">
            <h1>Services</h1>
            <p>Manasik aviation is basically airline</p>
            <p>and does business of airline</p>
          </div>
            </>:<>
            <div className="banner-content arabic-banner">
            <h1>خدمات المطاعم</h1>
            <p>ماناسيك للطيران هي في الأساس شركة طيران</p>
            <p>ويقوم بأعمال الطيران</p>
          </div>
            </>
          }
        </div>
    </>
  )
}

export default Banner