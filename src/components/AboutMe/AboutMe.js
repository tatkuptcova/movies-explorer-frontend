import "./AboutMe.css";
import image from "../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className='about-me'  id='aboutMe'>
      <h2 className='section__title'>Студент</h2>
      <hr />
      <img className='about-me__image' alt='Фото студента' src={image} />
      <div className='about-me__info'>
        <h3 className='about-me__title'>Татьяна</h3>
        <p className='about-me__subtitle'>Фронтенд-разработчик, 36 лет</p>
        <p className='about-me__paragraph'>
          С февраля 2021г. проходила обучение по профессии Веб-разработчик. Программа курса была рассчитана на 10 мес. 
          По итогам прохождения обучения, выполнения всех заданий получены на сегодняшний день навыки: HTML, CSS 
          (семантика, методология БЭМ, Flexbox, Grid Layout, адаптивная верстка), Figma, JavaScript (es6), взаимодействие с DOM, 
          Ajax-запросы, React JS, REST API, Babel, сборка Webpack, Git, Node.js, Express, MongoDB.
        </p>
        <ul className='about-me__social-links'>
          <li className='about-me__social-link'>
            <a href='https://ru-ru.facebook.com/zuck' rel='noreferrer' target='_blank'>
              Facebook
            </a>
          </li>
          <li className='about-me__social-link'>
            <a href='https://github.com/torvalds' rel='noreferrer' target='_blank'>
              Github
            </a>
          </li>
        </ul>
      </div>

      <div className='about-me__portfolio'>
        <h4 className='about-me__portfolio-title'>Портфолио</h4>
        <ul className='about-me__portfolio-links'>
          <li className='about-me__portfolio-link'>
            <a href='https://tatkuptcova.github.io/how-to-learn' rel='noreferrer' target='_blank'>
              Статичный сайт
            </a>
          </li>
          <li className='about-me__portfolio-link'>
            <a href='https://tatkuptcova.github.io/russian-travel' rel='noreferrer' target='_blank'>
              Адаптивный сайт
            </a>
          </li>
          <li className='about-me__portfolio-link'>
            <a href='https://domainname.tatkuptcova.nomoredomains.club' rel='noreferrer' target='_blank'>
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
