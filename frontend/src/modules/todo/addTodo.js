import Item from '../../components/item';
import { postFetchManger } from '../utils/fetchManger.js';
import { todoApi } from '../utils/routerList.js';
import { updateCount } from '../utils/updateCount.js';
import splitText from '../utils/splitText.js';
import { addTodoLog } from '../todoLog.js';
import actionTypeList from '../utils/actionTypeList.js';

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

  const log = makeLog(data.title, data.groupTitle);
  addTodoLog(log);
}

function makeLog(title, groupTitle) {
  return {
    username: 'cc6656',
    actionType: actionTypeList.ADD,
    time: new Date().toString(),
    previousContent: null,
    presentContent: title,
    previousColumn: null,
    presentColumn: groupTitle,
  };
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

function addItem(data) {
  postFetchManger(todoApi, data)
    .then((res) => {
      if (res.status !== 200) throw new Error();
      return res.json();
    })
    .then((result) => {
      const id = result.id;
      const item = new Item();
      data.id = id;
      item.addItem(data);
    })
    .catch((e) => {
      alert('다시 해주세요');
    });
}

function fillTitleContent(listUl, { title, content }) {
  const addedItem = listUl.querySelector('li:nth-child(2)');
  //title영역
  addedItem.querySelector('.todo-item-title').textContent = title;
  //content 영역
  addedItem.querySelector('.todo-item-content > p').textContent = content;
}
