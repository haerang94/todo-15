import { postFetchManger } from './utils/fetchManger.js';
import { userApi } from './utils/routerList.js';
export default function login() {
  document.getElementById('login-btn').addEventListener('click', loginHandler);
  function loginHandler(e) {
    e.preventDefault();

    const Header = document.querySelector('header');
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
        localStorage.setItem('authorization', authorziation);
        localStorage.setItem('username', username);
        localStorage.setItem('userId', data.id);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
