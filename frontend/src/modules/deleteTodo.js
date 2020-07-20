import { deleteFetchManager } from './fetchManger';

export default async function deleteTodo(e) {
  if (e.target.dataset.method !== 'delete') return;
  const deleteItem = e.target.closest('li');
  const id = deleteItem.id;
  try {
    await deleteFetchManager(`/api/todo/${id}`);
    deleteItem.remove();
  } catch (e) {
    alert('다시 시도해주세요');
  }
}
