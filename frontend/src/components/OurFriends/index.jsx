import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/images/Layer 9.png';
import img2 from '../../assets/images/Layer 10.png';
import img3 from '../../assets/images/Layer 11.png';


const CustomCard = ({ imgSrc }) => <div><img src={imgSrc} width={150} ></img></div>
const OurFriends = () => {
    const ourFriendsData = [{ image: img1 }, { image: img2 }, { image: img3 }, { image: img2 }, { image: img1 }]
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <div className='ourfriends'>
            <h2>Our Friends</h2>
            <Slider {...settings}>
                {ourFriendsData.map((slide, index) => {
                    return (
                        <div className='d-flex justify-content-center align-content-center' key={index}>
                            <CustomCard imgSrc={slide.image} />
                            {/* <img src={slide.img} alt={`slide${index}`} /> */}
                        </div>
                    );
                })}
            </Slider>
        </div>
    )
}

export default OurFriends