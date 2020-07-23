import { deleteFetchManager } from '../utils/fetchManger.js';
import { todoListApi } from '../utils/routerList';

export default function deleteColumn() {
  document.addEventListener('click', async (e) => {
    if (!e.target.classList.contains('fa-times')) return;
    const id = e.target.closest('section').id.substr(8);
    console.log(id);
    const groupId = `todoList-${id}`;
    console.log(groupId);

    try {
      const result = await deleteFetchManager(`${todoListApi}/${groupId}`);
      if (result.status !== 200) throw new Error();
      e.target.closest('section').remove();
    } catch (e) {
      alert('다시 시도해주세요');
    }
  });
}
