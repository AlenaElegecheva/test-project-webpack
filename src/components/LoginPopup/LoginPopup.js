import React from "react";
import './LoginPopup.css'
import Form from '../Form/Form'
import '../Form/Form.css'
import emailIcon from '../../images/email_icon.svg';

function LoginPopup({ isOpen, onClose, handleRegistrPopupClick, handlePopupForgotPassword }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <p className='popup__title'>Web <span className='popup__title-thin'>App</span></p>
        <button className="popup__close-icon" type="button" aria-label="закрыть" onClick={onClose}></button>
        <Form
          title="Войдите в свой профиль"
          buttonText="Войти">
          <label className="form__field">
            Логин
          </label>
          <input
            name="login"
            className="form__input"
            id="login-input"
            type="email"
            required
          />
          <label className="form__field">
            Пароль
          </label>
          <input
            name="password"
            className="form__input"
            id="password-input"
            type="password"
            required
          />
        </Form>
        <button className="popup__button-link" onClick={handlePopupForgotPassword} >Я забыл пароль</button>
        <button className="popup__button-link" onClick={handleRegistrPopupClick}>Регистрация</button>
        <a className="popup__support-link" href="https://www.google.com/intl/ru/gmail/about/" target="_blank" rel="noreferrer">
          <img src={emailIcon} className='popup__support-link_icon' alt="написать в поддержку" />
          <p className="popup__support-link_text">Написать в поддержку</p>
        </a>
      </div>
    </div>
  );
}

export default LoginPopup;
