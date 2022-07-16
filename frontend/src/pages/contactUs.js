import React,{useState} from "react";
import ContactForm from '../components/Form/contact'
import { useParams } from 'react-router-dom';
import Cookies from "universal-cookie";
import Footer from "../components/Footer/index1";
import Banner from "../components/Banner/Test";
const ContactUs = () => {
  const cookies = new Cookies();
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  return (
   <>
   <div className="contact-form">
     <Banner/>
     <div className="gap1"></div>
     <ContactForm/>
     <div className="contact-map">
     
     </div>
   </div>
  <Footer/>
   </>
  );
};

export default ContactUs;
