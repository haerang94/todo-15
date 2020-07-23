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

window.addEventListener('DOMContentLoaded', async () => {
  const main = new Main(document.querySelector('main'));
  await main.init();
  const draggables = document.querySelectorAll('.todo-item');
  for (let draggable of draggables) {
    new Draggable(draggable);
  }
  toggleInput();
  toggleBtn();
  toggleModal();
  sidebar();
  addColumn();
  deleteColumn();
});
