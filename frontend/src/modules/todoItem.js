export function todoItem(title, content, author) {
  const eachTodo = `<li class="todo-item">
      <div class="todo-item-header">
          <div class="todo-item-part1">
              <div class="todo-item-logo">logo</div>
              <div class="todo-item-title">${title}</div>
          </div>
          <i class="fa fa-times-circle-o todo-item-part2 fa-lg" aria-hidden="true"></i>
      </div>
      <div class="todo-item-content">
          <p>${content}</p>
      </div>
      <div class="author"><p>Added by</p>${author}</div>
    </li>`;
  return eachTodo;
}
