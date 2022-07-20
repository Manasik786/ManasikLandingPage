import React,{useState,useEffect} from 'react'
import axios from 'axios';
import img1 from '../assets/images/gallery.png'
import Slider from "react-slick";

const Test = () => {
  const [card, setCard] = useState([]);
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
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    centerMargin: "20px",
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
  };
  return (
    <>
    
   <Slider {...settings}>
         {
         card.map((item) => {
          return(
            
            <div class="newabc" key={item._id}>
          <img src={item.images[0].url} alt="Nature"/>
          <div class="text-block">
            <h1>{item.titleEnglish}</h1>
            <p>{item.titleArabic}</p>
          </div>
        </div>
        
          )
         })
         }
    </Slider>
   
    </>
  )
}

export default Test

