import React, { useState } from "react";
import airlineIcon from "../../assets/images/airplane.png";
import airline2Icon from "../../assets/images/airplane_2.png";
import userIcon from "../../assets/images/user.png";
import calenderIcon from "../../assets/images/calender.png";
import arrowIcon from "../../assets/images/arrow.png";
import Cookies from "universal-cookie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from "../Form/index";

const Search = () => {
  const cookies = new Cookies();

  const [getlanguage, setLanguage] = useState(cookies.get("language"));
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  return (
    <>
    <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <h2 className='applyfromclass'>Search Flight</h2>
                </Modal.Header>
                <Popup />
              </Modal>
    <div className="search-main">
      <div className="search-section">
        <div className="main-heading">
          <h1>Chartered Flight</h1>
        </div>
        <span className="Flight-line"></span>
        <div>
        <form className="search-form myform">
          <div className="form-control">
            <div className="img-section">
              <img src={airlineIcon} />{" "}
            </div>
            <input type="text" placeholder="from" />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={airline2Icon} />{" "}
            </div>
            <input type="text" placeholder="to" />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={userIcon} />{" "}
            </div>
            <input type="number" placeholder="2" />
          </div>
          <div className="form-control">
            <div className="img-section">
              <img src={calenderIcon} />{" "}
            </div>
            <input type="date" placeholder="date" />
          </div>
        </form>
        </div>
      </div>
      <Button
                      variant="primary"
                      className="primarybutton"
                      onClick={handleShow}
                    >
      <div className="button-section">
        <img src={arrowIcon} />
      </div>
      </Button>
    </div>
    </>
    
  );
};

export default Search;
