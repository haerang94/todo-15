import { getFetchManger } from '../modules/fetchManger.js';
import Container from './container.js';
import Item from './item.js';
import 'regenerator-runtime/runtime';

export default class Main {
  constructor(main) {
    this.main = main;
  }
  async init() {
    //컬럼 생성
    const columns = await getFetchManger('/api/todo/columns');
    this.renderConatiners(columns.data);
    //아이템 생성
    const results = await getFetchManger('/api/todo');
    this.renderItems(results);

    for (let i = 0; i < columns.data.length; i++) {
      this.countTodo(columns.data[i].groupId.substr(9));
    }
  }
  countTodo(column) {
    const num_of_items = this.main.querySelector(`#todoList-${column}`);
    const result = this.main.querySelector(`.num-of-todos-${column}`);
    //text 제외한 자식 li태그 개수
    result.textContent = num_of_items.childNodes.length - 1;
  }
  renderConatiners(data) {
    const col = new Container();
    for (let i = 0; i < data.length; i++) {
      col.addContainer(data[i].groupId.substr(9));
    }
  }
  renderItems(results) {
    const item = new Item();
    results.forEach((data) => {
      item.addItem(
        data.id,
        data.idx,
        data.groupId,
        data.title,
        data.content,
        data.author,
      );
    });
  }
}
