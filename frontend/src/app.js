const css = require('./scss/main.scss');
const variable = require('./scss/_variables.scss');
import './normalize.css';
import { toggle } from './modules/toggleInput.js';
// import Container from './modules/container.js';
import Container from './modules/container.js';
import { getFetchManger, postFetchManger } from './modules/fetchManger.js';
import Item from './modules/item';
// import Item from './modules/item.js';

window.addEventListener('DOMContentLoaded', () => {
  getFetchManger('http://localhost:3000/api/todo')
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let id = data[i].groupId.split('-')[1];
        new Item().addItem(id, data[i].title, data[i].content, data[i].author);
      }
    })
    .catch((e) => console.log(e));

  // todo:todo의 모든 아이템을 순환하는 반복문 추가하기
  //칼럼 추가하는 함수
  //   new Container().addContainer('4');
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
