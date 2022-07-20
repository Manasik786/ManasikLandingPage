import React,{useState,useEffect} from 'react'
import Cookies from "universal-cookie";
import Buttn1 from '../Button/index';
import ArabicButton from '../Button/Arabic';
import ApplyForm from '../Form/ApplyForm'
import Modal from 'react-bootstrap/Modal';
import Popup from '../Form/ApplyForm'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Fly = () => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [card,setCard] = useState([]);

  useEffect(() => {
    const getData = async() => {
      const {data} = await axios.get(`/api/v1/CareerInquiry`);
      setCard(data.data)
    }
    getData()
  },[])

  return (
    <>
    {
        card.map((item) => {
          return(
            <>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         <h2 className='applyfromclass'>{item.Type}</h2>
        </Modal.Header>
        <Popup/>
      </Modal>
      <div className="career-duty">
          <div className="career-department">
            <div className="depart-item">
              <h2>{item.Designation}</h2>
              <h4>{item.Dept}</h4>
            </div>
            <div className="depart-item">
              <h5 className="career-area">{item.Type}</h5>
            </div>
            
            <div className="depart-item">Valid till {item.Valid}</div>
          </div>
          <div className="department-description">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.
            </p>
          </div>
          <Button variant="primary" className='primarybutton' onClick={handleShow}>
          <Buttn1 className={"mt-4"} text="APPLY NOW" />
          </Button>
      </div>
      <hr className="hr-color"/>
            </>
          )
        })
      }
    </>
  )
}

export default Fly