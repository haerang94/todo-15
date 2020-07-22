import { getFetchManger } from '../modules/utils/fetchManger.js';
import Container from './container.js';
import Item from './item.js';
import 'regenerator-runtime/runtime';
import addTodo from '../modules/todo/addTodo.js';
import deleteTodo from '../modules/todo/deleteTodo.js';
import { todoApi, columnApi } from '../modules/utils/routerList.js';

export default class Main {
  constructor(main) {
    this.main = main;
  }
  async init() {
    //컬럼 생성
    const columns = await getFetchManger(columnApi);
    this.renderConatiners(columns.data);
    //아이템 생성
    const results = await getFetchManger(todoApi);
    this.renderItems(results);
    //
    this.main.addEventListener('click', addTodo);
    this.main.addEventListener('click', deleteTodo);

    for (let i = 0; i < columns.data.length; i++) {
      this.countTodo(columns.data[i].groupId.substr(9));
    }
  }
  countTodo(column) {
    const num_of_items = this.main.querySelector(`#todoList-${column}`);
    const result = this.main.querySelector(`.num-of-todos-${column}`);
    //text 제외한 자식 li태그 개수
    result.textContent = num_of_items.children.length;
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
