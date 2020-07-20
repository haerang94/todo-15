import { deleteFetchManager } from './fetchManger';

export function deleteTodoList() {
  document.addEventListener('click', async (e) => {
    if (!e.target.classList.contains('fa-times-circle-o')) return;
    const deleteItem = e.target.parentNode.parentNode;
    console.log(deleteItem);
    await deleteFetchManager(`/api/todo/${deleteItem.id}`);

    deleteItem.remove();
  });
}
