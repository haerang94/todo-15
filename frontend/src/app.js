const css = require('./scss/main.scss');
const variable = require('./scss/_variables.scss');
import './normalize.css';
import { toggle } from './modules/toggleInput.js';
import Main from './components/main.js';
import 'regenerator-runtime/runtime';

window.addEventListener('DOMContentLoaded', async () => {
  const main = new Main(document.querySelector('main'));
  await main.init();
  toggle();
});
