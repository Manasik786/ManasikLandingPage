import React,{useState,useEffect} from 'react'
import DestinationCard from '../components/Card/index'
import Banner from '../components/Banner/Banner'
import DestinationCard1 from '../components/Card/index1'
import DestinationForm from '../components/Form/index'
import Img1 from "../assets/images/sofa.jpg";
import Img2 from "../assets/images/Alkhobar.jpg";
import Img3 from "../assets/images/Jeddah.jpg";
import Img4 from "../assets/images/sofa.jpg";
import Img5 from "../assets/images/madinah.jpg";
import Img6 from "../assets/images/Makkah.jpg";
import Img7 from "../assets/images/Riyadh.jpg";
import Img8 from "../assets/images/sofa.jpg";
import Img9 from "../assets/images/Yanbu.jpg";
import Footer from "../components/Footer/index1";
import Cookies from "universal-cookie";
import axios from 'axios'



const Aviation_Destination = () => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));

  const [data, setData] = useState([]);
  const [card, setCard] = useState([]);
  const [check, setCheck] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/Category`);
      setCard(data.data);
      console.log("New Data",card)
    };
    getdata();
  }, []);


  function isCategory(item) {
    return item.Category === 'WhyManasik';
  }
  console.log(card.find(isCategory));

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/CardItems`);
      setData(data.data);
    };
    getdata();
  }, []);
  
  return (
    <>
    
    </>
    // <>
    //   {
    //     getlanguage != 'english' ? <>

        
    //    <div className="ambulance">
    //   <div className="contact-banner">
    //       <div className="banner-content">
    //         <h1>Gallery</h1>
    //         <p>Manasik aviation is basically airline</p>
    //         <p>and does business of airline</p>
    //       </div>
    //     </div>
    //     <div className="gap"></div>
    //     <div className='popular-Gallery'>
    //       <div className='popular-card'>
    //         <div className='images1'>
    //           <img src={Img1}/>
    //         </div>
    //         <h5>Abha</h5>
    //         <h6>Mountain Tours</h6>
    //       </div>
    //       <div className='popular-card'>
    //       <div className='images1'>
    //           <img src={Img2}/>

    //         </div>
    //         <h5>Jeddah</h5>
    //         <h6>Queen of Sea</h6>
    //       </div>
    //       <div className='popular-card'>
    //         <div className='images1'>
    //           <img src={Img3}/>

    //         </div>
    //         <h5>Alkhobar</h5>
    //         <h6>City Tourism</h6>
    //       </div>
    //       <div className='popular-card'>
    //       <div className='images1'>
    //           <img src={Img4}/>

    //         </div>
    //         <h5>Yanbu</h5>
    //         <h6>Industrial Beach</h6>
    //       </div>
    //       <div className='popular-card'>
    //       <div className='images1'>
    //           <img src={Img5}/>

    //         </div>
    //         <h5>Madian Sleh</h5>
    //         <h6>Historical Tour</h6>
    //       </div>
    //       <div className='popular-card'>
    //       <div className='images1'>
    //           <img src={Img6}/>

    //         </div>
    //         <h5>Madinah</h5>
    //         <h6>Holy Tourism</h6>
    //       </div>
    //       <div className='popular-card'>
    //       <div className='images1'>
    //           <img src={Img7}/>

    //         </div>
    //         <h5>Makkah</h5>
    //         <h6>Holy Tourism</h6>
    //       </div>
    //       <div className='popular-card'>
    //       <div className='images1'>
    //           <img src={Img8}/>

    //         </div>
    //         <h5>Riyadh</h5>
    //         <h6>Capital of KSA</h6>
    //       </div>
    //       <div className='popular-card'>
    //       <div className='images1'>
    //           <img src={Img9}/>

    //         </div>
    //         <h5>Taif</h5>
    //         <h6>Cool Tourism</h6>
    //       </div>
    //     </div>
    //     <div className="gap">
          
    //     </div>
    //     </div> 
    //     </> : <>
    //     <div className="ambulance">
    //   <div className="contact-banner">
    //       <div className="banner-content arabic-banner">
    //         <h1>الوجهات المشهورة</h1>
    //         <p>ماناسيك للطيران هي في الأساس شركة طيران</p>
    //         <p>ويقوم بأعمال الطيران</p>
    //       </div>
    //     </div>
    //     <div className="gap"></div>
    //     <div className='popular-Gallery'>
    //       <div className='popular-card aligncard'>
    //         <div className='images1'>
    //           <img src={Img1}/>

    //         </div>
    //         <h5>أبها</h5>
    //         <h6>جولات جبلية</h6>
    //       </div>
    //       <div className='popular-card aligncard'>
    //       <div className='images1'>
    //           <img src={Img2}/>

    //         </div>
    //         <h5>جدة</h5>
    //         <h6>ملكة البحر</h6>
    //       </div>
    //       <div className='popular-card aligncard'>
    //         <div className='images1'>
    //           <img src={Img3}/>

    //         </div>
    //         <h5>الخبر</h5>
    //         <h6>سياحة المدينة</h6>
    //       </div>
    //       <div className='popular-card aligncard'>
    //       <div className='images1'>
    //           <img src={Img4}/>

    //         </div>
    //         <h5>ينبع</h5>
    //         <h6>الشاطئ الصناعي</h6>
    //       </div>
    //       <div className='popular-card aligncard'>
    //       <div className='images1'>
    //           <img src={Img5}/>

    //         </div>
    //         <h5>مدائن صالح</h5>
    //         <h6>جولة تاريخية</h6>
    //       </div>
    //       <div className='popular-card aligncard'>
    //       <div className='images1'>
    //           <img src={Img6}/>

    //         </div>
    //         <h5>المدينة المنورة</h5>
    //         <h6>السياحة المقدسة</h6>
    //       </div>
    //       <div className='popular-card aligncard'>
    //       <div className='images1'>
    //           <img src={Img7}/>

    //         </div>
    //         <h5>مكه</h5>
    //         <h6>السياحة المقدسة</h6>
    //       </div>
    //       <div className='popular-card aligncard'>
    //       <div className='images1'>
    //           <img src={Img8}/>

    //         </div>
    //         <h5>الرياض</h5>
    //         <h6>عاصمة المملكة العربية السعودية</h6>
    //       </div>
    //       <div className='popular-card aligncard'>
    //       <div className='images1'>
    //           <img src={Img9}/>

    //         </div>
    //         <h5>الطائف</h5>
    //         <h6>كول سياحة</h6>
    //       </div>
    //     </div>
    //     <div className="gap">
          
    //     </div>
    //     </div>
    //     </>
    //   }
    //   {/* <Footer/> */}
    // </>
  )
}

export default Aviation_Destination