import React from 'react';
import './Form.css';

function Form({
  children,
  title,
  buttonText,
}) {
  return (
    <div className="form__container">
      <h3 className="form__title">{title}</h3>
      <form className="form" id="form">
        {children}
        <button type="submit" className="form__button-submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default Form;