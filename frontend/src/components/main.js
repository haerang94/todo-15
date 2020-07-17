import { getFetchManger } from '../modules/fetchManger.js';
import Container from './container.js';
import Item from './item.js';
import 'regenerator-runtime/runtime';

export default class Main {
  constructor(main) {
    this.main = main;
  }
  async init() {
    const num_of_columns = await getFetchManger('/api/todo/count');
    this.renderConatiners(num_of_columns);

    const results = await getFetchManger('/api/todo');
    this.renderItems(results);

    for (let i = 0; i < num_of_columns; i++) {
      this.countTodo(i);
    }
  }
  countTodo(column) {
    const num_of_items = this.main.querySelector(`#todoList-${column + 1}`);
    const result = this.main.querySelector(`.num-of-todos-${column + 1}`);
    //text 제외한 자식 li태그 개수
    result.textContent = num_of_items.childNodes.length - 1;
  }
  renderConatiners(num_of_columns) {
    const col = new Container();
    for (let i = 0; i < num_of_columns; i++) {
      col.addContainer(i + 1);
    }
  }
  renderItems(results) {
    const item = new Item();
    results.forEach((data) => {
      item.addItem(
        data.id,
        data.groupId,
        data.title,
        data.content,
        data.author,
      );
    });
  }
}
