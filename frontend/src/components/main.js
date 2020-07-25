import { getFetchManger } from '../modules/utils/fetchManger.js';
import Container from './container.js';
import Item from './item.js';
import 'regenerator-runtime/runtime';
import addTodo from '../modules/todo/addTodo.js';
import deleteTodo from '../modules/todo/deleteTodo.js';
import {
  todoApi,
  todoListApi,
  todoLogApi,
} from '../modules/utils/routerList.js';
import { getTodoLog, updateTodoLog } from '../modules/todoLog.js';

export default class Main {
  constructor(main) {
    this.main = main;
  }
  async init() {
    //컬럼 생성
    const columns = await getFetchManger(todoListApi);
    this.renderConatiners(columns.data);
    //아이템 생성
    const results = await getFetchManger(todoApi);
    this.renderItems(results);
    //
    getTodoLog();
    setInterval(async function () {
      updateTodoLog();
    }, 60000);

    this.main.addEventListener('click', addTodo);
    this.main.addEventListener('click', deleteTodo);

    for (let i = 0; i < columns.data.length; i++) {
      this.countTodo(columns.data[i].groupId);
    }
  }
  countTodo(groupId) {
    const ul = this.main.querySelector(`#${groupId}`);
    const section = ul.closest('section');
    const result = section.querySelector('header > div> div > div');
    //text 제외한 자식 li태그 개수
    result.textContent = ul.querySelectorAll('.todo-item').length - 1;
  }
  renderConatiners(dataList) {
    const col = new Container();
    dataList.forEach((data) => {
      col.addContainer(data);
    });
  }
  renderItems(results) {
    const item = new Item();
    results.forEach(({ id, idx, groupId, title, content, author }) => {
      item.addItem({ id, idx, groupId, title, content, author });
    });
  }
}
