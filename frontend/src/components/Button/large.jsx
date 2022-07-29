import React from 'react';
import ForwardArrow from '../../assets/images/forwardarrow.png'
const ButtonLarge = ({ className, text, onHandleClick }) => {
  return (
    <><button className={`custom-btn1 ${className}`} onClick={onHandleClick}>{text} </button></>
  )
}

export default ButtonLarge