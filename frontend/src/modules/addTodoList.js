import Item from '../components/item';
import Main from '../components/main';

export function addTodoList() {
  // todo: 리팩토링... 어떻게 하지
  document.addEventListener('click', async (e) => {
    if (e.target.id.substr(0, 9) !== 'input-btn') return;
    const groupId = e.target.id.substr(10);
    const ul = document.querySelector(`#todoList-${groupId}`);
    const id = ul.childNodes.length + 1; //새로운 id

    const textarea = document.querySelector(`#textarea-${groupId}`);
    const title = textarea.value.substr(0, 20); //20글자까지는 타이틀
    const content = textarea.value.substr(20);

    const item = new Item();
    item.addItem(id, `todoList-${groupId}`, '', '', 'sara');
    const addedItem = document.getElementById(id);
    //title영역
    addedItem.childNodes[1].childNodes[1].childNodes[3].innerText = title;
    //content 영역
    addedItem.childNodes[3].childNodes[1].innerText = content;
    textarea.value = '';
    textarea.focus();
    const addBtn = textarea.nextElementSibling.firstElementChild;
    addBtn.setAttribute('disabled', 'true');

    // 컬럼 개수 업데이트
    const num_of_items = document.querySelector(`#todoList-${groupId}`);
    const result = document.querySelector(`.num-of-todos-${groupId}`);
    //text 제외한 자식 li태그 개수
    result.textContent = num_of_items.childNodes.length - 1;
  });
}
