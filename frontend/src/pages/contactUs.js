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
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.6221882978507!2d-98.48650795000005!3d29.421653200000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58aa57e6a56f%3A0xf08a9ad66f03e879!2sHenry+B.+Gonzalez+Convention+Center!5e0!3m2!1sen!2sus!4v1393884854786" />
     </div>
   </div>
  <Footer/>
   </>
  );
};

export default ContactUs;
