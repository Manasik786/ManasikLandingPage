import React, { useEffect, useState } from "react";
import Buttn1 from "../Button/index";
import Buttn2 from "../Button/Arabic";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BackArrow from '../Button/Arabic';
import { Form, Row, Col, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

// import Slider from "react-slick";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Modal from "react-bootstrap/Modal";
import Popup from "../Form/Popup";
import axios from 'axios';
import { useLocation } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import { Country_Name, Country_NameAr } from '../../dummydata/category';

const Services = (props) => {
  const cookies = new Cookies();
  const [getlanguage, setLanguage] = useState(cookies.get("language"));
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const [verfied, setVerifed] = useState(false);

  const ServiceName = window.localStorage.getItem('id',);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function onChangeCaptcha(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  let str = pathname;
  str = str.substring(16);
  let newpath = str.replace(/([A-Z])/g, ' $1').trim();
  const [mydata, setMyData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/CardItems`);
      setMyData(data.data);

    };
    getdata();
  }, []);
  const Service = async id => {

    const { data } = await axios.get('/api/v1/CardItems');
    console.log(data.data[0]._id);
    for (let i = 0; i < data.data.length; i++) {
      console.log(data.data[i]);
      if (id == data.data[i]._id) {
        console.log(data.data[i]);
        await window.localStorage.setItem("D", JSON.stringify(data.data[i]));
      }

    }
  };
  const [upload, setupload] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [Name, setName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [country, setcountry] = useState(" ");
  const [Phone, setPhone] = useState("");
  const [DOB, setDOB] = useState(" ");
  const [familyname, setfamilyname] = useState(" ");
  const [passportno, setpassportno] = useState(" ");
  const [nationalid, setnationalid] = useState(" ");
  const [StayPeriod, setStayPeriod] = useState(" ");
  const [Visitedbefore, setVisitedbefore] = useState(" ");
  const [relativecontact, setrelativecontact] = useState(" ");
  const [Reasontovisitksa, setReasontovisitksa] = useState(" ");
  const [Religion, setReligion] = useState(" ");
  const [Servicetype, SetservicesType] = useState(ServiceName);
  const [CardType, setCardType] = useState('service');
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    Servicetype: ServiceName,
    CardType: "service",
    Name: Name,
    familyname: familyname,
    DOB: DOB,
    Email: Email,
    country: country,
    Phone: Phone,
    passportno: passportno,
    nationalid: nationalid,
    StayPeriod: StayPeriod,
    Visitedbefore: Visitedbefore,
    relativecontact: relativecontact,
    Reasontovisitksa: Reasontovisitksa,
    Religion: Religion,
    upload: " ",

  });
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log(data);
  };
  useEffect(() => { }, []);
  const createProductSubmitHandler = async (e) => {
    e.preventDefault();
    setName(Name);
    setEmail(Email);
    setPhone(Phone);
    setDOB(DOB);
    setfamilyname(familyname);
    setpassportno(passportno);
    setnationalid(nationalid);
    setStayPeriod(StayPeriod);
    setVisitedbefore(Visitedbefore);
    setReasontovisitksa(Reasontovisitksa);
    setReligion(Religion);
    setcountry(country);
    SetservicesType(Servicetype);
    setCardType('service');

    const myForm = new FormData();
    myForm.append("Servicetype", ServiceName);
    myForm.append("Name", data.Name);
    myForm.append("Email", data.Email);
    myForm.append("Phone", data.Phone);
    myForm.append("familyname", data.familyname);
    myForm.append("DOB", data.DOB);
    myForm.append("country", data.country);
    myForm.append("passportno", data.passportno);
    myForm.append("nationalid", data.nationalid);
    myForm.append("StayPeriod", data.StayPeriod);
    myForm.append("Visitedbefore", data.Visitedbefore);
    myForm.append("relativecontact", data.relativecontact);
    myForm.append("Reasontovisitksa", data.Reasontovisitksa);
    myForm.append("Religion", data.Religion);
    myForm.append("CardType", 'service');


    // myForm.append("images", data.images);

    upload.forEach((image) => {
      myForm.append("upload", image);
    });

    try {

      setLoading(true);
      const response = await axios.post(`/api/v1/createBookingForm`, myForm);
      console.log(response);
      console.log(myForm);
      toast("Submitted");
      setLoading(false);
      handleClose();

    } catch (err) {
      console.log(err);
      const Error = err.response.data;
      toast(Error.message);
    }

  };
  
  const createServiceImagesChange = (e) => {
    
    const files = Array.from(e.target.files);

    setupload([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setupload((old) => [...old, reader.result]);
        }
      };
      console.log(file);
      reader.readAsDataURL(file);
    });
  };
  function HandleImage(){
    toast("Enter Valid Image")
  }
  return (
    <>

      <section className="hotel-services">
        <div className="destination-main">

          <div className="custom-container" >
            {
              getlanguage != 'english' ? <>
                <>
                  {
                    //  data.slice(0,8).map((item,i) => {
                    mydata.slice(0, 12).map((item, i) => {
                      return (

                        (item.CardType) === 'service' ? <>
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <h2 className='applyfromclass '>{ServiceName}</h2>
                            </Modal.Header>
                            <div className="popup1">
                              <Form className="popupform">
                                <Row className="mb-3">
                                  <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="text" placeholder="Name"
                                      name="Name"
                                        required
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="text" placeholder="Family Name"
                                      name="familyname"
                                      required
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col} controlId="formGridEmail">
                                    <div className="filetostyle">
                                      <label for="img1" className="label11">DOB  </label>
                                      <Form.Control type="date"
                                        required
                                        name="DOB"
                                        onChange={(e) => handleChange(e)}
                                      />

                                    </div>
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridEmail">

                                    <Form.Control type="email" placeholder="Email"
                                      name="Email"
                                      required
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col} controlId="formGridEmail">
                                    <select class="form-control" id="exampleFormControlSelect1"
                                      onChange={(e) => handleChange(e)}
                                      required
                                      name="country"
                                    >
                                      {
                                        Country_Name.map((item) => {
                                          return (
                                            <option key={item.country_id}
                                              name="country"
                                              value={item.country_name}
                                            >{item.country_name}</option>
                                          );
                                        })
                                      }
                                    </select>

                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridName">

                                    <Form.Control type="number" placeholder="Mobile"
                                      name="Phone"
                                      required
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col} controlId="formGridEmail">

                                    <Form.Control type="text" placeholder="Passport Number"
                                      name="passportno"
                                      required
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridName">

                                    <Form.Control type="number" placeholder=" National ID#"
                                      name="nationalid"
                                      required
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col} controlId="formGridEmail">
                                    <div className="filetostyle">
                                      <Form.Control type="file" placeholder="Upload Document"
                                        name="upload"
                                        id="imgid"
                                        required
                                        accept="image/*"
                                        onChange={createServiceImagesChange}
                                        multiple
                                      />
                                      <label for="upload1" className="label11">Profile</label>
                                    </div>
                                  </Form.Group>
                                  <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="number" placeholder="Stay Period (Number of Days)"
                                      name="StayPeriod"
                                      required
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control placeholder="Religion"
                                      name="Religion"
                                      required
                                      onChange={(e) => handleChange(e)}
                                    />

                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridName">

                                    <Form.Control type="number" placeholder="Relative contact in KSA"
                                      name="relativecontact"
                                      required
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress2">

                                  <fieldset>
                                    <legend>Have you visited KSA before?</legend>
                                    <div className="radiobtnform">
                                      <label className="labeltext">
                                        <input type="radio"
                                          name="Visitedbefore"
                                          value="1"
                                          className="textbtn2"
                                          onChange={handleChange}
                                        />
                                        <span className="yestext">Yes</span>
                                      </label>

                                      <label className="labeltext">
                                        <input type="radio"
                                          name="Visitedbefore"
                                          className="textbtn2"
                                          value="0"
                                          onChange={handleChange}
                                        />
                                        <span className="yestext">No</span>
                                      </label>
                                    </div>
                                  </fieldset>
                                </Form.Group>
                                <Form.Group className="mb-13 " controlId="formGridAddress1">
                                  <Form.Control placeholder="Reason to visit Saudi Arabia" className="largetextreason"
                                    name="Reasontovisitksa"
                                    required
                                    onChange={(e) => handleChange(e)}
                                  />
                                </Form.Group>
                                <ReCAPTCHA
          sitekey="6LcsUUMhAAAAAF7iAdtMh4Qs9DtxMT-KNjsovGCM"
          onChange={onChangeCaptcha}
          className="captchaclass"
        />
                                {
                                  upload == '' || upload == undefined ? <>
                                  <button className="btnsubmit" onClick={HandleImage}
                                  disabled={!verfied}
                                  >
                                  Submit
                                </button>
                                  </> : <>
                                  <button className="btnsubmit" onClick={createProductSubmitHandler}
                                  disabled={!verfied}
                                  >
                                  Submit
                                </button>
                                  </>
                                }
                                
                              </Form>
                            </div>
                          </Modal>
                          <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center mappingstylehome" key={item._id}>
                            <div className="image-section d-md-flex col-0 col-md-6 col-xxl-5">
                              <div className="row g-0 flex-column justify-content-center align-items-center align-content-center cardimg">
                                <img src={item.images[0].url} />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xxl-5 z-index cardtext1">
                              <div className="row g-0">
                                <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 ">
                                  <h3 className="servicespage1">{item.CardTitle}</h3>
                                  <br />
                                  <p>
                                    {item.CardDescriptions}
                                  </p>

                                  <br />
                                  <span
                                    onClick={() => {
                                      window.localStorage.setItem('id', (item.CardTitle));
                                    }}
                                  >
                                    <Button
                                      variant="primary"
                                      className="primarybutton"
                                      onClick={handleShow}

                                    >
                                      <Buttn1
                                        text={"BOOK NOW"} />
                                    </Button>
                                  </span>

                                </div>
                              </div>
                            </div>
                          </div>
                        </> : <></>


                      );
                    })
                  }
                </>
              </> :
                <>
                  {
                    //  data.slice(0,8).map((item,i) => {
                    mydata.slice(0, 12).map((item, i) => {
                      return (

                        (item.CardType) === 'service' ? <>
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <h2 className='applyfromclass '>خدمات</h2>
                            </Modal.Header>
                            <div className="popup1">
                              <Form className="popupform">
                                <Row className="mb-3">
                                  <Form.Group as={Col} controlId="formGridName" className="arabic-align">
                                    <Form.Control type="text" placeholder="اسم"
                                      name="Name"
                                      className="arabic-align"
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="text" placeholder="اسم العائلة"
                                      name="familyname"
                                      className="arabic-align"
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col} controlId="formGridEmail">
                                    <div className="filetostyle">
                                      <Form.Control type="date" placeholder="تاريخ الولادة"
                                        name="DOB"
                                        className="arabic-align"
                                        onChange={(e) => handleChange(e)}
                                      />
                                      <label for="img1" className="label11 arabic-align">تاريخ الولادة</label>
                                    </div>

                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridEmail">

                                    <Form.Control type="text" placeholder="البريد الإلكتروني"
                                      name="Email"
                                      className="arabic-align"
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col} controlId="formGridEmail">

                                    <select class="form-control" id="exampleFormControlSelect1"
                                      onChange={(e) => handleChange(e)}
                                      name="country"
                                    >
                                      {
                                        Country_NameAr.map((item) => {
                                          return (
                                            <option key={item.code}
                                              name="country"
                                              className="arabic-align"

                                            >{item.name}</option>
                                          );
                                        })
                                      }
                                    </select>

                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridName">

                                    <Form.Control type="number" placeholder="هاتف"
                                      name="Phone"
                                      className="arabic-align"
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col} controlId="formGridEmail">

                                    <Form.Control type="text" placeholder="رقم جواز السفر"
                                      name="passportno"
                                      className="arabic-align"
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridName">

                                    <Form.Control type="number" placeholder=" الهوية الوطنية#"
                                      name="nationalid"
                                      className="arabic-align"
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col} controlId="formGridEmail">

                                    <Form.Control type="text" placeholder="تحميل المستند"
                                      name="upload"
                                      className="arabic-align"
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridName">

                                    <Form.Control type="text" placeholder="فترة الإقامة (عدد الأيام)"
                                      name="StayPeriod"
                                      className="arabic-align"
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control placeholder="دِين"
                                      name="Religion"
                                      className="arabic-align"
                                      onChange={(e) => handleChange(e)}
                                    />

                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridName" >

                                    <Form.Control type="number" placeholder="الاتصال النسبي في المملكة العربية السعودية"
                                      name="relativecontact"
                                      className="arabic-align"
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </Form.Group>
                                </Row>

                                <Form.Group className="mb-3 " controlId="formGridAddress2">
                                  <fieldset>
                                    <div className="radiobtnform">
                                      <label className="labeltext">
                                        <input type="radio"
                                          name="Visitedbefore"
                                          value="1"
                                          className="textbtn2"
                                          onChange={handleChange}
                                        />
                                        <span className="yestext">نعم</span>
                                      </label>

                                      <label className="labeltext">
                                        <input type="radio"
                                          name="Visitedbefore"
                                          className="textbtn2"
                                          value="0"
                                          onChange={handleChange}
                                        />
                                        <span className="yestext">رقم</span>
                                      </label>
                                    </div>

                                    <legend className="arabic-align">هل زرت المملكة العربية السعودية من قبل؟</legend>
                                  </fieldset>
                                </Form.Group>
                                <Form.Group className="mb-13 " controlId="formGridAddress1">
                                  <Form.Control placeholder="سبب زيارة المملكة العربية السعودية" className="largetextreason arabic-align"
                                    name="Reasontovisitksa"
                                    val
                                    onChange={(e) => handleChange(e)}
                                  />
                                </Form.Group>
                                <ReCAPTCHA
          sitekey="6LcsUUMhAAAAAF7iAdtMh4Qs9DtxMT-KNjsovGCM"
          onChange={onChangeCaptcha}
          className="captchaclass"
        />
                               {
                          upload == '' || upload == undefined? <>
                           <button
                          className="btnsubmit"
                          disabled={!verfied}
                          onClick={HandleImage}
                        >
                          يُقدِّم
                        </button>
                          </> : <>
                           <button
                          className="btnsubmit"
                          onClick={createProductSubmitHandler}
                        >
                          يُقدِّم
                        </button>
                          </>
                        }
                              </Form>
                            </div>
                          </Modal>
                          <div className="row g-0 g-lg-4 g-xxl-4 justify-content-center align-items-center mappingstylehome " key={item._id}>
                            <div className="image-section d-md-flex col-0 col-md-6 col-xxl-5">
                              <div className="row g-0 flex-column justify-content-center align-items-center align-content-center cardimg">
                                <img src={item.images[0].url} />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xxl-5 z-index cardtext1">
                              <div className="row g-0">
                                <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11 ">
                                  <h3 className="servicespage1 arabic-align">{item.CardTitlear}</h3>
                                  <br />
                                  <h6 className="arabic-align">
                                    {item.CardDescriptionsar}
                                  </h6>

                                  <br />

                                  <span
                                    onClick={() => {
                                      window.localStorage.setItem('id', (item.CardTitle));
                                    }}
                                  >
                                    <Button
                                      variant="primary"
                                      className="primarybutton"
                                      onClick={handleShow}

                                    >
                                      <Buttn2 text={"احجز الآن"} />
                                    </Button>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </> : <></>


                      );
                    })
                  }
                </>

            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;