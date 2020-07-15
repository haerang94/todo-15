import { todoItem } from './todoItem.js';

export function renderTodo(status, title, content, author) {
  const ul = document.querySelector(`#${status}`);
  const item = todoItem(title, content, author);
  ul.insertAdjacentHTML('beforeend', item);
}
