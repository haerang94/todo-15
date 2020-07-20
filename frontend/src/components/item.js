export default class Item {
  makeItem(id, idx, title, content, author) {
    return `<li id="${id}" idx=${idx} class="todo-item">
        <div class="todo-item-header">
            <div class="todo-item-part1">
                <div class="todo-item-logo">
                <i class="fa fa-list-alt" aria-hidden="true" fa-lg></i></div>
                <div class="todo-item-title">${title}</div>
            </div>
            <i class="fa fa-times-circle-o todo-item-part2 fa-lg" aria-hidden="true" data-method="delete"></i>
        </div>
        <div class="todo-item-content">
            <p>${content}</p>
        </div>
        <div class="author"><p>Added by</p>${author}</div>
      </li>`;
  }

  addItem({ id, idx, groupId, title, content, author }) {
    const ul = document.querySelector(`#${groupId}`);
    const item = this.makeItem(id, idx, title, content, author);
    ul.insertAdjacentHTML('afterbegin', item);
  }
}
