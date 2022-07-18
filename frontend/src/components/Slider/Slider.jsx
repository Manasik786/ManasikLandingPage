import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import Buttn1 from "../../components/Button";
import HajjImage from "../../assets/images/hajj.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Popup from '../Form/Popup'
import axios from 'axios';
import { Link } from "react-router-dom";


const Slider1 = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
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
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Popup/>
      </Modal>
     
      <Slider {...settings}>
         {
         data.map((item) => {
          return(
            <div class="column1" key={item._id}>
              <div class="card1" >
              <img src={HajjImage} className="card-images" />
              <h3>{item.PkgName}</h3>
              <p>
              {item.PkgDetail}
              </p>
              <div className="newpack">
                <Button variant="primary" className='primarybutton' onClick={handleShow}>
                  <Buttn1 text={"BUY NOW"}/>
                </Button>
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
  );
};

export default Slider1;
