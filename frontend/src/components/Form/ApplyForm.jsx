import React,{useState,useEffect} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import SubmitButton from '../Button/large'
import axios from "axios";
import Cookies from "universal-cookie";
import Capcha from '../../pages/Translator'

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
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));


  useEffect(() => {
    PostForm();
  }, []);
  const [card,setCard] = useState([]);

  useEffect(() => {
    const getData = async() => {
      const {data} = await axios.get(`/api/v1/AirAmbulance`);
      setCard(data.data)
    }
    getData()
  },[])
 
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
          <input type="radio" value="Male" name="Gender"/> <span className="mgender">Male</span>
            <input type="radio" value="Female" name="Gender"/> <span className="mgender">Female</span>
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
      
      </>:<>
      <div className="popup1">
        <Form className="popupform" onSubmit={PostForm}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">     
              <Form.Control type="text" placeholder="اسم"
              name="Name"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="email" placeholder="البريد الإلكتروني" 
              name="Email"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
         
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="number" placeholder="هاتف" 
              name="Phone"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              
              <Form.Control type="text" placeholder="جنسية"
              name="Nationality"
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              
              <Form.Control type="text" placeholder="موقع"
              name="Position"
              
              required
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <div className="radionbtnfoem">
          <input type="radio" value="Male" name="Gender"/> <span className="mgender">ذكر</span>
            <input type="radio" value="Female" name="Gender"/> <span className="mgender">أنثى</span>
          </div>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Control type="text" placeholder="تحميل الملف الشخصي"  
            name="images"
            required
            onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Control type="text" placeholder="تحميل السيرة الذاتية"   
            name="Cv" 
            required
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
