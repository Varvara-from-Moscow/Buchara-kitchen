import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import './Register.css';
 

function Register({}) {
 /* 
 onRegister
 
 const [values, setValues] = React.useState({});

  function handleChange(e) {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      password: values.password,
      email: values.email
    });
  }*/

  return (
    <section className="register__container">
      
      <form className="register__form">
        <h3 className="register__title">Регистрация</h3>
        <p className="register__input-title">email</p>
        <input
          required
          autoComplete="on"
          name="email"
          type="email"
          minLength="5"
          maxLength="40"
          className="register__input"
          placeholder="Email" 
          
        />
        <span className="register__error register__error_visible name-error" />
        <p className="register__input-title">Пароль</p>
        <input
          required
          autoComplete="on"
          name="password"
          type="password"
          minLength="5"
          maxLength="5"
          className="register__input"
          placeholder="Пароль" 
          
        />
        <span className="register__error register__error_visible password-error" />
        <button type="submit" 
                className="register__button">
                Зарегистрироваться
        </button>
      </form>

      <button className="register__button-link-tolog">
          <Link to="/sign-up" className="register__link-tolog">У меня уже есть аккаунт</Link>
      </button>

    </section>  
      

    );
  }

export default withRouter(Register);