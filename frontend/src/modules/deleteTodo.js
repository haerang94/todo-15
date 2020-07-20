import { deleteFetchManager } from './fetchManger';

export default async function deleteTodo(e) {
  if (e.target.dataset.method !== 'delete') return;
  const deleteItem = e.target.closest('li');
  const id = deleteItem.id;
  try {
    const result = await deleteFetchManager(`/api/todo/${id}`);
    if (result.status !== 200) return alert('다시 시도해주세요');
    deleteItem.remove();
  } catch (e) {
    alert('다시 시도해주세요');
  }
}
