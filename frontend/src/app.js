const css = require('./scss/main.scss');
const variable = require('./scss/_variables.scss');
import './normalize.css';
import Main from './components/main.js';
import 'regenerator-runtime/runtime';
import { toggleInput } from './modules/toggleInput.js';
import { toggleBtn } from './modules/toggleBtn';
import { addTodoList } from './modules/addTodoList';

window.addEventListener('DOMContentLoaded', async () => {
  const main = new Main(document.querySelector('main'));
  await main.init();
  toggleInput();
  toggleBtn();
  addTodoList();
});

//ex)

// 1.POST

//const addButton = document.querySelector('.add-item-btn');
// console.log(addButton);
// const body = {
//   title: 'asdf',
//   content: 'asdf',
//   author: 'asdf',
//   groupId: 'todo-3',
//   idx: 11,
// };
// addButton.addEventListener(
//   'click',
//   postFetchManger('http://localhost:3000/api/todo', body),
// );
