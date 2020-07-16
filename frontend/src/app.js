const css = require('./scss/main.scss');
const variable = require('./scss/_variables.scss');
import './normalize.css';
import Container from './modules/container.js';
import { getFetchManger, postFetchManger } from './modules/fetchManger.js';
// import Item from './modules/item.js';

window.addEventListener('DOMContentLoaded', () => {
  // todo:todo의 모든 아이템을 순환하는 반복문 추가하기
  //칼럼 추가하는 함수
  //   new Container().addContainer('4');
  // 각 투두 아이템을 추가하는 함수
  //   new Item().addItem('1', '타이틀', '컨텐츠', '작가');
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

// 2. GET

// getFetchManger('http://localhost:3000/api/todo')
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));
