import React,{useState,useEffect} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import SubmitButton from '../Button/large'
import axios from "axios";


const Popup = () => {

  const [data,setData] = useState({
    Name: "",
    Email: "",
    Phone:"",
    Nationality:"",
    Position:"",
    Gender:"male",
    images:'',
    Cv:''
  })
  // const [data,setData] = useState({
  //   images: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  //     Position: "Position",
  //     Name: "Hasssam",
  //     Phone: "3423423423",
  //     Email: "hassam6@gmail.com",
  //     Gender: "Male",
  //     Nationality: "Pakistani",
  //     Cv: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  // })
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
        `/api/v1/createapplicants`,data,config
      );
      
     console.log(response)
    } catch (err) {
      const Error = err.response.data;
      console.log(Error.message)
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
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="number" placeholder="Phone" 
              name="Phone"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="text" placeholder="Nationality"
              name="Nationality"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="Position"
              name="Position"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <div className="radionbtnfoem">
          <input type="radio" value="Male" name="Gender"/> Male
            <input type="radio" value="Female" name="Gender"/> Female
          </div>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Control type="text" placeholder="Upload Profile"  
            name="images"
            required
            onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Control type="text" placeholder="Upload CV"   
            name="Cv" 
            required
            onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <SubmitButton text={"Submit"}/>
        </Form>
      </div>
    </>
  );
};

export default Popup;
