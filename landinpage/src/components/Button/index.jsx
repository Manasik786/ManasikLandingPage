import React from 'react';
import ForwardArrow from '../../assets/images/forwardarrow.png'
const Button = ({ className, text, onHandleClick }) => {
  return (
    <><button className={`custom-btn ${className}`} onClick={onHandleClick}>{text} <span><img src={ForwardArrow} /></span></button></>
  )
}

export default Button