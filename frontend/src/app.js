const css = require('./scss/main.scss');
const variable = require('./scss/_variables.scss');
import './normalize.css';
import Main from './components/main.js';
import 'regenerator-runtime/runtime';
import { toggleInput } from './modules/toggleInput.js';
import { toggleBtn } from './modules/toggleBtn';
import Item from './components/item';

window.addEventListener('DOMContentLoaded', async () => {
  const main = new Main(document.querySelector('main'));
  await main.init();
  toggleInput();
  toggleBtn();
});

document.addEventListener('click', (e) => {
  if (e.target.id.substr(0, 9) === 'input-btn') {
    const groupId = e.target.id.substr(10);
    const ul = document.querySelector(`#todoList-${groupId}`);
    const id = ul.childNodes.length + 1; //새로운 id
    const item = new Item();
    const textarea = document.querySelector(`#textarea-${groupId}`);
    const title = textarea.value.substr(0, 15); //15글자까지는 타이틀
    const content = textarea.value.substr(15);
    item.addItem(id, `todoList-${groupId}`, '', '', 'sara');
    const addedItem = document.getElementById(id);
    addedItem.childNodes[1].childNodes[1].childNodes[1].innerText = title;
    addedItem.childNodes[3].childNodes[1].innerText = content;
  }
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
