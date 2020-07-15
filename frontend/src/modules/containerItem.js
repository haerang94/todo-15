export function containerItem() {
  const container = `
    <section id="1" class="todo-container">
    <header>
        <div class="todo-container-header">
            <div class="todo-container-part1">
                <div class="num-of-todos">0</div>
                <p class="todo-container-header-title">새로 추가된 todo컬럼</p>
            </div>
            <div class="todo-container-part2">
                <i class="fa fa-plus-square-o fa-lg" aria-hidden="true"></i>
                <i class="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i>
            </div>
        </div>
    </header>
    <article>
        <ul>
            <li class="add-item">
                <textarea style="width:100%; height:70px;" placeholder="Enter a note"></textarea>
                <div class="add-item-btns">
                    <input class="add-item-btn" type="button" value="Add">
                    <input class="add-item-btn" type="button" value="Cancel">
                </div>
            </li>
        </ul>
       <ul id="todo">
       </ul>
    </article>
    </section>`;
  return container;
}
