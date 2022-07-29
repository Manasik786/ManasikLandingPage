import React from 'react';
import BackArrow from '../../assets/images/backwardarrow.png'
const ButtonLarge = ({ className, text, onHandleClick }) => {
  return (
    <><button className={`custom-btn1 ${className}`} onClick={onHandleClick}> {text}</button></>
  )
}

export default ButtonLarge