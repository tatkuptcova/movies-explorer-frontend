import './NavigationMobile.css';
import { Link, NavLink } from 'react-router-dom';

function NavigationMobile({ closeMobileMenu }) {
  return (
    <div className="mobile-nav">
      <button
        className="mobile-nav__btn-close"
        onClick={closeMobileMenu}
      >
      </button>
      <div className="mobile-nav__items">
        <NavLink
          exact
          to="/"
          className="mobile-nav__item"
          activeClassName="mobile-nav__item_underline"
          onClick={closeMobileMenu}
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className="mobile-nav__item"
          activeClassName="mobile-nav__item_underline"
          onClick={closeMobileMenu}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="mobile-nav__item"
          activeClassName="mobile-nav__item_underline"
          onClick={closeMobileMenu}
        >
          Сохранённые фильмы
        </NavLink>
      </div>

      <Link 
        to="/profile" 
        className="mobile-nav__item mobile-nav__item_profile"
        onClick={closeMobileMenu}
      >
        Аккаунт
      </Link>
    </div>
  );
}

export default NavigationMobile;