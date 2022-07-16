import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { useLocation } from "react-router-dom";
import img1 from "../assets/images/gallery.png";
import Buttn1 from "../components/Button/index";
import img2 from "../assets/images/Yanbu.jpg";
import ArabicButton from "../components/Button/Arabic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from "../components/Form/Popup";
import axios from "axios";

const Packages = () => {
  const cookies = new Cookies();
  const [getlanguage, setLanguage] = useState(cookies.get("language"));
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/PackageView`);
      setData(data.data);
      console.log("Response", data.data);
      console.log("Data is", data.data);
    };
    getdata();
  }, []);
console.log("My Path",pathname)
  if (pathname === "/packages/1")
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Popup />
        </Modal>
        <div className="contact-banner">
          {getlanguage != "english" ? (
            <>
              <div className="banner-content">
                <h1>Umrah Package</h1>
                <p>Manasik aviation is basically airline</p>
                <p>and does business of airline</p>
              </div>
            </>
          ) : (
            <>
              <div className="banner-content arabic-banner">
                <h1> حزم الحج</h1>
                <p>ماناسيك للطيران هي في الأساس شركة طيران</p>
                <p>ويقوم بأعمال الطيران</p>
              </div>
            </>
          )}
        </div>
        <div className="gap"></div>
        {getlanguage != "english" ? (
          <>
            <div className="packagesdetails">
              <div className="packagesdetails_image">
                <img src={img1} />
              </div>
              {data.map((item) => {
                return (
                  <div className="packagesdetails_content">
                    <h2>{item.PkgName} </h2>
                   {item.PkgDetail}
                    <div className="packagesdetails_include">
                      <p>Hotel Include</p>
                      <p>{item.DaysOfstay}</p>
                      <p>Valid till 25th May,2022</p>
                    </div>
                    <Button
                      variant="primary"
                      className="primarybutton"
                      onClick={handleShow}
                    >
                      <Buttn1 text={"APPLY NOW"} />
                    </Button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="packagesdetails">
              <div className="packagesdetails_image">
                <img src={img1} />
              </div>
              <div className="packagesdetails_content">
                <h2 className="arabic-align">حزم الحج</h2>
                <p className="arabic-align">
                  الحج والعمرة من أقدس الواجبات الروحية التي يؤديها المسلمون من
                  جميع أنحاء العالم. نحن في شركة المناسك للطيران لدينا حل كامل
                  لجميع الحجاج في جميع أنحاء العالم من خلال تزويدهم بأكثر
                  الباقات بأسعار معقولة وفخمة للحج والعمرة.
                </p>
                <div className="packagesdetails_include">
                  <p className="arabic-align">يشمل الفندق</p>
                  <p className="arabic-align">باقة 15 يوم</p>
                  <p className="arabic-align">صالح حتى 25 مايو 2022</p>
                </div>
                <ArabicButton className={"mt-4"} text="قدم الآن" />
              </div>
            </div>
          </>
        )}
      </>
    );
  if (pathname === "/packages/2")
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Popup />
        </Modal>
        <div className="contact-banner">
          {getlanguage != "english" ? (
            <>
              <div className="banner-content">
                <h1>Hajj Package</h1>
                <p>Manasik aviation is basically airline</p>
                <p>and does business of airline</p>
              </div>
            </>
          ) : (
            <>
              <div className="banner-content arabic-banner">
                <h1> حزم الحج</h1>
                <p>ماناسيك للطيران هي في الأساس شركة طيران</p>
                <p>ويقوم بأعمال الطيران</p>
              </div>
            </>
          )}
        </div>
        <div className="gap"></div>
        {getlanguage != "english" ? (
          <>
            <div className="packagesdetails">
              <div className="packagesdetails_image">
                <img src={img1} />
              </div>
              <div className="packagesdetails_content">
                <h2>Hajj Packages</h2>
                <p>
                  Hajj and Umrah are most sacred spiritual obligations performed
                  by Muslims from around the world. We at Manasik Aviation have
                  a complete solution for the all pilgrims through the world by
                  providing them the most affordable and luxurious packages for
                  Hajj and Umrah.
                </p>
                <div className="packagesdetails_include">
                  <p>Hotel Include</p>
                  <p>15 Days Package</p>
                  <p>Valid till 25th May,2022</p>
                </div>
                <Button
                  variant="primary"
                  className="primarybutton"
                  onClick={handleShow}
                >
                  <Buttn1 text={"APPLY NOW"} />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="packagesdetails">
              <div className="packagesdetails_image">
                <img src={img1} />
              </div>
              <div className="packagesdetails_content">
                <h2 className="arabic-align">حزم الحج</h2>
                <p className="arabic-align">
                  الحج والعمرة من أقدس الواجبات الروحية التي يؤديها المسلمون من
                  جميع أنحاء العالم. نحن في شركة المناسك للطيران لدينا حل كامل
                  لجميع الحجاج في جميع أنحاء العالم من خلال تزويدهم بأكثر
                  الباقات بأسعار معقولة وفخمة للحج والعمرة.
                </p>
                <div className="packagesdetails_include">
                  <p className="arabic-align">يشمل الفندق</p>
                  <p className="arabic-align">باقة 15 يوم</p>
                  <p className="arabic-align">صالح حتى 25 مايو 2022</p>
                </div>
                <ArabicButton className={"mt-4"} text="قدم الآن" />
              </div>
            </div>
          </>
        )}
      </>
    );
  if (pathname === "/packages/3")
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Popup />
        </Modal>
        <div className="contact-banner">
          {getlanguage != "english" ? (
            <>
              <div className="banner-content">
                <h1>Holiday Package</h1>
                <p>Manasik aviation is basically airline</p>
                <p>and does business of airline</p>
              </div>
            </>
          ) : (
            <>
              <div className="banner-content arabic-banner">
                <h1> حزم الحج</h1>
                <p>ماناسيك للطيران هي في الأساس شركة طيران</p>
                <p>ويقوم بأعمال الطيران</p>
              </div>
            </>
          )}
        </div>
        <div className="gap"></div>
        {getlanguage != "english" ? (
          <>
            <div className="packagesdetails">
              <div className="packagesdetails_image">
                <img src={img2} />
              </div>
              <div className="packagesdetails_content">
                <h2>Holiday Packages</h2>
                <p>
                  Holiday Packages are most sacred spiritual obligations
                  performed by Muslims from around the world. We at Manasik
                  Aviation have a complete solution for the all pilgrims through
                  the world by providing them the most affordable and luxurious
                  packages for Hajj and Umrah.
                </p>
                <div className="packagesdetails_include">
                  <p>Hotel Include</p>
                  <p>15 Days Package</p>
                  <p>Valid till 25th May,2022</p>
                </div>
                <Button
                  variant="primary"
                  className="primarybutton"
                  onClick={handleShow}
                >
                  <Buttn1 text={"APPLY NOW"} />
                </Button>
              </div>
              <div className="packagesdetails_content">
                <h2>Holiday Packages</h2>
                <p>
                  Holiday Packages are most sacred spiritual obligations
                  performed by Muslims from around the world. We at Manasik
                  Aviation have a complete solution for the all pilgrims through
                  the world by providing them the most affordable and luxurious
                  packages for Hajj and Umrah.
                </p>
                <div className="packagesdetails_include">
                  <p>Without Hotel</p>
                  <p>30 Days Package</p>
                  <p>Valid till 15th June,2022</p>
                </div>
                <Button
                  variant="primary"
                  className="primarybutton"
                  onClick={handleShow}
                >
                  <Buttn1 text={"APPLY NOW"} />
                </Button>
              </div>
              <div className="packagesdetails_content">
                <h2>Holiday Packages</h2>
                <p>
                  Holiday Packages are most sacred spiritual obligations
                  performed by Muslims from around the world. We at Manasik
                  Aviation have a complete solution for the all pilgrims through
                  the world by providing them the most affordable and luxurious
                  packages for Hajj and Umrah.
                </p>
                <div className="packagesdetails_include">
                  <p>Hotel Include</p>
                  <p>10 Days Package</p>
                  <p>Valid till 04 May,2022</p>
                </div>
                <Button
                  variant="primary"
                  className="primarybutton"
                  onClick={handleShow}
                >
                  <Buttn1 text={"APPLY NOW"} />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="packagesdetails">
              <div className="packagesdetails_image">
                <img src={img2} />
              </div>
              <div className="packagesdetails_content">
                <h2 className="arabic-align">حزم الحج</h2>
                <p className="arabic-align">
                  الحج والعمرة من أقدس الواجبات الروحية التي يؤديها المسلمون من
                  جميع أنحاء العالم. نحن في شركة المناسك للطيران لدينا حل كامل
                  لجميع الحجاج في جميع أنحاء العالم من خلال تزويدهم بأكثر
                  الباقات بأسعار معقولة وفخمة للحج والعمرة.
                </p>
                <div className="packagesdetails_include">
                  <p className="arabic-align">يشمل الفندق</p>
                  <p className="arabic-align">باقة 15 يوم</p>
                  <p className="arabic-align">صالح حتى 25 مايو 2022</p>
                </div>
                <ArabicButton className={"mt-4"} text="قدم الآن" />
              </div>
            </div>
          </>
        )}
      </>
    );
  return(
    <>
      {
       data.map((item) => { 
        return(
          <p>
            {item.PkgName}
          </p>
        )  
      })
      }
    </>
  )
};

export default Packages;
