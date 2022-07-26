import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom"
import { Form, Row, Col, Button } from "react-bootstrap";
import SubmitButton from '../Button/large'

export default function ServicesAddition() {

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
    setPosition("ABCD");
    setGender('male')

    const myForm = new FormData();
    myForm.append("Name", data.Name);
    myForm.append("Email", data.Email);
    myForm.append("Phone", data.Phone);
    myForm.append("Nationality", data.Nationality);
    myForm.append("Position", "abcd");
    myForm.append("Gender", "abcd");


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
      alert("Submitted");
    } catch (err) {
      const Error = err.response.data;
      alert(Error.message);
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
       <div className="popup1">
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
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control
            type="file"
            name="Cv"
            accept="image/*"
            onChange={createServiceImagesChange1}
            multiple
          />
        </Form.Group>

        <button onClick={createProductSubmitHandler}>SubmitSS</button>
      </Form>
      </div>
        </>
    );
}