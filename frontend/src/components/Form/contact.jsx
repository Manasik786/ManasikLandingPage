import React, { useState, useEffect } from "react";
import { GoLocation } from "react-icons/go";
import Cookies from "universal-cookie";
import Img1 from "../../assets/images/message.png";
import Img2 from "../../assets/images/location.png";
import Img3 from "../../assets/images/phone.png";
import axios from "axios";


const Contact = () => {
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
      alert("Message Post Successfully")
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

  return (
    <footer className="footer1">
      <div className="footer-top">
        <div className="custom-container custom-container1">
          <div className="contactus">
            {getlanguage != "english" ? (
              <>
                <div className="online-platform">
                  <div className="row g-0 justify-content-start align-items-center">
                    <div className="col-12 col-lg-4 info-details mb-4 mb-lg-0">
                      {data.map((item, i) => {
                        return (
                          <div className="row g-0">
                            <div className="col-11 col-xxl-10 col-xl-10 col-lg-10 col-md-11">
                              <div className="contact-icon">
                                {" "}
                                <img src={Img2} />
                                <span className="contacttext1">
                                  <span>{item.location}</span>
                                </span>
                                <br />
                              </div>
                              <div className="contact-icon">
                                <img src={Img3} />
                                <span className="contacttext1">
                                  <span>{item.phone}</span>
                                </span>
                                <br />
                              </div>
                              <div className="contact-icon">
                                <img src={Img1} />
                                <span className="contacttext1">
                                  <span>{item.email}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="col-12 col-lg-7  contactus-form">
                      <div className="row">
                        <div className="col-12">
                          <form>
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
              </>
            ) : (
              <>
                <div className="online-platform ">
                  <div className="row g-0 justify-content-start align-items-center cardarabic">
                    <div className="col-12 col-lg-4 info-details mb-4 mb-lg-0">
                      <div className="row g-0 ">
                        <div className="col-11 col-xxl-10 col-xl-10 col-lg-10 col-md-11 ">
                          <div className="contact-icon arabic0">
                            {" "}
                            <img src={Img2} />
                            <span className="contacttext1">
                              <span>السعودية</span>
                              <br />
                              <span className="contacttext1">العربية</span>
                            </span>
                            <br />
                          </div>
                          <div className="contact-icon arabic0">
                            <img src={Img3} />
                            <span className="contacttext1">
                              <span>0122259999</span>
                              <br />
                              <span className="contacttext1">
                                00966122259999
                              </span>
                            </span>
                            <br />
                          </div>
                          <div className="contact-icon arabic0">
                            <img src={Img1} />
                            <span className="contacttext1">
                              <span>customer@manasikaviation.com</span>
                              <br />
                              <span className="contacttext1">
                                info@manasikaviation.com
                              </span>
                            </span>
                          </div>
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
                            <textarea rows={8} placeholder="دِين" />
                            <button>يُقدِّم</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;