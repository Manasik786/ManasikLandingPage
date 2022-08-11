import React,{useState,useEffect} from "react";
import Slider from "react-slick";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Popup from '../Form/Popup'
import axios from 'axios';
import { Link } from "react-router-dom";
import SimpleBtn from '../Button/SimpleButton'
import Cookies from "universal-cookie";


const Slider1 = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const cookies = new Cookies();
const [getlanguage,setLanguage] = useState(cookies.get("language"));

//test

  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/PackageView`);
      setData(data.data);
      console.log("Response",data.data)
      console.log("Data is",data.data)
    };
    getdata();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    centerMargin: "20px",
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        },
      },
    ],
  };
  return (
    <>
   {
    getlanguage != 'english' ? <>
     <Slider {...settings}>
         {
         data.map((item,i) => {
          return(
            <div class="column1" key={item._id}>
              <div class="card1" >
              <img src={item.images[0].url} className="card-images" />
              <h3>{item.PkgName}</h3>
              <p>
              {item.PkgDetail}
              </p>
              <div className="newpack">
              <Link
                      to={{
                        pathname: `packages/${(item.PkgName)}`,
                        state: {
                          // whatever you need to send with the route transition
                        },
                      }}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                    <SimpleBtn text={"Read more"}/>
                    </Link>
              </div>
            </div>
            {/* <Link to={item.PkgName}>
            
            </Link> */}
          </div>
          )
         })
         }
        </Slider>
    </> : <>
    <Slider {...settings}>
         {
         data.map((item,i) => {
          return(
            <div class="column1" key={item._id}>
              <div class="card1" >
              <img src={item.images[0].url} className="card-images" />
              <h3>{item.PkgNamear}</h3>
              <h6 className="arabic-align">
              {item.PkgDetailar}
              </h6>
              <div className="newpack">
              <Link
                      to={{
                        pathname: `packages/${(item.PkgName)}`,
                        state: {
                          // whatever you need to send with the route transition
                        },
                      }}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                    <SimpleBtn  text={"اقرأ أكثر"}/>
                    </Link>
              </div>
            </div>
            {/* <Link to={item.PkgName}>
            
            </Link> */}
          </div>
          )
         })
         }
        </Slider>
    </>
   }
     
     
      
    </>
  );
};

export default Slider1;
