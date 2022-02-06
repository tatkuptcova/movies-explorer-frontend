import { BASE_URL } from "./config";

class MainApi {
  constructor(apiOptions) {
    this._baseUrl = apiOptions.baseUrl;
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getUserInfo() {
    return fetch (`${this._baseUrl}/users/me`, 
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      }
    )
    .then(this._getResponse)
  }

  getMovie() {
    return fetch(`${this._baseUrl}/movies`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      }
    )
    .then(this._getResponse);
  }

  updateUser(data) {
    return fetch(`${this._baseUrl}/users/me`, 
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify(data),
      }
    )
    .then(this._getResponse);
  }

  createMovie({
    movieId,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
  }) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      body: JSON.stringify({
        nameRU,
        nameEN,
        movieId,
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
      }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }
    ).then(this._getResponse);
  }

  removeMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, 
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json',
        },
      }
    )
    .then(this._getResponse);
  }
}

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
});
  