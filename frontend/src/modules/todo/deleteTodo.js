import { deleteFetchManager } from '../utils/fetchManger.js';
import { updateCount } from '../utils/updateCount.js';
import { todoApi } from '../utils/routerList.js';

import { addTodoLog } from '../todoLog.js';
import actionTypeList from '../utils/actionTypeList.js';

const confirmSentence = '선택하신 카드를 삭제하겠습니까?';

export default async function deleteTodo(e) {
  if (e.target.dataset.method !== 'delete') return;
  if (!checkConfirm()) return;

  const deleteItem = e.target.closest('li');
  const title = deleteItem.querySelector('.todo-item-title').textContent;
  const groupTitle = deleteItem
    .closest('section')
    .querySelector('.todo-container-header-title').textContent;
  const id = deleteItem.id;
  const ul = e.target.closest('ul');

  try {
    const result = await deleteFetchManager(`${todoApi}/${id}`);
    if (result.status !== 200) throw new Error();
    deleteItem.previousElementSibling.remove();
    deleteItem.remove();

    updateCount(ul);
    const log = makeRemoveLog(title, groupTitle);
    addTodoLog(log);
  } catch (e) {
    alert('다시 시도해주세요');
  }
}

function makeRemoveLog(title, groupTitle) {
  return {
    username: 'cc6656',
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
