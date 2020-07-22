import { patchFetchManger } from '../utils/fetchManger.js';
import { todoApi } from '../utils/routerList.js';

import { addTodoLog } from '../todoLog.js';
import actionTypeList from '../utils/actionTypeList.js';

export default async function patchTodo(body, id, targetElement) {
  try {
    const result = await patchFetchManger(`${todoApi}/${id}`, body);
    if (result.status !== 200) throw new Error();
    const { title, content, author } = body;
    const previousContent = targetElement.querySelector('.todo-item-title')
      .textContent;

    updateContentText(targetElement, title, content);

    const log = makeUpdateLog(previousContent, content);
    addTodoLog(log);
    return true;
  } catch (e) {
    alert('다시 해주세요');
  }
}

function updateContentText(targetElement, title, content) {
  targetElement.querySelector('.todo-item-title').textContent = title;
  targetElement.querySelector('.todo-item-content > p').textContent = content;
}

function makeUpdateLog(previousContent, presentContent) {
  return {
    username: 'cc6656',
    actionType: actionTypeList.REMOVE,
    time: new Date().toString(),
    previousContent,
    presentContent,
    previousColumn: null,
    presentColumn: null,
  };
}
