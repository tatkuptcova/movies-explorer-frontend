const BASE_URL = 'https://domainname.tatkuptsov.nomoredomains.club';
const headers = { 'Content-Type': 'application/json' };

function getResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
}

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ name, email, password }),
  }).then(getResponse);
}

export function login(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email, password }),
  })
    .then((data) => {
      return data;
    })
    .then(getResponse);
}
export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((data) => data)
    .then(getResponse);
}