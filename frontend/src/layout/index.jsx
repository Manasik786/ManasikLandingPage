import React, { useState,useEffect } from 'react'
import Header from '../components/Header';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Technology from '../pages/technology';
import Aboutus from '../pages/aboutus';
import Contactus from '../pages/contactUs';
import Footer from '../components/Footer/index';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import Search from '../components/Search';
import Aviation_Destination from '../pages/aviation_Destination';
import Packages from '../pages/Packages';
import Careers from '../pages/careers';
import Ambulance from '../pages/air_ambulance'
import Services from '../pages/services'
import Privacy from '../pages/privacy'
import Test from '../pages/Test';
import Term from '../pages/term';
import Gallery from '../pages/Gallery';
import Spinner from '../assets/images/spinner.png'
import NotFound from '../pages/NotFound'
import AmbulanceDetail from '../pages/AmbulanceDetail'


import '../search.css'
import ServiceDetails from '../pages/ServiveDetail';
const Layout = () => {
    const [selectedBanner, setSelectedBanner] = useState('home');
    let id1 = 'contactus'
    const path = 'contactus'
    let {id} = useParams();
    const onHandleClick = (label) => {
        setSelectedBanner(label);
    }
    const [loading,setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 3000)
    })
    
    return (
        <React.Fragment>
            <div className="header-banner1">
                <Header /> 
            </div>
            
            {
                loading?<>
                <div className='outerloader'>
                <div class="loader">
                </div>
                </div>
                </>:<>
                <div className='row g-0'>
                <div className='col-12'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/test' element={<Test />} />
                        <Route path='/aboutus' element={<Aboutus />} />
                        <Route path='/contactus' element={<Contactus />} />
                        <Route path='/careers' element={<Careers />} />
                        <Route path='/aviationdestination' element={<Aviation_Destination />} />
                        <Route path='/ambulance' element={<Ambulance />} />
                        <Route path='/services' element={<Services />} />
                        <Route path='/ServicesDetail/:data' element={<ServiceDetails />} /> 
                        <Route path='/packages/:path' element={<Packages />} />
                        <Route path='/ambulance/AmbulanceDetail/:id' element={<AmbulanceDetail />} /> 
                        <Route path='/privacy' element={<Privacy />} />
                        <Route path='/term&condition' element={<Term />} />
                        <Route path='/gallery' element={<Gallery />} />
                        <Route path='/*' element={<NotFound/>} />
                    </Routes>
                </div>
            </div>
                </>
            }
           
           <Footer/>

        </React.Fragment>
    )
}

export default Layout;
