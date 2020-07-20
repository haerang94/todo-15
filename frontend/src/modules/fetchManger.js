const baseUrl = 'http://localhost:3000';

const getOptions = {
  method: 'GET',
  headers: {
    Origin: 'http://localhost:9000',
  },
};

const postOptions = {
  method: 'POST',
  headers: {
    Origin: 'http://localhost:9000',
    'Content-Type': 'application/json',
  },
};

const deleteOptions = {
  method: 'DELETE',
  headers: {
    Origin: 'http://localhost:9000',
  },
};

function getFetchManger(url) {
  return fetch(baseUrl + url, getOptions).then((res) => res.json());
}

function postFetchManger(url, body) {
  postOptions['body'] = JSON.stringify(body);
  return fetch(baseUrl + url, postOptions)
    .then((res) => res) // 이미 json형태로 반환되어 json메소드를 붙이면 에러가 난다
    .catch((e) => console.log(e));
}

function deleteFetchManager(url) {
  return fetch(baseUrl + url, deleteOptions)
    .then((res) => res) //
    .catch((e) => console.log(e));
}

// test

export { getFetchManger, postFetchManger, deleteFetchManager };
