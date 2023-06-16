import React, { useState } from 'react';
import './App.css'
import Main from '../Main/Main';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegistrPopup from '../RegistrPopup/RegistrPopup';
import ForgotEmailPopup from '../ForgotEmailPopup/ForgotPasswordPopup';

function App() {
  const [LoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [RegistrPopupOpen, SetRegistrPopupOpen] = useState(false);
  const [ForgotPasswordPopupOpen, SetForgotPasswordPopupOpen] = useState(false);

  function handleLoginPopupClick() {
    setLoginPopupOpen(true);
  }

  function handleRegistrPopupClick() {
    SetRegistrPopupOpen(true);
  }

  function handlePopupForgotPassword() {
    SetForgotPasswordPopupOpen(true);
  }

  function closePopupLogin() {
    setLoginPopupOpen(false);
  }

  function closePopupRegistr() {
    SetRegistrPopupOpen(false);
  }

  function closePopupForgotPassword() {
    SetForgotPasswordPopupOpen(false);
  }

  return (
    <div id='root' className='root'>
      <Main handleLoginPopupClick={handleLoginPopupClick} />
      <LoginPopup
        isOpen={LoginPopupOpen}
        onClose={closePopupLogin}
        handleRegistrPopupClick={handleRegistrPopupClick}
        handlePopupForgotPassword={handlePopupForgotPassword}
      />
      <RegistrPopup 
      isOpen={RegistrPopupOpen} 
      onClose={closePopupRegistr} 
      />
      <ForgotEmailPopup
      isOpen={ForgotPasswordPopupOpen} 
      onClose={closePopupForgotPassword}
      />
    </div>
  );
}

export default App;
