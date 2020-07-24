const css = require('./scss/main.scss');
const variable = require('./scss/_variables.scss');
import './normalize.css';
import Main from './components/main.js';
import Draggable from './modules/dragAndDrop';
import 'regenerator-runtime/runtime';
import { toggleInput } from './modules/toggleInput.js';
import { toggleBtn } from './modules/toggleBtn';
import { toggleModal } from './modules/modal';
import sidebar from './modules/sidebar';
import addColumn from './modules/column/addColumn';
import deleteColumn from './modules/column/deleteColumn';
import login from './modules/login.js';
import { loginRender, logoutRender } from './modules/utils/loginRender.js';
window.addEventListener('DOMContentLoaded', async () => {
  document.addEventListener('contextmenu', (e) => {
    return e.preventDefault();
  });
  const beforelogin = document.getElementById('beforelogin');
  const afterlogin = document.getElementById('afterlogin');

  const storedUsername = localStorage.getItem('username');
  if (storedUsername === '' || storedUsername === null) {
    beforelogin.style.display = 'flex';
    afterlogin.classList.add('hidden');
    loginRender();
  } else {
    beforelogin.style.display = 'none';
    afterlogin.classList.remove('hidden');
    logoutRender();
  }

  const main = new Main(document.querySelector('main'));
  await main.init();
  const draggables = document.querySelectorAll('.todo-item');
  for (let draggable of draggables) {
    new Draggable(draggable);

    const beforelogin = document.getElementById('beforelogin');
    const afterlogin = document.getElementById('afterlogin');
    const storedUsername = localStorage.getItem('username');
    const Header = document.querySelector('header');
    if (storedUsername === '' || storedUsername === null) {
      //로그인 안함
      beforelogin.style.display = 'flex';
      afterlogin.classList.add('hidden');
      Header.querySelector('p').classList.add('hidden');
      Header.querySelector('form').style.display = 'flex';
    } else {
      //  로그인 함
      beforelogin.style.display = 'none';
      afterlogin.classList.remove('hidden');
      Header.querySelector('p').classList.remove('hidden');
      Header.querySelector('form').style.display = 'none';
    }
  }
  login();
  toggleInput();
  toggleBtn();
  toggleModal();
  sidebar();
  addColumn();
  deleteColumn();
});
