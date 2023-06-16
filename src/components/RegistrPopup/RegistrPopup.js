import React from "react";
import './RegistrPopup.css'
import Form from '../Form/Form'
import '../Form/Form.css'

function RegistrPopup({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <p className='popup__title'>Web <span className='popup__title-thin'>App</span></p>
        <button className="popup__close-icon" type="button" aria-label="закрыть" onClick={onClose}></button>
        <Form
          title="Добро пожаловать!"
          buttonText="Зарегистрироваться">
          <label className="form__field">
            Имя
          </label>
          <input
            name="name"
            className="form__input"
            id="name-input"
            type="text"
            minLength="2"
            maxLength="40"
            required
          />
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
      </div>
    </div>
  );
}

export default RegistrPopup;
