import React, { useState,useEffect } from "react";
import airlineIcon from "../../assets/images/airplane.png";
import airline2Icon from "../../assets/images/airplane_2.png";
import userIcon from "../../assets/images/user.png";
import calenderIcon from "../../assets/images/calender.png";
import arrowIcon from "../../assets/images/arrow.png";
import Cookies from "universal-cookie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Row, Col } from "react-bootstrap";
import axios from "axios";
// import Capcha from '../../pages/Translator'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";

const Search = () => {
  const cookies = new Cookies();

  const [getlanguage, setLanguage] = useState(cookies.get("language"));
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [verfied, setVerifed] = useState(false);

  const [data,setData] = useState({
    Name:"",
    DestinationTo:"",
    DestinationFrom: "",
    NumberOfPasseneger:"",
    familyname:"",
    Phone:"",
    Notes:"",
    Date:"",
    nationalid:"",
    HotelService:"",
    VisaService:"",
    TransportationService:"",
    CateringService: "",
  })
//   const [images, setImages] = useState([]);
useEffect(() => {
  PostForm();
}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const handleChangeUserName =(e) => {
    if(e.target.value > 0){
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    }
    else{
      toast("Passeneger should greater then 0")
    }
   
 }

  function MyFunction(){
    toast("Please Fill the Field")
  }
  const PostForm = async (e) => {
    e.preventDefault();
    try {
        const config = {
            headers: { "Content-Type": "application/json" },
          };
      const response = await axios.post(
        `/api/v1/createAirCraftService`,data,config
      );
    toast("Submitted");
    handleClose();
    } catch (err) {
      const Error = err.response.data;
      toast(Error.message)
     
    }

  console.log(data)

 
  }
  function onChangeCaptcha(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <>
    
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      
        </Modal.Header>
        {
       getlanguage != 'english'? <>
        <div className="popup1">
        <Form className="popupform" onSubmit={PostForm}  disabled={!verfied}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">     
              <Form.Control type="text" placeholder="Name" 
              name="Name"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="email" placeholder="Email" 
              name="Email"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">     
              <Form.Control type="text" placeholder="Family Name" 
              name="familyname"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="number" placeholder="Phone" 
              name="Phone"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="number" placeholder="National Id" 
              name="nationalid"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>Hotel Service Needed?</legend>
              <div className="radiobtnform">
              <label className="labeltext">
          <input type="radio"
          required
          name="HotelService"
          value="1"
          className="textbtn2"
          onChange={handleChange}
          />
          <span className="yestext">Yes</span>
        </label>

        <label className="labeltext">
          <input type="radio"
          name="HotelService"
          className="textbtn2"
          value="0"
          required
          onChange={handleChange}
          />
          <span className="yestext">No</span>
        </label>
              </div>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>Visa Service Needed?</legend>
              <div className="radiobtnform">
              <label className="labeltext">
          <input type="radio"
          required
          name="VisaService"
          value="1"
          className="textbtn2"
          onChange={handleChange}
          />
          <span className="yestext">Yes</span>
        </label>

        <label className="labeltext">
          <input type="radio"
          name="VisaService"
          required
          className="textbtn2"
          value="0"
          onChange={handleChange}
          />
          <span className="yestext">No</span>
        </label>
              </div>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>Catering Service Needed?</legend>
              <div className="radiobtnform">
              <label className="labeltext">
          <input type="radio"
          required
          name="CateringService"
          value="1"
          className="textbtn2"
          onChange={handleChange}
          />
          <span className="yestext">Yes</span>
        </label>

        <label className="labeltext">
          <input type="radio"
          name="CateringService"
          className="textbtn2"
          value="0"
          required
          onChange={handleChange}
          />
          <span className="yestext">No</span>
        </label>
              </div>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>Transporttation Service Needed?</legend>
              <div className="radiobtnform">
              <label className="labeltext">
          <input type="radio"
          name="TransportationService"
          required
          value="1"
          className="textbtn2"
          onChange={handleChange}
          />
          <span className="yestext">Yes</span>
        </label>

        <label className="labeltext">
          <input type="radio"
          name="TransportationService"
          className="textbtn2"
          required
          value="0"
          onChange={handleChange}
          />
          <span className="yestext">No</span>
        </label>
              </div>
          </fieldset>
          </Form.Group>
          <Form.Group className="mb-13 " controlId="formGridAddress1">
            <Form.Control placeholder="Note" className="largetextreason" 
             name="Notes"
             required
             onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <ReCAPTCHA
          sitekey="6LcsUUMhAAAAAF7iAdtMh4Qs9DtxMT-KNjsovGCM         "
          onChange={onChangeCaptcha}
          className="captchaclass"
        />
          <button
                          className="btnsubmit"
                         
                          disabled={!verfied}
                        >
                          Submit
                        </button>
        </Form>
      </div>
       </> : <>
       <div className="popup1">
        <Form className="popupform" onSubmit={PostForm}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">     
              <Form.Control type="text" placeholder="اسم"
              className="arabic-align"
              name="Name"
              onChange={(e) => handleChange(e)}

              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="text" placeholder="البريد الإلكتروني" 
              name="Email"
              className="arabic-align"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">     
              <Form.Control type="text" placeholder="اسم العائلة" 
              name="familyname"
              className="arabic-align"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="number" placeholder="هاتف" 
              name="Phone"
              className="arabic-align"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="number" placeholder="الهوية الوطنية" 
              name="nationalid"
              className="arabic-align"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
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
              <legend  className="arabic-align">تحتاج خدمة الفندق؟</legend>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
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
              <legend  className="arabic-align">هل تحتاج إلى خدمة التأشيرة؟</legend>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
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
              <legend  className="arabic-align">مطلوب خدمة تقديم الطعام؟</legend>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
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
               <legend  className="arabic-align">خدمة النقل بحاجة؟</legend>
          </fieldset>
          </Form.Group>
          <Form.Group className="mb-13 " controlId="formGridAddress1">
            <Form.Control placeholder="ملحوظات" className="largetextreason arabic-align" 
             name="Notes"
             
             val
             onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <ReCAPTCHA
          sitekey="6LcsUUMhAAAAAF7iAdtMh4Qs9DtxMT-KNjsovGCM         "
          onChange={onChangeCaptcha}
          className="captchaclass"
        />
        <button
                          className="btnsubmit"
                         
                          disabled={!verfied}
                        >
                          يُقدِّم
                        </button>
          
         
        </Form>
      </div>
       </>
    }
        </Modal>
    <div className="search-main">
      {
        getlanguage != 'english' ? <>
        <div className="search-section">
        <div className="main-heading">
          <h1>Chartered Flight</h1>
        </div>
        <span className="Flight-line"></span>
        <div>
        <div className="desktop">
        <form className="search-form myform">
          <div className="form-control">
            <div className="img-section">
              <img src={airlineIcon} />{" "}
            </div>
            <input type="text" placeholder="From" 
            name="DestinationFrom"
            onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={airline2Icon} />{" "}
            </div>
            <input type="text" placeholder="To"
            name="DestinationTo"
            onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={userIcon} />{" "}
            </div>
            <input type="number" placeholder="2" 
            name="NumberOfPasseneger"
            onChange={(e) => handleChangeUserName(e)}
            pattern="^(?=.*[1-9])\d*(?:\.\d{1,2})?$"
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={calenderIcon} />{" "}
            </div>
            <input type="date" placeholder="date" 
            name="Date"
            min="27-07-1977" max="2022-12-31"
            onChange={(e) => handleChange(e)}
            />
          </div>
        </form>
        </div>
        <div className="mobilehide">
        <form className="search-form myform">
          <span>
          <div className="form-control">
            <div className="img-section">
              <img src={airlineIcon} />{" "}
            </div>
            <input type="text" placeholder="from" 
            name="DestinationFrom"
            onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={airline2Icon} />{" "}
            </div>
            <input type="text" placeholder="to"
            name="DestinationTo"
            onChange={(e) => handleChange(e)}
            />
          </div>
          </span>
          <span>
          <div className="form-control">
            <div className="img-section">
              <img src={userIcon} />{" "}
            </div>
            <input type="number" placeholder="2" 
            name="NumberOfPasseneger"
            onChange={(e) => handleChangeUserName(e)}
            pattern="^(?=.*[1-9])\d*(?:\.\d{1,2})?$"
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={calenderIcon} />{" "}
            </div>
            <input type="date" placeholder="date" 
            name="Date"
            min="27-07-1977" max="2022-12-31"
            onChange={(e) => handleChange(e)}
            />
          </div>
          </span>
        </form>
        </div>
        
        </div>
      </div>
        </> : <>
        <div className="search-section">
        <div className="main-heading">
          <h1>طيران مستأجر</h1>
        </div>
        <div>
        <form className="search-form myform">
        <div className="form-control">
            <div className="img-section">
              <img src={calenderIcon} />{" "}
            </div>
            <input type="date" placeholder="تاريخ" 
            name="Date"
            onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={userIcon} />{" "}
            </div>
            <input type="number" placeholder="2" 
            name="NumberOfPasseneger"
            onChange={(e) => handleChangeUserName(e)}
            pattern="^(?=.*[1-9])\d*(?:\.\d{1,2})?$"
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={airline2Icon} />{" "}
            </div>
            <input type="text" placeholder="إلى"
            name="DestinationTo"
           
            onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={airlineIcon} />{" "}
            </div>
            <input type="text" placeholder="من" 
            name="DestinationFrom"
            
            onChange={(e) => handleChange(e)}
            />
          </div>
          
          
          
        </form>
        </div>
       
        <span className="Flight-line"></span>
      </div>
        </>
      }
      {
        
        data.DestinationFrom === '' || data.DestinationTo === '' || data.Date === '' || data.NumberOfPasseneger === '' ? <>
        <Button
                      variant="primary"
                      className="primarybutton"
                      onClick={MyFunction}
                    >
      <div className="button-section">
        <img src={arrowIcon} />
      </div>
      </Button>
        </> : <>
        <Button
                      variant="primary"
                      className="primarybutton"
                      onClick={handleShow}
                    >
      <div className="button-section">
        <img src={arrowIcon} />
      </div>
      </Button>
        </>
      }
    </div>

    </>
    
  );
};

export default Search;
