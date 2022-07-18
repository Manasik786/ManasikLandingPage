import React,{useState,useEffect} from "react";
import Buttn1 from "../components/Button/index";
import Footer from "../components/Footer/index1";
import Cookies from "universal-cookie";
import BackArrow from '../components/Button/Arabic'
import { Tabs, Tab } from "react-bootstrap";
import Fly from '../components/Tabs/Fly'
import Hotel from '../components/Tabs/Hotel'
import Resturent from '../components/Tabs/Resturent'
import Banner from "../components/Banner/Test";
import WarningCard from "../components/Card/WarningCard";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from "../components/Form/Popup";

const Careers = () => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[card,setCard] = useState([]);
  useEffect(() => {
    const getData = async() => {
      const {data} = await axios.get(`/api/v1/CardItems`);
      setCard(data.data)
    }
    getData();
  },[])

  return (
   <>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton></Modal.Header>
    <Popup />
   </Modal>
   <Banner/>
   {
    getlanguage != 'english' ? <>
    <div className="contact-form1">
     {
      card.map((item) => {
        return(
          (item.CardType) === 'career' ? <>
          <div className="career_section">
      
      <div className="career-cards">
        <div className="career-left">
         <img src={item.images[0].url}/>
        </div>
        <div className="career-right">
          <p className="career-style">
            {item.CardDescriptions}
          </p>
          <Button
                        variant="primary"
                        className="primarybutton "
                        onClick={handleShow}
                      >
                        <Buttn1 text={"BOOK NOW"} />
                      </Button>
        </div>
      </div>
    </div>
          </> : <></>
        )
      })
     }

     <div className="hq-careers">
      <div className="inner-careers">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 tab"
      >
        <Tab eventKey="home" title="fly manasik" className="manasiktabs">
        <Fly/>
        </Tab>
        <Tab eventKey="profile" title="manasik Restaurant" className="manasiktabs">
          <Hotel/>
        </Tab>
        <Tab eventKey="contact" title="manasik hotel" className="manasiktabs">
          <Resturent/>
        </Tab>
      </Tabs>
        
      </div>
     </div>

     <WarningCard/>
   </div>
    </> : <>
    <div className="contact-form1">
     <div className="career_section">
       <div className="career-cards">
         <div className="career-right">
           <p className="career-style arabic-align">
           لدينا تصميم خاص. نأخذ هذا الأمر على محمل الجد. من خلال زيادة الوعي ، نأمل أن نمنع الباحثين عن عمل من الوقوع ضحية لهذه الحيل. لا تتدخل إذا كنت تعتقد أن الاتصال احتيالي           </p>
           <p className="career-style arabic-align">
           لدينا تصميم خاص. نأخذ هذا الأمر على محمل الجد. من خلال زيادة الوعي ، نأمل أن نمنع الباحثين عن عمل من الوقوع ضحية لهذه الحيل. لا تتدخل إذا كنت تعتقد أن الاتصال احتيالي           </p>
           <p className="career-style arabic-align">
           لدينا تصميم خاص. نأخذ هذا الأمر على محمل الجد. من خلال زيادة الوعي ، نأمل أن نمنع الباحثين عن عمل من الوقوع ضحية لهذه الحيل. لا تتدخل إذا كنت تعتقد أن الاتصال احتيالي           </p>
           <BackArrow text={"ابحث الآن"}  className="backarrowbutton"/>
         </div>

       </div>
     </div>

     <div className="hq-careers">
      <div className="inner-careers">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 tab"
      >
        <Tab eventKey="home" title="يطير المناسك" className="manasiktabs">
        <Fly/>
        </Tab>
        <Tab eventKey="profile" title="مطعم مناسيك" className="manasiktabs">
          <Hotel/>
        </Tab>
        <Tab eventKey="contact" title="فندق مناسيك" className="manasiktabs">
          <Resturent/>
        </Tab>
      </Tabs>
      </div>
     </div>

     <div className="career-warning">
       <div className="warning-card">
         <div className="warning-left">
           <div className="img1">
             
           </div>
         </div>
         <div className="warning-right">
           <div className="warning-section">
             <h2 className="arabic-align">تحذير من احتيال التوظيف</h2>
             <p className="arabic-align">
             يقوم الأفراد غير المصرح لهم الذين يدعون أنهم موظفين بتقديم عروض توظيف كاذبة لسرقة الأموال والمعلومات الشخصية من الباحثين عن عمل. تستخدم عمليات الاحتيال هذه لوحات عمل مشروعة ومنصات وسائط اجتماعية وقد تستخدم شعارًا غير مصرح به واسم الموظف والمسمى الوظيفي. سيطلب الجناة استثمارًا أوليًا ، مثل الدفع مقابل تأشيرة العمل ، أو سيرسلون شيكًا يسمح لهم بالوصول إلى حساب الباحث عن عمل بعد إيداع الشيك.             </p>
             <p className="arabic-align">
             نحن نأخذ هذه المسألة على محمل الجد. من خلال زيادة الوعي ، نأمل أن نمنع الباحثين عن عمل من الوقوع ضحية لعمليات الاحتيال هذه. لا تتدخل إذا كنت تعتقد أن الاتصال احتيالي.             </p>
             <p className="arabic-align">
             نحن الممثلين نتواصل وننقل عروض العمل باستخدام عناوين البريد الإلكتروني التي تنتهي بـ @ manasikaviation.com.             </p>
           </div>
         </div>
       </div>
     </div>
   </div>
    </>
   }
  
   </>
  );
};

export default Careers;
