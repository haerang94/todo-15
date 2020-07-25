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
const deleteOptions = {
  ...options,
  method: 'DELETE',
  'Access-Control-Allow-Origin': '*',
};
const patchOptions = { ...options, method: 'PATCH' };

function getFetchManger(url) {
  return fetch(url, getOptions).then((res) => res.json());
}

function postFetchManger(url, body) {
  postOptions['body'] = JSON.stringify(body);
  return fetch(url, postOptions);
}

function deleteFetchManager(url, body) {
  if (body) deleteOptions['body'] = JSON.stringify(body);
  return fetch(url, deleteOptions)
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
