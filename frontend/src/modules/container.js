export default class Container {
  makeContainer(id) {
    return `
     <section id="section-${id}" class="todo-container">
     <header>
         <div class="todo-container-header">
             <div class="todo-container-part1">
                 <div class="num-of-todos-${id}">0</div>
                 <p class="todo-container-header-title">새로 추가된 todo컬럼</p>
             </div>
             <div class="todo-container-part2">
                <i id="add-btn-${id}" class="fa fa-plus" aria-hidden="true"></i>
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
             </div>
         </div>
     </header>
     
     <article>
         <ul id="input-todo-${id}" class="hidden toggle">
             <li class="add-item">
                 <textarea name="textarea" style="width:95%; height:70px;" placeholder="Enter a note"></textarea>
                 <div class="add-item-btns">
                     <input class="add-item-btn" type="button" value="Add" disabled>
                     <input class="add-item-btn" type="button" value="Cancel">
                 </div>
             </li>
         </ul>
        <ul id="todoList-${id}">
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
