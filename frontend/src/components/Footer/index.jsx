import React, { useState,useEffect } from "react";
import FooterLogo from "../../assets/images/FooterLogo.png";
import Arrow from "../../assets/images/forwardarrowbrown.png";
import BackArrow from "../../assets/images/backwardarrow.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import { Timeline } from 'react-twitter-widgets'
import { Form, Row, Col, Button } from "react-bootstrap";

const Footer = ({}) => {
  const cookies = new Cookies();
  const [getlanguage, setLanguage] = useState(cookies.get("language"));
  const [data, setData] = useState([]);
  const [message, setMessage] = useState({
    Name: "",
    Email: "",
    Message: "",
    Details:" PostMessage Test"
  });

  const PostMessage = async (e) => {
    e.preventDefault();
    try {
        const config = {
            headers: { "Content-Type": "application/json" },
          };
      const response = await axios.post(
        `/api/v1/createContactLead`,message,config
      );
      
     console.log(response)
    } catch (err) {
      const Error = err.response.data;
      console.log(Error.message)
      alert(Error.message)
     
    }
  
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };
  useEffect(() => {
    PostMessage();
  }, []);
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/Contact`);
      setData(data.data);
      console.log("Response", data.data);
      console.log("Data is", data.data);
    };
    getdata();
  }, []);


  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/contactus") return null;


  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="custom-container">
          {getlanguage != "english" ? (
            <>
              <div className="contactus">
                <div className="online-platform">
                  <div className="row g-0 justify-content-start align-items-center">
                    <div className="col-12 col-lg-4 info-details mb-4 mb-lg-0">
                      <div className="row g-0">
                        <div className="col-11 col-xxl-10 col-xl-10 col-lg-10 col-md-11">
                          <h2>
                            If you have any query feel free to contact us...
                          </h2>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7  contactus-form">
                      <div className="row">
                        <div className="col-12">
                        <form >
                            <input
                              type="text"
                              placeholder="Name"
                              name="Name"
                              onChange={(e) => handleChange(e)}
                              required
                            />
                            <input
                              type="email"
                              placeholder="Email"
                              name="Email"
                              onChange={(e) => handleChange(e)}
                              required
                            />
                            <textarea
                              rows={8}
                              placeholder="Message"
                              name="Message"
                              onChange={(e) => handleChange(e)}
                              required
                            />
                            {/* <textarea
                              rows={8}
                              placeholder="Details"
                              name="Detail"
                              onChange={(e) => handleChange(e)}
                              required
                            /> */}
                            <button onClick={PostMessage}>Send</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-5">
                <div className="col-12 col-xxl-12">
                  <div className="row  align-items-center">
                    <div className="col-lg-3 col-md-6 footer-logo"></div>
                  </div>
                  <div className="row  ">
                    <div className="col-lg-3 col-md-6 footer-logo">
                      <div className="row g-0">
                        <div className="col-10 col-xl-8 col-lg-10 ">
                          <img src={FooterLogo}></img>
                          <p>
                          Manasik Aviation is a national Saudi carrier, based in Jeddah, that operates a low-cost flight under the General Authority of civil aviation (GACA).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 footer-links">
                      <div className="row g-5">
                        <div className="col-4">
                        <h4>Address</h4>
                          {
                            data.map((item) => {
                              return(
                                <>
                               
                                <p>
                                 {item.location}
                                </p>
                                <p>{item.phone}</p>
                                <p>{item.email}</p>
                                </>
                              )
                            })
                          }
                        </div>
                        <div className="col-4">
                          <h4>Quick Links</h4>
                          <ul>
                            <li
                              onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <Link to="/ambulance">
                                <a href="#">Air Ambulance</a>
                              </Link>
                            </li>

                            <li
                              onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <Link to="/aboutus">
                                <a href="#">Hotels About</a>
                              </Link>
                            </li>
                            <li
                              onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <Link to="/careers">
                                <a href="#">Careers</a>
                              </Link>
                            </li>
                            <li
                              onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <Link to="/privacy" id="top">
                                <a href="#">Privacy Policy</a>
                              </Link>
                            </li>
                            <li
                              onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <Link to="/term&condition">
                                <a href="#">Term and Condition</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4 footer-links">
                          <h4>Services</h4>
                          <ul>
                            <li
                              onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <Link to="/services" id="top">
                                <a href="#">Services</a>
                              </Link>
                            </li>
                            <li
                              onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <Link to="/services" id="top">
                                <a href="#">Visa Services</a>
                              </Link>
                            </li>
                            <li
                              onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <Link to="/services" id="top">
                                <a href="#">Hotels Services</a>
                              </Link>
                            </li>
                            <li
                              onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <Link to="/services" id="top">
                                <a href="#">Transport Services</a>
                              </Link>
                            </li>
                            <li
                              onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <Link to="/services" id="top">
                                <a href="#">Luggage Services</a>
                              </Link>
                            </li>

                            <li
                              onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              <Link to="/services" id="top">
                                <a href="#">Catering Services</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 footer-links">
                    <Timeline
                      dataSource={{
                        sourceType: 'profile',
                        screenName: 'FlyManasik'
                      }}
                      options={{
                        height: '200',
                        width:'250'
                      }}
                    />
 
                      <div className="socail-icons">
                       <a href=""> <i class="fa-brands fa-facebook-f"></i></a>
                       <a href=""> <i class="fa-brands fa-instagram"></i></a>
                       <a href=""> <i class="fa-brands fa-linkedin-in"></i></a>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="contactus">
                <div className="online-platform">
                  <div className="row g-0 justify-content-start align-items-center">
                    <div className="col-12 col-lg-4 info-details mb-4 mb-lg-0">
                      <div className="row g-0">
                        <div className="col-11 col-xxl-10 col-xl-10 col-lg-10 col-md-11">
                          <h2>
                            إذا كان لديك أي استفسار فلا تتردد في الاتصال بنا
                          </h2>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7  contactus-form">
                      <div className="row">
                        <div className="col-12">
                          <form className="arabicplaceholder">
                            <input type="text" placeholder="اسم" />
                            <input
                              type="email"
                              placeholder="البريد الإلكتروني"
                            />
                            <textarea rows={8} placeholder="رسالة" />
                            <button>إرسال</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-5">
                <div className="col-12 col-xxl-12">
                  <div className="row  align-items-center">
                    <div className="col-lg-3 col-md-6 footer-logo"></div>
                  </div>
                  <div className="row arabicstyle ">
                    <div className="col-lg-3 col-md-6 footer-logo">
                      <div className="row g-0">
                        <div className="col-10 col-xl-8 col-lg-10 ">
                          <img src={FooterLogo}></img>
                          <p>
                          شركة مناسك للطيران شركة وطنية سعودية , مقرها مدينة جدة , تهتم بتشغيل رحلات منخفضة التكلفة تحت إشراف الهيئة العامة للطيران المدني ( GACA) , تأسست عام ميلادي 2021
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 footer-links">
                      <div className="row g-5">
                        
                        <div className="col-4">
                        <h4>تبوك</h4>
                          {
                            data.map((item) => {
                              return(
                                <>
                               
                                <p>
                                 {item.location}
                                </p>
                                <p>{item.phone}</p>
                                <p>{item.email}</p>
                                </>
                              )
                            })
                          }
                        </div>
                        <div className="col-4">
                          <h4>روابط سريعة</h4>
                          <ul>
                            <li>
                              <a href="#">الإسعاف الجوي</a>
                            </li>
                            <li>
                              <a href="#">الحزم</a>
                            </li>
                            <li>
                              <a href="#">الفنادق حول</a>
                            </li>
                            <li>
                              <a href="#">وظائف الولايات المتحدة</a>
                            </li>
                            <li>
                              <Link to="/privacy">
                                <a href="#">سياسة الخصوصية</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4 footer-links">
                          <h4>خدمات</h4>
                          <ul>
                            <li>
                              <a href="#">خدمات</a>
                            </li>
                            <li>
                              <a href="#">خدمات التأشيرات</a>
                            </li>
                            <li>
                              <a href="#">خدمات الفنادق</a>
                            </li>
                            <li>
                              <a href="#">خدمات النقل</a>
                            </li>
                            <li>
                              <a href="#">خدمات الأمتعة</a>
                            </li>
                            <li>
                              <a href="#">خدمات المطاعم</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 footer-links">
                      <h4>Newsletter</h4>
                      <form action="" method="post">
                        <div className="applynow">
                          <img src={BackArrow} className="backarrowbutton" />
                          <input
                            placeholder="البريد الإلكتروني"
                            type="email"
                            name="email"
                          />
                        </div>
                      </form>
                      <div className="socail-icons">
                      <a href=""> <i class="fa-brands fa-facebook-f"></i></a>
                       <a href=""> <i class="fa-brands fa-instagram"></i></a>
                       <a href=""> <i class="fa-brands fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
