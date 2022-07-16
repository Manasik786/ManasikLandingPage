import React from 'react';
import BackArrow from '../../assets/images/backwardarrow.png'
const Button = ({ className, text, onHandleClick }) => {
  return (
    <><button className={`custom-btn ${className}`} onClick={onHandleClick}><span  className="buttonarrow1"><img src={BackArrow}/></span>{text} </button></>
  )
}

export default Button