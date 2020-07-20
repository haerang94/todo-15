import Item from '../components/item';
import { postFetchManger } from './fetchManger';

export default async function addTodo(e) {
  //add버튼을 눌렀을 때만 동작
  if (e.target.value !== 'Add') return;

  e.target.setAttribute('disabled', 'true');

  const inputUl = e.target.closest('ul');
  const listUl = inputUl.nextElementSibling;
  const groupId = e.target.id.substr(8);
  const textarea = inputUl.querySelector('textarea');

  const data = makeData({ listUl, inputUl, groupId, textarea });

  await addItem(data);
  clearTextarea(textarea);

  fillTitleContent(listUl, data);
  const count = listUl.querySelectorAll('li').length;
  updateCount(groupId, count);
}

function clearTextarea(textarea) {
  textarea.value = '';
  textarea.focus();
}

function updateCount(groupId, count) {
  // 아이템 개수 업데이트
  const countElement = document.querySelector(`.num-of-todos-${groupId}`);
  //text 제외한 자식 li태그 개수
  countElement.textContent = count;
}

function makeData({ listUl, inputUl, groupId, textarea }) {
  const idx = +listUl.firstElementChild.getAttribute('idx') + 1;
  const title = textarea.value.substr(0, 20); //20글자까지는 타이틀
  const content = textarea.value.substr(20);

  const data = {
    idx,
    title,
    content,
    author: 'haerang',
    groupId: `todoList-${groupId}`,
  };

  return data;
}

async function addItem(data) {
  const result = await postFetchManger('/api/todo', data);
  const id = result.id;

  const item = new Item();
  data.id = id;
  item.addItem(data);
}

function fillTitleContent(listUl, { title, content }) {
  const addedItem = listUl.firstElementChild;
  const children = addedItem.children;

  //title영역
  children[0].firstElementChild.textContent = title;
  //content 영역
  children[1].firstElementChild.textContent = content;
}
