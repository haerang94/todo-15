const baseUrl = 'http://localhost:3000';
const origin = 'http://localhost:9000';

const options = {
  headers: {
    Origin: origin,
    'Content-Type': 'application/json',
  },
};
const getOptions = { ...options, method: 'GET' };
const postOptions = { ...options, method: 'POST' };
const deleteOptions = { ...options, method: 'DELETE' };
const patchOptions = { ...options, method: 'PATCH' };

function getFetchManger(url) {
  return fetch(baseUrl + url, getOptions).then((res) => res.json());
}

function postFetchManger(url, body) {
  postOptions['body'] = JSON.stringify(body);
  return fetch(baseUrl + url, postOptions)
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

function deleteFetchManager(url) {
  return fetch(baseUrl + url, deleteOptions)
    .then((res) => res)
    .catch((e) => console.log(e));
}

function patchFetchManger(url, body) {
  patchOptions['body'] = JSON.stringify(body);
  return fetch(baseUrl + url, patchOptions);
}

// test

export {
  getFetchManger,
  postFetchManger,
  deleteFetchManager,
  patchFetchManger,
};
