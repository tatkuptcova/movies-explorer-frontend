import "./Carousel.css";
import { Scrollchor } from 'react-scrollchor';

function Carousel() {
  return (
    <section className='carousel'>
      <h1 className='carousel__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <ul className='carousel__link-list'>
        <Scrollchor to='#project' className='carousel__item'>О проекте</Scrollchor>
        <Scrollchor  to='#techs' className='carousel__item'>Технологии</Scrollchor>
        <Scrollchor  to='#aboutMe' className='carousel__item'>Студент</Scrollchor>
      </ul>
    </section>
  );
}

export default Carousel;
