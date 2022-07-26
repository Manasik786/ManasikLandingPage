import './App.css';
import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css'
import './scss/main.scss'
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from './layout';
import Cookies from "universal-cookie";
import AOS from 'aos';
import "aos/dist/aos.css";
import CookieConsent from "react-cookie-consent";
// import './new.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const cookies = new Cookies();
//english
useEffect(() => {
  AOS.init();
  AOS.refresh();
}, []);
  
  return (
    <>
    
    <CookieConsent enableDeclineButton>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Router>
        <Helmet>
          <link href="./assets/favicon.png" rel="icon" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" ></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
          <script src="https://kit.fontawesome.com/13cbec302f.js" crossorigin="anonymous"></script>
        </Helmet>
        <ToastContainer
          className="impct-toast"
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover
          
        />
        <Layout />
      </Router>
    </>
  );
}

export default App;
