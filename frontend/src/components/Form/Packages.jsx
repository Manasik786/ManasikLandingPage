import React,{useState,useEffect,useMemo} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import SubmitButton from '../Button/large'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import Capcha from '../../pages/Translator'
import Cookies from "universal-cookie";
import { useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {Country_Name ,Country_NameAr} from '../../dummydata/category';
import ReCAPTCHA from "react-google-recaptcha";

// import Select from 'react-select'
// import countryList from 'react-select-country-list'


const Popup = () => {

  const cookies = new Cookies();
const [getlanguage,setLanguage] = useState(cookies.get("language"));
const Country = window.localStorage.getItem('country',);

const { pathname } = useLocation();


let str = pathname;
  str = str.substring(10);

  console.log(str)

  const [upload, setupload] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [Name, setName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [country,setcountry] = useState(Country);
  const [Phone, setPhone] = useState("");
  const [DOB, setDOB] = useState(" ");
  const [familyname,setfamilyname] = useState(" ")
  const [passportno, setpassportno] = useState(" ");
  const [nationalid, setnationalid] = useState(" ");
  const [StayPeriod, setStayPeriod] = useState(" ");
  const [Visitedbefore, setVisitedbefore] = useState(" ");
  const [relativecontact, setrelativecontact] = useState(" ");
  const [Reasontovisitksa, setReasontovisitksa] = useState(" ");
  const [Religion, setReligion] = useState(" ");
  const [Servicetype,setservicesType] = useState(str)
  const [CardType,setCardType] = useState('packages')

  const [data, setData] = useState({
    Servicetype: str,
    CardType:"packages",
    Name: Name,
    familyname: familyname,
    DOB:DOB,
    Email: Email,
    country:Country,
    Phone:Phone,
    passportno:passportno,
    nationalid:nationalid,
    StayPeriod:StayPeriod,
    Visitedbefore: Visitedbefore,
    relativecontact:relativecontact,
    Reasontovisitksa:Reasontovisitksa,
    Religion:Religion,
    
    upload:" ",
    
  });
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log(data);
  };
  useEffect(() => {}, []);
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
    setservicesType(Servicetype);
    setCardType("packages")

    const myForm = new FormData();
    myForm.append("Servicetype",str)
    myForm.append("CardType",'packages')
    myForm.append("Name", data.Name);
    myForm.append("Email", data.Email);
    myForm.append("Phone", data.Phone);
    myForm.append("familyname", data.familyname);
    myForm.append("DOB",data.DOB);
    myForm.append("country",Country)
    myForm.append("passportno",data.passportno)
    myForm.append("nationalid",data.nationalid)
    myForm.append("StayPeriod",data.StayPeriod)
    myForm.append("Visitedbefore",data.Visitedbefore)
    myForm.append("relativecontact",data.relativecontact)
    myForm.append("Reasontovisitksa",data.Reasontovisitksa)
    myForm.append("Religion",data.Religion)

   


    // myForm.append("images", data.images);

    upload.forEach((image) => {
      myForm.append("upload", image);
    });
    
    console.log(data, "dsad");
    try {
      const response = await axios.post(`/api/v1/createBookingForm`, myForm);
      console.log(response);
      console.log(myForm);
      toast("Submitted")
      window.location.reload();

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
  const [verfied, setVerifed] = useState(false);
  function onChangeCaptcha(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <>
    {
      getlanguage != 'english'? <>
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
              <Form.Control type="date" placeholder="DOB" 
              name="DOB"
              required
              onChange={(e) => handleChange(e)}
              />
             <label for="img1" className="label11">DOB</label>
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
           name="country"
          >
        {
          Country_Name.map((item) => {
            return(
              <option key={item.country_id}
              name="country"
              required
                onClick={() => {
            window.localStorage.setItem('country', (item.country_name));
          }}
              >{item.country_name}</option>
            )
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
              required
              accept="image/*"
            onChange={createServiceImagesChange}
            multiple
              />
              <label for="upload1" className="label11">Profile</label>
              </div>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="text" placeholder="Stay Period (Number of Days)" 
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
          required
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
                          
                          onClick={HandleImage}
                          disabled={!verfied}
                        >
                          Submit
                        </button>
                          </> : <>
                           <button
                          className="btnsubmit"
                          onClick={createProductSubmitHandler}
                          disabled={!verfied}
                        >
                          Submit
                        </button>
                          </>
                        }
        </Form>
      </div>
      </> : <>
      <div className="popup1">
        <Form className="popupform">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName" className="arabic-align">     
              <Form.Control type="text" placeholder="اسم" 
              className="arabic-align"
              name="Name"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="text" placeholder="اسم العائلة" 
              name="familyname"
              required
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
              required
              className="arabic-align"
              onChange={(e) => handleChange(e)}
              />
              <label for="img1" className="label11 arabic-align">تاريخ الولادة</label>
              </div>

            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="email" placeholder="البريد الإلكتروني" 
              name="Email"
              className="arabic-align"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
            <select class="form-control" id="exampleFormControlSelect1"
          
          >
        {
          Country_NameAr.map((item) => {
            return(
              <option key={item.code}
              name="country"
              className="arabic-align"
              required
                onClick={() => {
            window.localStorage.setItem('country', (item.name));
          }}
              >{item.name}</option>
            )
          })
        }
        </select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="number" placeholder="هاتف" 
              name="Phone"
              required
              className="arabic-align"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="رقم جواز السفر" 
              name="passportno"
              required
              className="arabic-align"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="number" placeholder=" الهوية الوطنية#"
              name="nationalid"
              className="arabic-align"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="تحميل المستند" 
              name="upload"
              className="arabic-align"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="text" placeholder="فترة الإقامة (عدد الأيام)" 
               name="StayPeriod"
               className="arabic-align"
               required
               onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control placeholder="دِين"   
            name="Religion"
            required
            className="arabic-align"
            onChange={(e) => handleChange(e)}
            />
           
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName" >
              
              <Form.Control type="number" placeholder="الاتصال النسبي في المملكة العربية السعودية" 
               name="relativecontact"
               required
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
                          onClick={HandleImage}
                          disabled={!verfied}
                        >
                          يُقدِّم
                        </button>
                          </> : <>
                           <button
                          className="btnsubmit"
                          onClick={createProductSubmitHandler}
                          disabled={!verfied}
                        >
                          يُقدِّم
                        </button>
                          </>
                        }
        </Form>
      </div>
      </>
    }
      
    </>
  );
};

export default Popup;
