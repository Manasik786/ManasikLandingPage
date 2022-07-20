import React,{useState,useEffect,useMemo} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import SubmitButton from '../Button/large'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import Capcha from '../../pages/Translator'
// import Select from 'react-select'
// import countryList from 'react-select-country-list'


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
    Servicetype:""
  })
//   const [images, setImages] = useState([]);

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
              <Form.Control type="text" placeholder="Family Name" 
              name="familyname"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="date" placeholder="Date of Birth" 
              name="DOB"
              onChange={(e) => handleChange(e)}
              />
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
              
              <Form.Control type="text" placeholder="Upload Document" 
              name="upload"
              onChange={(e) => handleChange(e)}
              />
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
                <input type="radio" id="isvisited" name="Visitedbefore" value='1'
                      checked/>
                <label for="yes">Yes</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="Visitedbefore" value='0'/>
                <label for="no">No</label>
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
          <Capcha/>
          <SubmitButton text={"Submit"}/>
        </Form>
      </div>
    </>
  );
};

export default Popup;
