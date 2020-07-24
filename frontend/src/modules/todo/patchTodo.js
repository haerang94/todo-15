import { patchFetchManger } from '../utils/fetchManger.js';
import { todoApi } from '../utils/routerList.js';

import { addTodoLog } from '../todoLog.js';
import actionTypeList from '../utils/actionTypeList.js';

export default async function patchTodo(body, id, targetElement) {
  const userId = localStorage.getItem('userId');
  body['userId'] = userId;
  try {
    const result = await patchFetchManger(`${todoApi}/${id}`, body);
    if (result.status !== 200) {
      if (result.status === 401) throw new Error('쓰기 모드가 아닙니다');
      else throw new Error('다시 해주세요');
    }
    const { title, content, author } = body;
    const previousContent = targetElement.querySelector('.todo-item-title')
      .textContent;

    updateContentText(targetElement, title, content);

    const log = makeUpdateLog(previousContent, title);
    addTodoLog(log);
    return true;
  } catch (e) {
    alert(e);
  }
}

function updateContentText(targetElement, title, content) {
  targetElement.querySelector('.todo-item-title').textContent = title;
  targetElement.querySelector('.todo-item-content > p').textContent = content;
}

function makeUpdateLog(previousContent, presentContent) {
  return {
    username: localStorage.getItem('username'),
    actionType: actionTypeList.UPDATE,
    time: new Date().toString(),
    previousContent,
    presentContent,
    previousColumn: null,
    presentColumn: null,
  };
}
