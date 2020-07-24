import { postFetchManger } from './utils/fetchManger.js';
import { userApi } from './utils/routerList.js';
export default function login() {
  const Header = document.querySelector('header');
  Header.querySelector("input[type='button']").addEventListener(
    'click',
    loginHandler,
  );
  function loginHandler(e) {
    e.preventDefault();

    const username = Header.querySelector('#username').value;
    const authorziation = Header.querySelector('#authorization').checked;

    postLogin(username, authorziation);
  }
  function postLogin(username, authorziation) {
    postFetchManger(userApi, { username, authorziation })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.setItem('authorization', data.authorization);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data.id);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
