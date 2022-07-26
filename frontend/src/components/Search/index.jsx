import React, { useState,useEffect } from "react";
import airlineIcon from "../../assets/images/airplane.png";
import airline2Icon from "../../assets/images/airplane_2.png";
import userIcon from "../../assets/images/user.png";
import calenderIcon from "../../assets/images/calender.png";
import arrowIcon from "../../assets/images/arrow.png";
import Cookies from "universal-cookie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from "../Form/index";
import { Form, Row, Col } from "react-bootstrap";
import SubmitButton from '../Button/large'
import axios from "axios";
import Capcha from '../../pages/Translator'

const Search = () => {
  const cookies = new Cookies();

  const [getlanguage, setLanguage] = useState(cookies.get("language"));
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);


  const [data,setData] = useState({
    Name:"",
    DestinationTo:"",
    DestinationFrom: "",
    NumberOfPasseneger:"",
    familyname:"",
    Phone:"",
    Notes:"",
    Date:"",
    nationalid:"",
    HotelService:"",
    VisaService:"",
    TransportationService:"",
    CateringService: "",
  })
//   const [images, setImages] = useState([]);
useEffect(() => {
  PostForm();
}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const handleChangeUserName =(e) => {
    if(e.target.value > 0){
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    }
    else{
      alert("Passeneger should greater then 0")
    }
   
 }


  const PostForm = async (e) => {
    e.preventDefault();
    try {
        const config = {
            headers: { "Content-Type": "application/json" },
          };
      const response = await axios.post(
        `/api/v1/createAirCraftService`,data,config
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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      {
        getlanguage != 'english' ? <>
         <h2 className='applyfromclass'>Search Flight</h2>
        </>:<>
        <h2 className='applyfromclass arabic-align'>رحلة البحث</h2></>
      }
        </Modal.Header>
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
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">     
              <Form.Control type="text" placeholder="Familyname" 
              name="familyname"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="number" placeholder="Phone" 
              name="Phone"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="number" placeholder="Nationalid" 
              name="nationalid"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              <legend>Hotel Service Needed?</legend>
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="HotelService" value='1'
                onChange={(e) => handleChange(e)}
                      />
                <label for="yes">Yes</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="HotelService" value='0'
                onChange={(e) => handleChange(e)}
                />
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
                <input type="radio" id="isvisited" name="VisaService" value='1'
                onChange={(e) => handleChange(e)}
                      />
                <label for="yes">Yes</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="VisaService" value='0'
                onChange={(e) => handleChange(e)}
                />
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
                <input type="radio" id="isvisited" name="TransportationService" value='1'
                onChange={(e) => handleChange(e)}
                    />
                <label for="yes">Yes</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="TransportationService" value='0'
                onChange={(e) => handleChange(e)}
                />
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
                <input type="radio" id="isvisited" name="CateringService" value='1'
                onChange={(e) => handleChange(e)}
                      />
                <label for="yes">Yes</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="CateringService" value='0'
                onChange={(e) => handleChange(e)}
                />
                <label for="no">No</label>
              </div>
              </div>
          </fieldset>
          </Form.Group>
          <Form.Group className="mb-13 " controlId="formGridAddress1">
            <Form.Control placeholder="Note" className="largetextreason" 
             name="Notes"
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
              className="arabic-align"
              name="Name"
              onChange={(e) => handleChange(e)}

              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="text" placeholder="البريد الإلكتروني" 
              name="Email"
              className="arabic-align"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">     
              <Form.Control type="text" placeholder="اسم العائلة" 
              name="familyname"
              className="arabic-align"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="number" placeholder="هاتف" 
              name="Phone"
              className="arabic-align"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Group as={Col} controlId="formGridName">
              <Form.Control type="number" placeholder="الهوية الوطنية" 
              name="nationalid"
              className="arabic-align"
              onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
             
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="HotelService" value='1'
                onChange={(e) => handleChange(e)}
                      />
                <label for="yes">نعم</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="HotelService" value='0'
                onChange={(e) => handleChange(e)}
                />
                <label for="no">رقم</label>
              </div>
              </div>
              <legend  className="arabic-align">تحتاج خدمة الفندق؟</legend>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
             
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="VisaService" value='1'
                onChange={(e) => handleChange(e)}
                      />
                <label for="yes">نعم</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="VisaService" value='0'
                onChange={(e) => handleChange(e)}
                />
                <label for="no">رقم</label>
              </div>
              </div>
              <legend  className="arabic-align">هل تحتاج إلى خدمة التأشيرة؟</legend>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
              
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="TransportationService" value='1'
                onChange={(e) => handleChange(e)}
                    />
                <label for="yes">نعم</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="TransportationService" value='0'
                onChange={(e) => handleChange(e)}
                />
                <label for="no">رقم</label>
              </div>
              </div>
              <legend  className="arabic-align">مطلوب خدمة تقديم الطعام؟</legend>
          </fieldset>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
          <fieldset>
             
              <div className="radiobtnform">
              <div className="radiofield1">
                <input type="radio" id="isvisited" name="CateringService" value='1'
                onChange={(e) => handleChange(e)}
                      />
                <label for="yes">نعم</label>
              </div>

              <div className="radiofield1">
                <input type="radio" id="Visitedbefore" name="CateringService" value='0'
                onChange={(e) => handleChange(e)}
                />
                <label for="no">رقم</label>
              </div>
              </div>
               <legend  className="arabic-align">خدمة النقل بحاجة؟</legend>
          </fieldset>
          </Form.Group>
          <Form.Group className="mb-13 " controlId="formGridAddress1">
            <Form.Control placeholder="ملحوظات" className="largetextreason arabic-align" 
             name="Notes"
             
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
        </Modal>
    <div className="search-main">
      {
        getlanguage != 'english' ? <>
        <div className="search-section">
        <div className="main-heading">
          <h1>Chartered Flight</h1>
        </div>
        <span className="Flight-line"></span>
        <div>
        <form className="search-form myform">
          <div className="form-control">
            <div className="img-section">
              <img src={airlineIcon} />{" "}
            </div>
            <input type="text" placeholder="from" 
            name="DestinationFrom"
            onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={airline2Icon} />{" "}
            </div>
            <input type="text" placeholder="to"
            name="DestinationTo"
            onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={userIcon} />{" "}
            </div>
            <input type="number" placeholder="2" 
            name="NumberOfPasseneger"
            onChange={(e) => handleChangeUserName(e)}
            pattern="^(?=.*[1-9])\d*(?:\.\d{1,2})?$"
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={calenderIcon} />{" "}
            </div>
            <input type="date" placeholder="date" 
            name="Date"
            onChange={(e) => handleChange(e)}
            />
          </div>
        </form>
        </div>
      </div>
        </> : <>
        <div className="search-section">
        
        <div>
        <form className="search-form myform">
          <div className="form-control">
            <div className="img-section">
              <img src={airlineIcon} />{" "}
            </div>
            <input type="text" placeholder="من" 
            name="DestinationFrom"
            onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={airline2Icon} />{" "}
            </div>
            <input type="text" placeholder="إلى"
            name="DestinationTo"
            onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={userIcon} />{" "}
            </div>
            <input type="number" placeholder="2" 
            name="NumberOfPasseneger"
            onChange={(e) => handleChangeUserName(e)}
            pattern="^(?=.*[1-9])\d*(?:\.\d{1,2})?$"
            />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={calenderIcon} />{" "}
            </div>
            <input type="date" placeholder="تاريخ" 
            name="Date"
            onChange={(e) => handleChange(e)}
            />
          </div>
        </form>
        </div>
        <div className="main-heading">
          <h1>طيران مستأجر</h1>
        </div>
        <span className="Flight-line"></span>
      </div>
        </>
      }
      <Button
                      variant="primary"
                      className="primarybutton"
                      onClick={handleShow}
                    >
      <div className="button-section">
        <img src={arrowIcon} />
      </div>
      </Button>
    </div>

    </>
    
  );
};

export default Search;
