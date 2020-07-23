import Item from '../../components/item';
import { postFetchManger } from '../utils/fetchManger.js';
import { todoApi } from '../utils/routerList.js';
import { updateCount } from '../utils/updateCount.js';
import splitText from '../utils/splitText.js';
import Draggable from '../dragAndDrop';

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
  updateCount(listUl);

  const newItem = listUl.children[1];
  new Draggable(newItem);
}

function clearTextarea(textarea) {
  textarea.value = '';
  textarea.focus();
}

function makeData({ listUl, inputUl, groupId, textarea }) {
  const idx = +listUl.children[1].getAttribute('idx') + 1;
  const groupTitle = listUl
    .closest('section')
    .querySelector('.todo-container-header-title').textContent;
  const { title, content } = splitText(textarea.value);

  const data = {
    idx,
    title,
    content,
    author: 'haerang',
    groupId: `todoList-${groupId}`,
    groupTitle,
  };

  return data;
}

async function addItem(data) {
  const result = await postFetchManger(todoApi, data);
  const id = result.id;
  const item = new Item();
  data.id = id;
  item.addItem(data);
}

function fillTitleContent(listUl, { title, content }) {
  const addedItem = listUl.querySelector('li:nth-child(2)');
  //title영역
  addedItem.querySelector('.todo-item-title').textContent = title;
  //content 영역
  addedItem.querySelector('.todo-item-content > p').textContent = content;
}
