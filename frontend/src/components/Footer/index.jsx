import React, { useState,useEffect } from "react";
import FooterLogo from "../../assets/images/FooterLogo.png";
import Arrow from "../../assets/images/forwardarrowbrown.png";
import BackArrow from "../../assets/images/backwardarrow.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";


const Footer = ({}) => {
  const cookies = new Cookies();
  const [getlanguage, setLanguage] = useState(cookies.get("language"));
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nemo ex qui saepe magni voluptatibus aliquid
                            dignissimos.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 footer-links">
                      <div className="row g-5">
                        <div className="col-4">
                          <h4>Address</h4>
                          <p>
                            DieSachbearbeiter Schonhauser Allee 167c, 10435
                            Berlin Germany
                          </p>
                          <p>0123456789</p>
                          <p>moin@blindtratorde</p>
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
                      <h4>Newsletter</h4>
                      <form action="" method="post">
                        <div className="applynow">
                          <input
                            placeholder="Email"
                            type="email"
                            name="email"
                          />
                          <img src={Arrow} />
                        </div>
                      </form>
                      <div className="socail-icons">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
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
                            تستخدم السعودية ملفات تعريف الارتباط الضرورية لتخصيص
                            المحتوى والإعلانات ، ولتوفير ميزات وسائل التواصل
                            الاجتماعي ، ولتحليل حركة المرور لدينا..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 footer-links">
                      <div className="row g-5">
                        <div className="col-4">
                          <h4>تبوك</h4>
                          <p>
                            ديساشبيربيتر شونهاوزر ألي 167c، 10435 برلين ألمانيا
                          </p>
                          <p>0123456789</p>
                          <p>moin@blindtratorde</p>
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
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
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
