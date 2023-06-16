import React from 'react';
import './LoginButton.css'

function LoginButton({handleLoginPopupClick}) {
  return (
    <button className='login-button' onClick={handleLoginPopupClick}>
      Войти
    </button>
  )
}

export default LoginButton;