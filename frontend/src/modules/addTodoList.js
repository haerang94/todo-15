import Item from '../components/item';

export function addTodoList() {
  // todo: 리팩토링... 어떻게 하지
  document.addEventListener('click', (e) => {
    if (e.target.id.substr(0, 9) === 'input-btn') {
      const groupId = e.target.id.substr(10);
      const ul = document.querySelector(`#todoList-${groupId}`);
      const id = ul.childNodes.length + 1; //새로운 id

      const textarea = document.querySelector(`#textarea-${groupId}`);
      const title = textarea.value.substr(0, 15); //15글자까지는 타이틀
      const content = textarea.value.substr(15);

      const item = new Item();
      item.addItem(id, `todoList-${groupId}`, '', '', 'sara');
      const addedItem = document.getElementById(id);
      addedItem.childNodes[1].childNodes[1].childNodes[1].innerText = title;
      addedItem.childNodes[3].childNodes[1].innerText = content;
      textarea.value = '';
      textarea.focus();
      const addBtn = textarea.nextElementSibling.firstElementChild;
      addBtn.setAttribute('disabled', 'true');
    }
  });
}
