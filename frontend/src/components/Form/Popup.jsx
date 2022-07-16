import React,{useState,useEffect} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import SubmitButton from '../Button/large'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';


const Popup = () => {
  const [data,setData] = useState({
    FullName: "",
    Email: "",
    Phone:"",
    Nationality:"",
    ProfilePhoto:[]
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
    
    try {
        const config = {
            headers: { "Content-Type": "application/json" },
          };
      const response = await axios.post(
        `/api/v1/createapplicants`,data,config
      );
     console.log(response)
     alert("Done")
    } catch (err) {
     console.log(err.data)
    }
  

  }

  return (
    <>
      <div className="popup1">
        <Form className="popupform">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">     
              <Form.Control type="text" placeholder="Name" 
              name="FullName"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="text" placeholder="Family Name" 
              name="FullName"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="date" placeholder="Date of Birth" 
              name="FullName"
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
              name="Nationality"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="number" placeholder="Mobile" 
              name="FullName"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="Passport Number" 
              name="FullName"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="number" placeholder=" National ID#"
              name="FullName"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="Upload Document" 
              name="FullName"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="text" placeholder="Stay Period" 
               name="FullName"
               onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="Have you visited KSA before?" 
               name="FullName"
               onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="number" placeholder="Relative contact in KSA" 
               name="FullName"
               onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-13 " controlId="formGridAddress1">
            <Form.Control placeholder="Reason to visit Saudi Arabia" className="largetextreason" 
             name="FullName"
             onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Control placeholder="Region"   />
          </Form.Group>
          <SubmitButton text={"Submit"}/>
        </Form>
      </div>
    </>
  );
};

export default Popup;