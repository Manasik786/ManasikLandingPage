import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import Buttn1 from "../Button/index";
import ArabicButton from "../Button/Arabic";
import ApplyForm from "../Form/ApplyForm";
import Modal from "react-bootstrap/Modal";
import Popup from "../Form/ApplyForm";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Form, Row, Col } from "react-bootstrap";
import SubmitButton from "../Button/large";
import Capcha from "../../pages/Translator";
import Moment from 'react-moment';

const Fly = () => {
  const cookies = new Cookies();
  const [getlanguage, setLanguage] = useState(cookies.get("language"));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [card, setCard] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/v1/CareerInquiry`);
      setCard(data.data);
    };
    getData();
  }, []);

  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [Name, setName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Gender, setGender] = useState(" ");
  const [Phone, setPhone] = useState("");
  const [Nationality, setNationality] = useState(" ");
  const [Position, setPosition] = useState(" ");
  const [Cv, setCv] = useState([]);

  const [data, setData] = useState({
    Name: Name,
    Email: Email,
    Phone: Phone,
    Nationality: Nationality,
    Position: Position,
    Gender: Gender,
    Cv: " ",
    images: " ",
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
    setNationality(Nationality);
    setPosition(Position);
    setGender(Gender)

    const myForm = new FormData();
    myForm.append("Name", data.Name);
    myForm.append("Email", data.Email);
    myForm.append("Phone", data.Phone);
    myForm.append("Nationality", data.Nationality);
    myForm.append("Position", data.Position);
    myForm.append("Gender", data.Gender);


    // myForm.append("images", data.images);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    Cv.forEach((cv) => {
      myForm.append("Cv", cv);
    });
    console.log(data, "dsad");
    try {
      const response = await axios.post(`/api/v1/createapplicants`, myForm);
      console.log(response);
      alert("Submitted")
    } catch (err) {
      
      const Error = err.response.data;
    alert(Error.message)
    }
  };
  const createServiceImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      console.log(file);
      reader.readAsDataURL(file);
    });
  };

  const createServiceImagesChange1 = (e) => {
    const files = Array.from(e.target.files);

    setCv([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setCv((old) => [...old, reader.result]);
        }
      };
      console.log(file);
      reader.readAsDataURL(file);
    });
  };


  return (
    <>
      {
        getlanguage != "english"?<>
        {card.map((item) => {
        return item.Type == "FLY MANASIK" || item.Type == "fly Manasik" ? (
          
          <>
            <>
            
              <Modal show={show} onHide={handleClose} key={item._id}
        
              >
                <Modal.Header closeButton>
                  <h2 className="applyfromclass">{item.Type}</h2>
                </Modal.Header>
                <div className="popup1" key={item._id}>
                <Form className="popupform">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Control
              type="text"
              placeholder="Name"
              name="Name"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Control
              type="email"
              placeholder="Email"
              name="Email"
              required
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              type="number"
              placeholder="Phone"
              name="Phone"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">
            <Form.Control
              type="text"
              placeholder="Nationality"
              name="Nationality"
              required
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="formGridEmail"
           
          >
            <Form.Control
              type="text"
              placeholder="Position"
              name="Position"
              value={item.Designation}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <div className="radionbtnfoem">
          <input
            type="radio"
            name="Gender"
            value="male"
            onChange={handleChange}
          />{" "}
          <span className="mgender">Male</span>
          <input
            type="radio"
            name="Gender"
            value="female"
            onChange={handleChange}
          />{" "}
          <span className="mgender">Female</span>
        </div>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control
            type="file"
            name="images"
            accept="image/*"
            onChange={createServiceImagesChange}
            multiple
            id="image"
          />
          <label for="image"  className="label11">Upload Profile Picture</label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control
            type="file"
            name="Cv"
            accept="image/*"
            onChange={createServiceImagesChange1}
            multiple
            id="cv"
          />
          <label for="id"  className="label11">Upload CV</label>
        </Form.Group>
        <Capcha/>
        <button className="btnsubmit" onClick={createProductSubmitHandler}>Submit</button>
      </Form>
                </div>
              </Modal>
              <div className="career-duty">
                <div className="career-department">
                  <div className="depart-item">
                    <h2>{item.Designation}</h2>
                    <h4>{item.Dept}</h4>
                  </div>
                  <div className="depart-item">
                    <h5 className="career-area">{item.Location}</h5>
                  </div>

                  <div className="depart-item">
                     <Moment format="YYYY/MM/DD">
                {item.valid}
            </Moment>
                  </div>
                </div>
                <div className="department-description">
                  {/* <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.
            </p> */}
                </div>
                
                <Button 
               
                 key={item._id}
                  variant="primary"
                  className="primarybutton"
                  onClick={handleShow}
                >
                  <Buttn1 className={"mt-4"} text="APPLY NOW" />
                </Button>
              </div>
              <hr className="hr-color" />
            </>
          </>
        ) : (
          <></>
        );
      })}
        </> :<>
        {card.map((item) => {
        return item.Type == "FLY MANASIK" || item.Type == "fly Manasik" ? (
          
          <>
            <>
            
              <Modal show={show} onHide={handleClose} key={item._id}
        
              >
                <Modal.Header closeButton>
                  <h2 className="applyfromclass arabic-align">{item.Typear}</h2>
                </Modal.Header>
                <div className="popup1" key={item._id}>
                <Form className="popupform">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Control
              type="text"
              placeholder="اسم"
              name="Name"
              required
              className="arabic-align"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Control
              type="email"
              placeholder="البريد الإلكتروني"
              name="Email"
              className="arabic-align"
              required
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              type="number"
              placeholder="هاتف"
              className="arabic-align"
              name="Phone"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">
            <Form.Control
              type="text"
              placeholder="جنسية"
              name="Nationality"
              className="arabic-align"
              required
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="formGridEmail"
           
          >
            <Form.Control
              type="text"
              placeholder="موقع"
              name="Position"
              value={item.Designationar}
              onChange={handleChange}
              className="arabic-align"
            />
          </Form.Group>
        </Row>
        <div className="radionbtnfoem">
          <input
            type="radio"
            name="Gender"
            value="male"
            onChange={handleChange}
          />{" "}
          <span className="mgender">ذكر</span>
          <input
            type="radio"
            name="Gender"
            value="female"
            onChange={handleChange}
          />{" "}
          <span className="mgender">Femaأنثىle</span>
        </div>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control
            type="file"
            name="images"
            accept="image/*"
            onChange={createServiceImagesChange}
            multiple
            id="image"
          />
          <label for="image"  className="label11 arabic-align">تحميل صورة الملف الشخصي</label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control
            type="file"
            name="Cv"
            accept="image/*"
            onChange={createServiceImagesChange1}
            multiple
            id="cv"
          />
          <label for="id"  className="label11 arabic-align">تحميل السيرة الذاتية</label>
        </Form.Group>
        <Capcha/>
        <button className="btnsubmit" onClick={createProductSubmitHandler}>يُقدِّم</button>
      </Form>
                </div>
              </Modal>
              <div className="career-duty">
                <div className="career-department">
                  <div className="depart-item">
                    <h2>{item.Designationar}</h2>
                    <h4>{item.Deptar}</h4>
                  </div>
                  <div className="depart-item">
                    <h5 className="career-area">{item.Locationar}</h5>
                  </div>

                  <div className="depart-item">
                     <Moment format="YYYY/MM/DD">
                {item.valid}
            </Moment>
                  </div>
                </div>
                <div className="department-description">
                  {/* <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.
            </p> */}
                </div>
                
                <Button 
               
                 key={item._id}
                  variant="primary"
                  className="primarybutton"
                  onClick={handleShow}
                >
                  <Buttn1 className={"mt-4"} text="قدم الآن" />
                </Button>
              </div>
              <hr className="hr-color" />
            </>
          </>
        ) : (
          <></>
        );
      })}
        </>
      }
    </>
  );
};

export default Fly;
