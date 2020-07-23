import { deleteFetchManager } from '../utils/fetchManger.js';

export default function deleteColumn() {
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('fa-times')) return;
    const id = e.target.closest('section').id.substr(8);
    console.log(id);
    const groupId = `todoList-${id}`;
    console.log(groupId);
    e.target.closest('section').remove();

    deleteFetchManager(`/api/todolist/${groupId}`);
  });
}
