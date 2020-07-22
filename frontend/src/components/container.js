export default class Container {
  makeContainer(id) {
    return `
     <section id="section-${id}" class="todo-container">
     <header>
         <div class="todo-container-header">
             <div class="todo-container-part1">
                 <div class="num-of-todos-${id}">0</div>
                 <p id="column-title-${id}" class="todo-container-header-title">새로 추가된 todo컬럼</p>
             </div>
             <div class="todo-container-part2">
                <i id="input-btn-${id}" class="fa fa-plus" aria-hidden="true"></i>
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
             </div>
         </div>
     </header>
     
     <article>
         <div class="scroll-${id}"></div>
         <ul id="input-todo-${id}" class="hidden toggle">
             <li class="add-item">
                 <textarea id="textarea-${id}" maxlength="500" placeholder="Enter a note"></textarea>
                 <div class="add-item-btns">
                     <input id="add-btn-${id}" class="add-item-btn" type="button" value="Add" disabled>
                     <input id="cancel-btn-${id}" class="add-item-btn" type="button" value="Cancel">
                 </div>
             </li>
         </ul>
        <ul id="todoList-${id}" class="todoitem-ul">
        </ul>
        <div id="end-of-article">끝</div>
     </article>  
     </section>`;
  }
  addContainer(id) {
    const aside = document.querySelector('aside');
    const newContainer = this.makeContainer(id);
    aside.insertAdjacentHTML('beforebegin', newContainer);
  }
}
