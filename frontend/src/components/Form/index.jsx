import React,{useState,useEffect} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import SubmitButton from '../Button/large'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import Capcha from '../../pages/Translator'
import Cookies from "universal-cookie";


const Popup = () => {
  const [data,setData] = useState({
    Name:"",
    familyname: "",
    DOB:"",
    Email: "",
    country:"",
    Phone:"",
    passportno:"",
    nationalid:"",
    upload:"",
    StayPeriod:"",
    Visitedbefore: 1,
    relativecontact:"",
    Reasontovisitksa:"",
    Religion:"",
  })
//   const [images, setImages] = useState([]);

const cookies = new Cookies();
const [getlanguage,setLanguage] = useState(cookies.get("language"));
useEffect(() => {
  PostForm();
}, []);


const handleChange = (e) => {
  const { name, value } = e.target;
  setData({ ...data, [name]: value });
};
const PostForm = async (e) => {
  e.preventDefault();
  try {
      const config = {
          headers: { "Content-Type": "application/json" },
        };
    const response = await axios.post(
      `/api/v1/createBookingForm`,data,config
    );
  alert("Submitted");
  } catch (err) {
    const Error = err.response.data;
    alert(Error.message)
   
  }

console.log(data)
}

  return (
    <>
    {
       getlanguage != 'english'? <>
        <div className="popup1">
        <Form className="popupform" onSubmit={PostForm}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">     
              <Form.Control type="text" placeholder="Name" 
              name="Name"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="text" placeholder="Email" 
              name="Email"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          
          
          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>Hotel Service Needed?</legend>
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="Hotel" value='1'
                      checked/>
                <label for="yes">Yes</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="Hotel" value='0'/>
                <label for="no">No</label>
              </div>
              </div>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>Visa Service Needed?</legend>
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="Visa" value='1'
                      checked/>
                <label for="yes">Yes</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="Visa" value='0'/>
                <label for="no">No</label>
              </div>
              </div>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>Catering Service Needed?</legend>
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="Catering" value='1'
                      checked/>
                <label for="yes">Yes</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="Catering" value='0'/>
                <label for="no">No</label>
              </div>
              </div>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>Transporttation Service Needed?</legend>
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="Transporttation" value='1'
                      checked/>
                <label for="yes">Yes</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="Transporttation" value='0'/>
                <label for="no">No</label>
              </div>
              </div>
          </fieldset>
          </Form.Group>
          <Form.Group className="mb-13 " controlId="formGridAddress1">
            <Form.Control placeholder="Note" className="largetextreason" 
             name="Reasontovisitksa"
             val
             onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Capcha/>
          <SubmitButton text={"Submit"}/>
        </Form>
      </div>
       </> : <>
       <div className="popup1">
        <Form className="popupform" onSubmit={PostForm}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">     
              <Form.Control type="text" placeholder="اسم" 
              name="Name"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="text" placeholder="البريد الإلكتروني" 
              name="Email"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          
          
          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>تحتاج خدمة الفندق؟</legend>
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="Hotel" value='1'
                      checked/>
                <label for="yes">نعم</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="Hotel" value='0'/>
                <label for="no">رقم</label>
              </div>
              </div>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>هل تحتاج إلى خدمة التأشيرة؟</legend>
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="Visa" value='1'
                      checked/>
                <label for="yes">نعم</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="Visa" value='0'/>
                <label for="no">رقم</label>
              </div>
              </div>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>مطلوب خدمة تقديم الطعام؟</legend>
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="Catering" value='1'
                      checked/>
                <label for="yes">نعم</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="Catering" value='0'/>
                <label for="no">رقم</label>
              </div>
              </div>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>خدمة النقل بحاجة؟</legend>
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="Transporttation" value='1'
                      checked/>
                <label for="yes">نعم</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="Transporttation" value='0'/>
                <label for="no">رقم</label>
              </div>
              </div>
          </fieldset>
          </Form.Group>
          <Form.Group className="mb-13 " controlId="formGridAddress1">
            <Form.Control placeholder="ملحوظة" className="largetextreason" 
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
