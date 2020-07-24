import Item from '../../components/item';
import { postFetchManger } from '../utils/fetchManger.js';
import { todoApi } from '../utils/routerList.js';
import { updateCount } from '../utils/updateCount.js';
import splitText from '../utils/splitText.js';
import Draggable from '../dragAndDrop';
import { addTodoLog } from '../todoLog.js';
import actionTypeList from '../utils/actionTypeList.js';

export default async function addTodo(e) {
  //add버튼을 눌렀을 때만 동작
  if (e.target.value !== 'Add') return;

  e.target.setAttribute('disabled', 'true');

  const inputUl = e.target.closest('ul');
  const listUl = inputUl.nextElementSibling;
  const groupId = listUl.id;
  const textarea = inputUl.querySelector('textarea');
  const data = makeData({ listUl, inputUl, groupId, textarea });
  const result = await addItem(data);

  if (!result) return;

  const id = result.id;
  const item = new Item();
  data.id = id;
  item.addItem(data);
  clearTextarea(textarea);

  fillTitleContent(listUl, data);
  updateCount(listUl);

  const newItem = listUl.children[1];
  new Draggable(newItem);
  const log = makeLog(data.title, data.groupTitle);
  addTodoLog(log);
}

function makeLog(title, groupTitle) {
  return {
    username: localStorage.getItem('username'),
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
  const userId = localStorage.getItem('userId');
  const data = {
    idx,
    title,
    content,
    author: localStorage.getItem('username'),
    groupId,
    groupTitle,
    userId,
  };

  return data;
}

function addItem(data) {
  return postFetchManger(todoApi, data)
    .then((res) => {
      if (res.status !== 200) {
        if (res.status === 401) throw new Error('쓰기 모드가 아닙니다');
        else throw new Error('다시 해주세요');
      }
      return res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((e) => {
      alert(e);
    });
}

function fillTitleContent(listUl, { title, content }) {
  // console.log(listUl);
  const addedItem = listUl.querySelector('.todo-item');
  //title영역
  addedItem.querySelector('.todo-item-title').textContent = title;
  //content 영역
  addedItem.querySelector('.todo-item-content > p').textContent = content;
}
