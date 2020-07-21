const css = require('./scss/main.scss');
const variable = require('./scss/_variables.scss');
import './normalize.css';
import Main from './components/main.js';
import 'regenerator-runtime/runtime';
import { toggleInput } from './modules/toggleInput.js';
import { toggleBtn } from './modules/toggleBtn';
import { toggleModal } from './modules/modal';
import { openSidebar, closeSidebar } from './modules/sidebar';

window.addEventListener('DOMContentLoaded', async () => {
  const main = new Main(document.querySelector('main'));
  await main.init();
  toggleInput();
  toggleBtn();
  toggleModal();
  openSidebar();
  closeSidebar();
});
