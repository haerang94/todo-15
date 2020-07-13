// import MainService from './mainService.js';
import './app.css';
import congrats from './congrats.gif';

window.addEventListener('DOMContentLoaded', () => {
  const targetEl = document.querySelector('#log');
  const testHTML = `<span>test</span>
    <img src="${congrats}" alt="congrats" />`;
  targetEl.innerHTML = testHTML;
});
