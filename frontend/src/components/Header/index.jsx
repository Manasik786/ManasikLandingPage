import React, { useState,useEffect } from "react";
import logo from "../../assets/images/Headerlogo.png";
import flag from "../../assets/images/flag1.png";
import flag2 from "../../assets/images/flag2.png";
import { Link } from "react-router-dom";
import Banner from "../Banner";
import Button from "../Button";
import Cookies from "universal-cookie";
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';

export const Header = ({ selectedBanner, onHandleClick }) => {
  const [isShow, setShow] = useState(false);
  
  const cookies = new Cookies();
  
  const [getlanguage,setLanguage] = useState(cookies.get("language"));
  let mylanguage = cookies.get('language');
  
  const [data, setData] = useState([]);
  const [card, setCard] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/PackageView`);
      setData(data.data);
      console.log("Response",data.data)
      console.log("Data is",data.data)
    };
    getdata();
  }, []);

  useEffect(() => {
    const getcard = async () => {
      const { data } = await axios.get(`/api/v1/CardItems`);
      setCard(data.data);
      console.log("Response",data.data)
      console.log("Data is",data.data)
    };
    getcard();
  }, []);

  const toggleLanguage = (e) => {
    e.preventDefault();
    if(mylanguage != 'english'){
      cookies.set('language','english')
    window.location.reload();
    }
    else{
      cookies.set('language','arabic')
    window.location.reload();
    }
  };
 function searchFun(){
  setIsOpened(wasOpened => !wasOpened);
 }

 const people = [
  { name: "Services",namear:"خدمات",  id: 1,link:"/services" },
  { name: "About",namear:"حول", id: 2,link:"/aboutus" },
  { name: "Contact",namear:"اتصال", id: 3,link:"/contactus" },
  { name: "Air Ambulance",namear:"اتصال", id: 4,link:"/ambulance" },
  { name: "Careers",namear:"وظائف", id: 5,link:"/careers" },
  { name: "Gallery",namear:"صالة عرض  ", id: 6,link:"/gallery" },
  { name: "Destination",namear:"المكان المقصود", id: 7,link:"/aviationdestination" },
];

const pages1 = []
const [search, setNewSearch] = useState("");

const handleSearchChange = (e) => {
  setNewSearch(e.target.value);
};

const filtered = !search
  ? pages1
  : people.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );

    const filteredar = !search
  ? pages1
  : people.filter((person) =>
      person.namear.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <>
      <div className="header">
        {getlanguage != "english" ? (
          <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setShow(!isShow)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse custom-nav ${
                  isShow ? "show" : ""
                }`}
              >
                <div className="row g-0 justify-content-end w-100 h-100">
                  <div className={`col-12 col-md-10 mobilemenu`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end align-items-center">
                      <li className="nav-item" onClick={() => setShow(!isShow)}>
                        <Link className="nav-link active" to="/">
                          Home
                        </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDarkDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Aviation
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                          <li onClick={() => setShow(!isShow)}>
                            <Link
                              className="dropdown-item"
                              to="/aviationdestination"
                            >
                              Popular Destinations
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item" onClick={() => setShow(!isShow)}>
                        <Link className="nav-link" to="ambulance">
                          Air Ambulance
                        </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDarkDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          PACKAGES
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                          {
                            data.map((item) => {
                              return(
                                <li onClick={() => setShow(!isShow)}>
                            <Link
                              className="dropdown-item"
                              
                              to={{
                                pathname: `packages/${(item.PkgName)}`,
                                state: {
                                  // whatever you need to send with the route transition
                                },
                              }}
                            >
                            {item.PkgName}
                            </Link>
                          </li>
                              )
                            })
                          }
                         
                        </ul>
                      </li>
                      {/* <li className="nav-item" onClick={() => setShow(!isShow)}>
                        <Link className="nav-link" to="/services">
                          Services
                        </Link>
                      </li> */}
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDarkDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Services
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                          {
                            card.map((item) => {
                              return(
                                (item.CardType) === 'service' ? <>
                                
                                <li onClick={() => setShow(!isShow)}>
                                <Link
                                className="dropdown-item"
                                
                                  to={{
                                    // pathname:'/ServicesDetail',
                                   pathname: `ServicesDetail/${(item.CardTitle).replace(/ /g,'')}`,
                                    state: {
                                      // whatever you need to send with the route transition
                                    },
                                  }}
                                >
                                
                                {item.CardTitle}
                                </Link>
                                  </li>
                                </> : <></>
                                      )
                                    })
                                  }
                         
                        </ul>
                      </li>
                      <li className="nav-item" onClick={() => setShow(!isShow)}>
                        <Link className="nav-link" to="/aboutus">
                          About us
                        </Link>
                      </li>
                      <li className="nav-item" onClick={() => setShow(!isShow)}>
                        <Link className="nav-link" to="careers">
                          Careers
                        </Link>
                      </li>
                      <li className="nav-item" onClick={() => setShow(!isShow)}>
                        <Link className="nav-link" to="contactus">
                          Contact
                        </Link>
                      </li>

                      <li className="nav-item">
                      
                        <div className="header-search-btn">
                        <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <i className="fa fa-search"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                      <input type="text" value={search}
                      placeholder="Search"
                      className="searchdatafield"
                      onChange={handleSearchChange} />
                      {filtered.map((person) => {
                        return (
                          <span  key={person.id}>
                           <Link to={person.link}> 
                             <p className="searchdropdown">{person.name}</p>
                           </Link>
                          </span>
                        );
                      })}
                      </Dropdown.Menu>
                    </Dropdown>
                          
                        </div>
                      </li>
                      <li onClick={toggleLanguage} className="nav-item flag">
                        <img src={flag2} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            {/* {isOpened && (
        <div className="searchboxstyle">
          <input type='text' placeholder></input>
        </div>
      )} */}
           
          </>
        ) : (
          <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white arabicstyle">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" />
              </Link>
              <button
                className="navbar-toggler arabictoggle"
                type="button"
                onClick={() => setShow(!isShow)}
              >
                <span className="navbar-toggler-icon "></span>
              </button>
              <div
                className={`collapse navbar-collapse custom-nav ${
                  isShow ? "show" : ""
                }`}
              >
                <div className="row g-0 justify-content-end w-100 h-100 arabicstyle">
                  <div className={`col-12 col-md-10 mobilemenu`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end align-items-center arabicstyle">
                      <li className="nav-item" onClick={() => setShow(!isShow)}>
                        <Link className="nav-link active" to="/">
                          مسكن
                        </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDarkDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          طيران
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                          <li onClick={() => setShow(!isShow)}>
                            <Link
                              className="dropdown-item"
                              to="/aviationdestination"
                            >
                              الوجهات الشعبية
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item" onClick={() => setShow(!isShow)}>
                        <Link className="nav-link" to="ambulance">
                          الإسعاف الجوي
                        </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDarkDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          الحزم
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                          {
                            data.map((item) => {
                              return(
                                <li onClick={() => setShow(!isShow)}>
                            <Link
                              className="dropdown-item"
                              
                              to={{
                                pathname: `packages/${(item.PkgName)}`,
                                state: {
                                  // whatever you need to send with the route transition
                                },
                              }}
                            >
                            {item.PkgNamear}
                            </Link>
                          </li>
                              )
                            })
                          }
                         
                        </ul>
                      </li>
                     
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDarkDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          خدمات
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                          {
                            card.map((item) => {
                              return(
                                (item.CardType) === 'service' ? <>
                                
                                <li onClick={() => setShow(!isShow)}>
                                <Link
                                className="dropdown-item"
                                
                                  to={{
                                    // pathname:'/ServicesDetail',
                                   pathname: `ServicesDetail/${(item.CardTitle).replace(/ /g,'')}`,
                                    state: {
                                      // whatever you need to send with the route transition
                                    },
                                  }}
                                >
                                
                                {item.CardTitlear}
                                </Link>
                                  </li>
                                </> : <></>
                                      )
                                    })
                                  }
                         
                        </ul>
                      </li>
                      <li className="nav-item" onClick={() => setShow(!isShow)}>
                        <Link className="nav-link" to="/aboutus">
                          معلومات عنا
                        </Link>
                      </li>
                      <li className="nav-item" onClick={() => setShow(!isShow)}>
                        <Link className="nav-link" to="careers">
                          وظائف
                        </Link>
                      </li>
                      <li className="nav-item" onClick={() => setShow(!isShow)}>
                        <Link className="nav-link" to="contactus">
                          اتصال
                        </Link>
                      </li>
                      <li className="nav-item">
                        <div className="header-search-btn">
                        <div className="header-search-btn">
                        <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <i className="fa fa-search"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                      <input type="text" value={search}
                      placeholder="بحث "
                      className="searchdatafield arabic-align"
                      onChange={handleSearchChange} />
                      {filteredar.map((person) => {
                        return (
                          <span  key={person.id}>
                           <Link to={person.link}> 
                             <p className="searchdropdown arabic-align">{person.namear}</p>
                           </Link>
                          </span>
                        );
                      })}
                      </Dropdown.Menu>
                    </Dropdown>
                          
                        </div>
                        </div>
                      </li>
                      <li onClick={toggleLanguage}  className="nav-item flag">
                        <img src={flag} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
