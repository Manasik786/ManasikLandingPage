import React,{useState} from 'react'
import Cookies from "universal-cookie";
import Buttn1 from '../Button/index';
import ArabicButton from '../Button/Arabic';
import ApplyForm from '../Form/ApplyForm'
import Modal from 'react-bootstrap/Modal';
import Popup from '../Form/ApplyForm'
import Button from 'react-bootstrap/Button';


const Fly = () => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Popup/>
      </Modal>
        {
          getlanguage != 'english' ? <>
          <div className="career-duty">
          <div className="career-department">
            <div className="depart-item">
              <h2>DEPUTY HEAD CHEF</h2>
              <h4>Department</h4>
            </div>
            <div className="depart-item">
              <h5 className="career-area">Damam,Saudia Arabia</h5>
            </div>
           
            <div className="depart-item">Valid till 25th May, 2022</div>
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
        <div className="career-duty">
          <div className="career-department">
            <div className="depart-item">
              <h2>DEPUTY HEAD CHEF</h2>
              <h4>Department</h4>
            </div>
            <div className="depart-item">
              <h5 className="career-area">Damam,Saudia Arabia</h5>
            </div>
           
            <div className="depart-item">Valid till 25th May, 2022</div>
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
        <div className="career-duty">
          <div className="career-department">
            <div className="depart-item">
              <h2>DEPUTY HEAD CHEF</h2>
              <h4>Department</h4>
            </div>
            <div className="depart-item">
              <h5 className="career-area">Damam,Saudia Arabia</h5>
            </div>
           
            <div className="depart-item">Valid till 25th May, 2022</div>
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
          </> : 
           <>
           <div className="career-duty">
           <div className="career-department">
             <div className="depart-item">
               <h2>نائب رئيس الطاهي</h2>
               <h4>قسم</h4>
             </div>
             <div className="depart-item">
               <h5 className="career-area">الدمام ، المملكة العربية السعودية</h5>
             </div>
             <div className="depart-item">قسم</div>
             <div className="depart-item">صالح حتى 25 مايو 2022</div>
           </div>
           <div className="department-description ">
             <p className="arabic-align">
             لدينا تصميم خاص. نأخذ هذا الأمر على محمل الجد. من خلال زيادة الوعي ، نأمل أن نمنع الباحثين عن عمل من الوقوع ضحية لهذه الحيل. لا تتدخل إذا كنت تعتقد أن الاتصال احتيالي 
             </p>
           </div>
           <ArabicButton className={"mt-4"} text="قدم الآن" />
         </div>
         <hr className="hr-color"/>
         <div className="career-duty">
           <div className="career-department">
             <div className="depart-item">
               <h2>نائب رئيس الطاهي</h2>
               <h4>قسم</h4>
             </div>
             <div className="depart-item">
               <h5 className="career-area">الدمام ، المملكة العربية السعودية</h5>
             </div>
             <div className="depart-item">قسم</div>
             <div className="depart-item">صالح حتى 25 مايو 2022</div>
           </div>
           <div className="department-description">
             <p className="arabic-align">
             لدينا تصميم خاص. نأخذ هذا الأمر على محمل الجد. من خلال زيادة الوعي ، نأمل أن نمنع الباحثين عن عمل من الوقوع ضحية لهذه الحيل. لا تتدخل إذا كنت تعتقد أن الاتصال احتيالي 
             </p>
           </div>
           <ArabicButton className={"mt-4"} text="قدم الآن" />
         </div>
         <hr className="hr-color"/>
         <div className="career-duty">
           <div className="career-department">
             <div className="depart-item">
               <h2>نائب رئيس الطاهي</h2>
               <h4>قسم</h4>
             </div>
             <div className="depart-item">
               <h5 className="career-area">الدمام ، المملكة العربية السعودية</h5>
             </div>
             <div className="depart-item">قسم</div>
             <div className="depart-item">صالح حتى 25 مايو 2022</div>
           </div>
           <div className="department-description">
             <p className="arabic-align">
             لدينا تصميم خاص. نأخذ هذا الأمر على محمل الجد. من خلال زيادة الوعي ، نأمل أن نمنع الباحثين عن عمل من الوقوع ضحية لهذه الحيل. لا تتدخل إذا كنت تعتقد أن الاتصال احتيالي 
             </p>
           </div>
           <ArabicButton className={"mt-4"} text="قدم الآن" />
         </div>
         <hr className="hr-color"/>
           </>
        }
    </>
  )
}

export default Fly