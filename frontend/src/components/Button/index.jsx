import React from 'react';
import ForwardArrow from '../../assets/images/forwardarrow.png'
const Button = ({ className, text, onHandleClick }) => {
  return (
    <><button className={`custom-btn ${className}`} onClick={onHandleClick}>{text} </button></>
  )
}

export default Button