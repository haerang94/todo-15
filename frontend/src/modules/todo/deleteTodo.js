import { deleteFetchManager } from '../utils/fetchManger.js';
import { updateCount } from '../utils/updateCount.js';
import { todoApi } from '../utils/routerList.js';

import { addTodoLog } from '../todoLog.js';
import actionTypeList from '../utils/actionTypeList.js';

const confirmSentence = '선택하신 카드를 삭제하겠습니까?';

export default async function deleteTodo(e) {
  if (e.target.dataset.method !== 'delete') return;
  if (localStorage.getItem('authorization') !== 'true')
    return alert('쓰기모드가 아닙니다');
  if (!checkConfirm()) return;

  const deleteItem = e.target.closest('li');
  const title = deleteItem.querySelector('.todo-item-title').textContent;
  const groupTitle = deleteItem
    .closest('section')
    .querySelector('.todo-container-header-title').textContent;
  const id = deleteItem.id;
  const ul = e.target.closest('ul');

  const userId = localStorage.getItem('userId');

  try {
    const result = await deleteFetchManager(`${todoApi}/${id}`, { userId });
    if (result.status !== 200) {
      if (result.status === 401) throw new Error('쓰기 모드가 아닙니다');
      else throw new Error('다시 해주세요');
    }
    deleteItem.previousElementSibling.remove();
    deleteItem.remove();

    updateCount(ul);
    const log = makeRemoveLog(title, groupTitle);
    addTodoLog(log);
  } catch (e) {
    return alert(e);
  }
}

function makeRemoveLog(title, groupTitle) {
  return {
    username: localStorage.getItem('username'),
    actionType: actionTypeList.REMOVE,
    time: new Date().toString(),
    previousContent: null,
    presentContent: title,
    previousColumn: null,
    presentColumn: groupTitle,
  };
}

function checkConfirm() {
  return confirm(confirmSentence);
}
