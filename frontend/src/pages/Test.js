import React,{useState,useEffect} from 'react'
import axios from 'axios';
import img1 from '../assets/images/gallery.png'
import Slider from "react-slick";
import Cookies from "universal-cookie";

const Test = () => {
  const [card, setCard] = useState([]);
  
  const cookies = new Cookies();
const [getlanguage,setLanguage] = useState(cookies.get("language"));
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/slider`);
      setCard(data.items);
      console.log("New Data",card)
    };
    getdata();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 1,
    centerMargin: "20px",
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "linear",
    
  };
  return (
    <>
    {
      getlanguage != "english" ? <>
       <Slider {...settings}>
         {
         card.map((item) => {
          return(
            
            <div class="newabc" key={item._id}>
          <img src={item.images[0].url} alt="Nature"/>
          <div class="text-block">
            <h2>{item.title}</h2>
            <p>{item.Description}</p>
           
          </div>
        </div>
        
          )
         })
         }
    </Slider>
      </> : <>
      <Slider {...settings}>
         {
         card.map((item) => {
          return(
            
            <div class="newabc" key={item._id}>
          <img src={item.images[0].url} alt="Nature"/>
          <div class="text-block">
            <h2 className='arabic-align'>{item.titlear}</h2>
            <p>{item.Description}</p>
           
          </div>
        </div>
        
          )
         })
         }
    </Slider>
      </>
    }
  
   
    </>
  )
}

export default Test

