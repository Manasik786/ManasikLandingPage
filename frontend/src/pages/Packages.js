import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useLocation } from "react-router-dom";
import img1 from "../assets/images/gallery.png";
import img4 from "../assets/images/al-nabawi-sunset.jpg";
import img5 from "../assets/images/Hotel.jpg";
import Buttn1 from "../components/Button/index";
import img2 from "../assets/images/tour.png";
import ArabicButton from "../components/Button/Arabic";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from "../components/Form/Packages";
import Cookies from "universal-cookie";
import { Form, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

import {Country_Name,Country_NameAr} from '../dummydata/category'
import ReCAPTCHA from "react-google-recaptcha";
const Packages = () => {

  const [card, setCard] = useState([]);
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/PackageView`);
      setCard(data.data);
      console.log("New Data",card)
    };
    getdata();
  }, []);
  let str = pathname;
  str = str.substring(10);

  
  const [upload, setupload] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [Name, setName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [country,setcountry] = useState(" ");
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
    country:country,
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
    myForm.append("country",data.country)
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
    getlanguage != "english" ? <>
     {
      card.map((item) => {
        return(
          
            (item.PkgName === str ?
             <>
             <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
              <h2 className='applyfromclass'>{item.PkgName}</h2>
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
             name="country"
          >
        {
          Country_Name.map((item) => {
            return(
              <option key={item.country_id}
              name="country"
              required
               
          
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
      
            </Modal> 
            <div className="contact-banner">
            <div className="banner-content">
                <h1>{item.PkgName}</h1>
                <p>Manasik aviation is basically airline</p>
                <p>and does business of airline</p>
              </div>
              
              </div>
            
            <div className="gap"></div>
            <div className="packagesdetails">
              <div className="packagesdetails_image">
                {
                  item.PkgName == 'Ummrah' ? <>
                  <img src={img4}/>
                  </> : item.PkgName == 'Holiday' ? <img src={img2}/> : <>
                  <img src={img5}/>
                  </>
                 
                }
              </div>
              <div className="packagesdetails_content">
                    <h2>{item.PkgName} </h2>
                   {item.PkgDetail}
                    <div className="packagesdetails_include">
                      {/* <p>Hotel Include</p> */}
                      <p>Duration <span className='DaysOfstay'><span className='pkgstyle'>{item.DaysOfstay}</span> Days</span></p>
                      <p>Valid till <span className='DaysOfstay'><span className='pkgstyle'>{item.ValidTill}</span> </span></p>
                    </div>
                    <span className="btnalignment">
                    <Button
                      variant="primary"
                      className="primarybutton"
                      onClick={handleShow}
                    >
                      <Buttn1 text={"BOOK NOW"} />
                    </Button>
                    </span>
                  </div>
            </div>
            
            </> :  
            <>
            </>
            ) 
        )
      })
    }
    </> : <>
    {
      card.map((item) => {
        return(
          
            (item.PkgName === str ?
             <>
             <Modal show={show} onHide={handleClose}>
             <Modal.Header className='arabic-icon' closeButton>
                <span className='arabic-icon1'><h2 className='applyfromclass'>{item.PkgNamear}</h2></span>
             </Modal.Header>
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
            onChange={(e) => handleChange(e)}
            name="country"
          >
        {
          Country_NameAr.map((item) => {
            return(
              <option key={item.code}
              name="country"
              className="arabic-align"
              required
             
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

            </Modal>
            <div className="contact-banner">
            <div className="banner-content arabic-banner">
                <h1 className="arabic-align11">{item.PkgNamear}</h1>
                <p className="arabic-align11">ماناسيك للطيران هي في الأساس شركة طيران</p>
                <p className="arabic-align11">ويقوم بأعمال الطيران</p>
              </div>
              
              </div>
            
            <div className="gap"></div>
            <div className="packagesdetails">
              <div className="packagesdetails_image">
              {
                  item.PkgName == 'Ummrah' ? <>
                  <img src={img4}/>
                  </> : item.PkgName == 'Holiday' ? <img src={img2}/> : <>
                  <img src={img5}/>
                  </>
                 
                }
              </div>
              <div className="packagesdetails_content">
                    <h2 className='arabic-align'>{item.PkgNamear} </h2>
                   <h6 className='arabic-align' > {item.PkgDetailar}</h6>
                    <div className="packagesdetails_include">
                      {/* <p>Hotel Include</p> */}
                      <p className='arabic-align'>مدة <span className='DaysOfstay'><span className='pkgstyle'>{item.DaysOfstay}</span> أيام</span></p>
                      <p className='arabic-align'>صالح لغاية <span className='DaysOfstay'><span className='pkgstyle'>{item.ValidTillar}</span> </span></p>
                    </div>
                    <Button
                      variant="primary"
                      className="primarybutton"
                      onClick={handleShow}
                    >
                      <ArabicButton text={"احجز الآن"} />
                    </Button>
                  </div>
            </div>
            
            </> :  
            <>
            </>
            ) 
        )
      })
    }
    </>
   }
    </>
  )
}

export default Packages