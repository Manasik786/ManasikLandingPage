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
                <Header selectedBanner={selectedBanner} onHandleClick={onHandleClick} /> 
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
                        <Route path='/' element={<Home selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='/technology' element={<Technology selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='/test' element={<Test selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='/aboutus' element={<Aboutus selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='/contactus' element={<Contactus selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='/careers' element={<Careers selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='/aviationdestination' element={<Aviation_Destination selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='/ambulance' element={<Ambulance selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='/services' element={<Services selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='/ServicesDetail' element={<ServiceDetails selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} /> 
                        <Route path='/:path' element={<Packages selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='/ambulance/AmbulanceDetail/:id' element={<AmbulanceDetail selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} /> 
                        <Route path='/privacy' element={<Privacy selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='/term&condition' element={<Term selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route path='/gallery' element={<Gallery selectedBanner={selectedBanner} onHandleClick={onHandleClick} />} />
                        <Route element={NotFound} />
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
