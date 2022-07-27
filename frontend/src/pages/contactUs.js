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
     <div className="-macontactp">
     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13399.460487258872!2d39.141784!3d21.700575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c48ddee114fa36c!2z2YXZhtin2LPZgyDZhNmE2LfZitix2KfZhiAtIE1BTkFTSUsgQVZJQVRJT04!5e1!3m2!1sen!2sus!4v1658908573753!5m2!1sen!2sus" ></iframe>
     </div>
   </div>
  <Footer/>
   </>
  );
};

export default ContactUs;
