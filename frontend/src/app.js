const css = require('./scss/main.scss');
const variable = require('./scss/_variables.scss');
import './normalize.css';
import { toggle } from './modules/toggleInput.js';
import Container from './modules/container.js';
import { getFetchManger, postFetchManger } from './modules/fetchManger.js';
import Item from './modules/item';
// import Item from './modules/item.js';

window.addEventListener('DOMContentLoaded', () => {
  getFetchManger('/api/todo/count')
    .then((res) => res.json())
    .then((data) => {
      const col = new Container();
      for (let i = 0; i < data; i++) {
        col.addContainer(i + 1);
      }
    })
    .catch((e) => console.log(e));

  getFetchManger('/api/todo')
    .then((res) => res.json())
    .then((data) => {
      const item = new Item();
      for (let i = 0; i < data.length; i++) {
        let groupId = data[i].groupId.split('-')[1];
        item.addItem(groupId, data[i].title, data[i].content, data[i].author); // todo:id추가하는 것 작성 필요
      }
    })
    .catch((e) => console.log(e));
});

toggle();

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
