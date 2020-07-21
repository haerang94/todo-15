import { deleteFetchManager } from './fetchManger';
import { updateCount } from './utils/updateCount.js';
export default async function deleteTodo(e) {
  if (e.target.dataset.method !== 'delete') return;
  const deleteItem = e.target.closest('li');
  const id = deleteItem.id;
  const ul = e.target.closest('ul');
  try {
    const result = await deleteFetchManager(`/api/todo/${id}`);
    deleteItem.remove();
    updateCount(ul);
  } catch (e) {
    console.log(e);
    alert('다시 시도해주세요');
  }
}
