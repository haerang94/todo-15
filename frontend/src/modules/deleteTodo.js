import { deleteFetchManager } from './utils/fetchManger.js';
import { updateCount } from './utils/updateCount.js';
import { todoApi, columnApi } from './utils/routerList.js';
const confirmSentence = '선택하신 카드를 삭제하겠습니까?';
export default async function deleteTodo(e) {
  if (e.target.dataset.method !== 'delete') return;
  if (!checkConfirm()) return;

  const deleteItem = e.target.closest('li');
  const id = deleteItem.id;
  const ul = e.target.closest('ul');

  try {
    const result = await deleteFetchManager(`${todoApi}/${id}`);
    if (result.status !== 200) throw new Error();
    deleteItem.remove();
    updateCount(ul);
  } catch (e) {
    alert('다시 시도해주세요');
  }
}

function checkConfirm() {
  return confirm(confirmSentence);
}
