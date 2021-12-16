import './Register.css';
import logo from '../../images/logo.svg';
import { Link, withRouter } from 'react-router-dom';
function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <Link className="register__img-link" to="/">
          <img className="register__logo" alt="логотип" src={logo}></img>
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="login__input-label" for="register-input-name">
            Name
          </label>
          <input
            className="register__input"
            type="name"
            id="register-input-name"
          />
          <label className="login__input-label" for="register-input-email">
            Email
          </label>
          <input
            className="register__input"
            type="email"
            id="register-input-email"
          />
          <label className="login__input-label" for="register-input-password">
            Пароль
          </label>
          <input
            className="register__input register__input_color-red"
            type="password"
            id="register-input-password"
          />
          <p className="register__input-error">Что-то пошло не так...</p>
          <button className="register__button">Зарегистрироваться</button>
          <p className="register__subtitle">
            Уже зарегистрированы?
            <Link className="register__link" to="/signin">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Register);
