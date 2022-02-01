import './PageNotFound.css';
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className='notfound'>
      <h1 className='notfound__title'>404</h1>
      <p className='notfound__text'>Страница не найдена</p>
      <Link className='notfound__link' to='/'>
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;