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

function getFetchManger(url) {
  return fetch(baseUrl + url, getOptions);
}

function postFetchManger(url, body) {
  postOptions['body'] = JSON.stringify(body);
  return fetch(baseUrl + url, postOptions);
}

// test

export { getFetchManger, postFetchManger };
