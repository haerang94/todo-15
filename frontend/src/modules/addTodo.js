import Item from '../components/item';
import { postFetchManger } from './utils/fetchManger.js';
import { updateCount } from './utils/updateCount.js';
import splitText from './utils/splitText.js';

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
  updateCount(listUl);
}

function clearTextarea(textarea) {
  textarea.value = '';
  textarea.focus();
}

function makeData({ listUl, inputUl, groupId, textarea }) {
  const idx = +listUl.firstElementChild.getAttribute('idx') + 1;
  const { title, content } = splitText(textarea.value);

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
  children[0].querySelector('.todo-item-title').textContent = title;
  //content 영역
  children[1].firstElementChild.textContent = content;
}
