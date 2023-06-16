import React from "react";
import './Main.css'
import LoginButton from "../LoginButton/LoginButton";

function Main({ handleLoginPopupClick }) {
  return (
    <div className='main'>
      <h1 className='main__title'>Web <span className='main__title-thin'>App</span></h1>
      <LoginButton handleLoginPopupClick={handleLoginPopupClick} />
    </div>
  );
}

export default Main;
