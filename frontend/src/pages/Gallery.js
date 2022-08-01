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
            <h1>Gallery</h1>
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
                <div className='popular-card1'>
            <div className='images1'>
              <img src={item.images[0].url}/>
            </div>
            {/* <h5>{item.CardType}</h5>
            <h6>{item.CardDescriptions}</h6> */}
          </div>
                </>
              )
            })
          }
        </div>
        <div className="gap">
          
        </div>
        </div>
        </> : 
        <>
        <div className="ambulance">
      <div className="contact-banner">
          <div className="banner-content">
            <h1>معرضنا</h1>
            <p className="arabic-align">ماناسيك للطيران هي في الأساس شركة طيران</p>
            <p className="arabic-align">ويقوم بأعمال الطيران</p>
          </div>
        </div>
        <div className="gap"></div>
        <div className='popular-Gallery'>
          {
            card.map((item) => {
              return(
                <>
                <div className='popular-card1'>
            <div className='images1'>
              <img src={item.images[0].url}/>
            </div>
            {/* <h5>{item.CardType}</h5>
            <h6>{item.CardDescriptions}</h6> */}
          </div>
                </>
              )
            })
          }
        </div>
        <div className="gap">
          
        </div>
        </div>
        </>
      }
      {/* <Footer/> */}
    </>
  )
}

export default Aviation_Destination