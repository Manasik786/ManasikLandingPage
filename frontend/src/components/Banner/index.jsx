import React, { useEffect, useState } from "react";
import Button from "../Button";
import BannerImage from '../../assets/images/banner.png'
import TechBanner from '../../assets/images/techbanner.png'
import ContactUsBanner from '../../assets/images/contactus.png'
import Cookies from "universal-cookie";

const Banner = ({ selectedBanner }) => {
    
  const cookies = new Cookies();
  
  const [getlanguage,setLanguage] = useState(cookies.get("language"));

  // const [card,setCard] = useState([]);
  // useEffect(() => {
  //   const getdata = async () => {
  //     const { data } = await axios.get(`/api/v1/CardItems`);
  //     setCard(data.data);
  //     console.log("New Data",card)
  //   };
  //   getdata();
  // }, []);
  

  var dataText = ["Trust", "Transparency", "Traceability"];
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      if (document.querySelector(".banner-h1")) {
        document.querySelector(".banner-h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 5000);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }

  useEffect(() => {
    StartTextAnimation(0);
  }, [selectedBanner === 'home'])
  // array with texts to type in typewriter

  switch (selectedBanner) {
    case "whoweare":
      return (
        <>
          <div class="bg-image-wrap">
            <img src={TechBanner} />
            <div class="overlay">
            </div>
            <section class="banner-main ml3">
              <h2>Who we are?</h2>
            </section>
          </div>
        </>
      );
    case "technology":
      return (
        <>
          <div class="bg-image-wrap">
            <img src={TechBanner} />
            <div class="overlay">
            </div>
            <section class="banner-main ml3">
              <h2>Technology</h2>
            </section>
          </div>

        </>
      );
    case "contactus":
      return (
        <>
          <div class="bg-image-wrap">
            <img src={ContactUsBanner} />
            <div class="overlay">
            </div>
            <section class="banner-main ml3">
              <h2>Contact Us</h2>
            </section>
          </div>

        </>
      );
    default:
      return (
        <>
         {
          getlanguage != 'english'? <>
           <div class="bg-video-wrap">
            <div class="overlay">
            </div>
            <section class="banner-main ml3">
              
              <h1>How to choose the</h1>
              <h1>best airline?</h1>
              <p>Manasik aviation is basically airline</p>
              <p>and does business of airline..</p>
            </section>
            <div className='socail-icons'>
                      <i class="fa-brands fa-facebook-f"></i>
                      <i class="fa-brands fa-instagram"></i>
                      <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          </>:<>
          <div class="bg-video-wrap">
            <div class="overlay">
            </div>
            <section class="banner-main ml3 arabic-banner">
              <h1>كيفية اختيار ملف</h1>
              <h1>أفضل شركة طيران؟</h1>
              <p>ماناسيك للطيران هي في الأساس شركة طيران</p>
              <p>وتقوم بأعمال الطيران</p>
            </section>
            <div className='socail-icons'>
                      <i class="fa-brands fa-facebook-f"></i>
                      <i class="fa-brands fa-instagram"></i>
                      <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          </>
         }
        </>
      );
  }
};

export default Banner;
