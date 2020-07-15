export default class Item {
  makeItem(title, content, author) {
    return `<li class="todo-item">
        <div class="todo-item-header">
            <div class="todo-item-part1">
                <div class="todo-item-logo"><i class="fa fa-list-alt" aria-hidden="true" fa-lg></i></div>
                <div class="todo-item-title">${title}</div>
            </div>
            <i class="fa fa-times-circle-o todo-item-part2 fa-lg" aria-hidden="true"></i>
        </div>
        <div class="todo-item-content">
            <p>${content}</p>
        </div>
        <div class="author"><p>Added by</p>${author}</div>
      </li>`;
  }

  addItem(id, title, content, author) {
    const ul = document.querySelector(`#ul-${id}`);
    const item = this.makeItem(title, content, author);
    ul.insertAdjacentHTML('beforeend', item);
  }
}
