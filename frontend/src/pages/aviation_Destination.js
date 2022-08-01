import React,{useState,useEffect} from 'react'
import Cookies from "universal-cookie";
import axios from 'axios';


const Aviation_Destination = () => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  const [card, setCard] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/GalleryItems`);
      setCard(data.data);
      console.log("New Data",card)
    };
    getdata();
  }, []);

  return (
    <>
      {
        getlanguage != 'english' ? <>
        <div className="ambulance">
      <div className="contact-banner">
          <div className="banner-content">
            <h1>Popular Destination</h1>
            <p>Manasik aviation is basically airline</p>
            <p>and does business of airline</p>
          </div>
        </div>
        <div className="gap"></div>
        <div className='popular-Gallery'>
          {
            card.map((item) => {
              return(
                <>
                <div className='popular-card'>
            <div className='images1'>
              <img src={item.images[0].url}/>

            </div>
            <h5>{item.CardType}</h5>
            <h6>{item.CardDescriptions}</h6>
          </div>
                </>
              )
            })
          }
        </div>
        <div className="gap">
          
        </div>
        </div>
        </> : <>
        <div className="ambulance">
        <div className="contact-banner">
          <div className="banner-content arabic-banner">
            <h1 className="arabic-align11">الوجهات المشهورة</h1>
            <p className="arabic-align11">ماناسيك للطيران هي في الأساس شركة طيران</p>
            <p className="arabic-align11">ويقوم بأعمال الطيران</p>
          </div>
        </div>
        <div className="gap"></div>
        <div className='popular-Gallery'>
          {
            card.map((item) => {
              return(
                <>
                <div className='popular-card'>
            <div className='images1'>
              <img src={item.images[0].url}/>

            </div>
            <h5 className='arabic-align'>{item.CardTypear}</h5>
            <h6 className='arabic-align'>{item.CardDescriptionsar}</h6>
          </div>
                </>
              )
            })
          }
        </div>
        <div className="gap">
          
        </div>
        </div>
        {/* <div className="ambulance">
      <div className="contact-banner">
          <div className="banner-content arabic-banner">
            <h1>الوجهات المشهورة</h1>
            <p>ماناسيك للطيران هي في الأساس شركة طيران</p>
            <p>ويقوم بأعمال الطيران</p>
          </div>
        </div>
        <div className="gap"></div>
        <div className='popular-Gallery'>
          <div className='popular-card aligncard'>
            <div className='images1'>
              <img src={Img1}/>

            </div>
            <h5>أبها</h5>
            <h6>جولات جبلية</h6>
          </div>
          <div className='popular-card aligncard'>
          <div className='images1'>
              <img src={Img2}/>

            </div>
            <h5>جدة</h5>
            <h6>ملكة البحر</h6>
          </div>
          <div className='popular-card aligncard'>
            <div className='images1'>
              <img src={Img3}/>

            </div>
            <h5>الخبر</h5>
            <h6>سياحة المدينة</h6>
          </div>
          <div className='popular-card aligncard'>
          <div className='images1'>
              <img src={Img4}/>

            </div>
            <h5>ينبع</h5>
            <h6>الشاطئ الصناعي</h6>
          </div>
          <div className='popular-card aligncard'>
          <div className='images1'>
              <img src={Img5}/>

            </div>
            <h5>مدائن صالح</h5>
            <h6>جولة تاريخية</h6>
          </div>
          <div className='popular-card aligncard'>
          <div className='images1'>
              <img src={Img6}/>

            </div>
            <h5>المدينة المنورة</h5>
            <h6>السياحة المقدسة</h6>
          </div>
          <div className='popular-card aligncard'>
          <div className='images1'>
              <img src={Img7}/>

            </div>
            <h5>مكه</h5>
            <h6>السياحة المقدسة</h6>
          </div>
          <div className='popular-card aligncard'>
          <div className='images1'>
              <img src={Img8}/>

            </div>
            <h5>الرياض</h5>
            <h6>عاصمة المملكة العربية السعودية</h6>
          </div>
          <div className='popular-card aligncard'>
          <div className='images1'>
              <img src={Img9}/>

            </div>
            <h5>الطائف</h5>
            <h6>كول سياحة</h6>
          </div>
        </div>
        <div className="gap">
          
        </div>
        </div> */}
        </>
      }
      {/* <Footer/> */}
    </>
  )
}

export default Aviation_Destination