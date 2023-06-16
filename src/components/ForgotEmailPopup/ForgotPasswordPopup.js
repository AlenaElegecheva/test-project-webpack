import React from "react";
import './ForgotPasswordPopup.css'
import Form from '../Form/Form'
import '../Form/Form.css'

function ForgotPasswordPopup({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <p className='popup__title'>Web <span className='popup__title-thin'>App</span></p>
        <button className="popup__close-icon" type="button" aria-label="закрыть" onClick={onClose}></button>
        <Form
          title="Забыли пароль?"
          buttonText="Отправить код">
          <label className="form__field">
            Введите email, указанный при регистрации
          </label>
          <input
            name="login"
            className="form__input"
            id="login-input"
            type="email"
            required
          />
        </Form>
      </div>
    </div>
  );
}

export default ForgotPasswordPopup;