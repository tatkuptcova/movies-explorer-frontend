const BASE_URL = 'https://domainname.tatkuptsov.nomoredomains.club'
const SHORTMOVIETIME = 40;
const HEADERLOCATION = ['/', '/movies', '/saved-movies', '/profile'];
const FOOTERLOCATION = ['/', '/movies', '/saved-movies'];
const ERROR409 = 'Error: 409';
const ERROR401 = 'Error: 401';
const CARDDELETED = 'Карточка удалена';
const REQUESTERROR =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const DUBLICATEEMAIL = 'Пользователь с таким email уже существует';
const SERVERERROR = 'Сервер не отвечает';
const AUTHERROR = 'Неправильная почта или пароль';
const DEFAULTRAILER =
  'https://images.unsplash.com/photo-1639569266011-0a6956ca7a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60';
const DEFAULTIMAGE = 'https://api.nomoreparties.co';

export {
  BASE_URL,
  ERROR409,
  ERROR401,
  FOOTERLOCATION,
  HEADERLOCATION,
  SHORTMOVIETIME,
  CARDDELETED,
  REQUESTERROR,
  DUBLICATEEMAIL,
  SERVERERROR,
  AUTHERROR,
  DEFAULTRAILER,
  DEFAULTIMAGE,
};