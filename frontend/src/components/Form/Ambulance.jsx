import React,{useState,useEffect,useMemo} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import SubmitButton from '../Button/large'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import Capcha from '../../pages/Translator'
import Cookies from "universal-cookie";
import { useLocation } from "react-router-dom";

// import Select from 'react-select'
// import countryList from 'react-select-country-list'


const Popup = () => {

  const cookies = new Cookies();
const [getlanguage,setLanguage] = useState(cookies.get("language"));
const { pathname } = useLocation();

let str = pathname;
  str = str.substring(27);
  let checkpath = str.substring(0,5)
  console.log("new one",str)
  console.log("new one",checkpath)

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
  const [Servicetype,SetservicesType] = useState(checkpath)


  const [data, setData] = useState({
    Servicetype: checkpath,
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
    SetservicesType(checkpath);

    const myForm = new FormData();
    myForm.append("Servicetype",checkpath)
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
    
    try {
      const response = await axios.post(`/api/v1/createBookingForm`, myForm);
      console.log(response);
      console.log(myForm);
    } catch (err) {
      console.log(err);
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
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="text" placeholder="Family Name" 
              name="familyname"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="date" placeholder="Date of Birth"  id="dob"
              name="DOB"
              onChange={(e) => handleChange(e)}
              />
             <label for="img1" className="label11">Enter Date Of Birth</label>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="Email" 
              name="Email"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="Country" 
              name="country"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="number" placeholder="Mobile" 
              name="Phone"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="Passport Number" 
              name="passportno"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="number" placeholder=" National ID#"
              name="nationalid"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="file" placeholder="Upload Document"
              name="upload"
              accept="image/*"
            onChange={createServiceImagesChange}
            multiple
              />
              <label for="upload1" className="label11">Click to upload Profile Pic</label>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="text" placeholder="Stay Period (Number of Days)" 
               name="StayPeriod"
               onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control placeholder="Religion"   
            name="Religion"
            onChange={(e) => handleChange(e)}
            />
           
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="number" placeholder="Relative contact in KSA" 
               name="relativecontact"
               onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          
          <Form.Group className="mb-3" controlId="formGridAddress2">
          
          <fieldset>
              <legend>Have you visited KSA before?</legend>
              <div className="radiobtnform">
              <div className="radiofield1">
              <label>Yes</label>
                <input type="radio" id="isvisited" name="Visitedbefore" value='1' className="radiostylebtn"
                      onChange={(e) => handleChange(e)}
                      />
               
              </div>

              <div className="radiofield1">
              <label>No</label>
                <input type="radio" id="Visitedbefore" name="Visitedbefore" value='0' className="radiostylebtn"
                onChange={(e) => handleChange(e)}
                />
              
              </div>
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
         
          <button className="btnsubmit" onClick={createProductSubmitHandler}>Submit</button>
        </Form>
      </div>
      </> : <>
      <div className="popup1">
        <Form className="popupform">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName" className="arabicfont">     
              <Form.Control type="text" placeholder="اسم" 
              name="Name"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="text" placeholder="اسم العائلة" 
              name="familyname"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="date" placeholder="تاريخ الولادة" 
              name="DOB"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="البريد الإلكتروني" 
              name="Email"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="دولة" 
              name="country"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="number" placeholder="هاتف" 
              name="Phone"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="رقم جواز السفر" 
              name="passportno"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="number" placeholder=" الهوية الوطنية#"
              name="nationalid"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="تحميل المستند" 
              name="upload"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="text" placeholder="فترة الإقامة (عدد الأيام)" 
               name="StayPeriod"
               onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control placeholder="دِين"   
            name="Religion"
            onChange={(e) => handleChange(e)}
            />
           
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName" >
              
              <Form.Control type="number" placeholder="الاتصال النسبي في المملكة العربية السعودية" 
               name="relativecontact"
               onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          
          <Form.Group className="mb-3 " controlId="formGridAddress2">
          <fieldset>
              <legend>هل زرت المملكة العربية السعودية من قبل؟</legend>
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="Visitedbefore" value='1'
                      checked/>
                <label for="yes">نعم</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="Visitedbefore" value='0'/>
                <label for="no">رقم</label>
              </div>
              </div>
          </fieldset>
          </Form.Group>
          <Form.Group className="mb-13 " controlId="formGridAddress1">
            <Form.Control placeholder="سبب زيارة المملكة العربية السعودية" className="largetextreason" 
             name="Reasontovisitksa"
             val
             onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Capcha/>
          <SubmitButton text={"يُقدِّم"}/>
        </Form>
      </div>
      </>
    }
      
    </>
  );
};

export default Popup;
