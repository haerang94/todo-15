import { deleteFetchManager } from '../utils/fetchManger.js';
import { todoListApi } from '../utils/routerList';

export default function deleteColumn() {
  document.addEventListener('click', async (e) => {
    if (!e.target.classList.contains('fa-times')) return;
    if (localStorage.getItem('authorization') !== 'true')
      return alert('쓰기모드가 아닙니다');
    const id = e.target.closest('section').id.substr(8);
    console.log(id);
    const groupId = `todoList-${id}`;
    console.log(groupId);
    const userId = localStorage.getItem('userId');
    try {
      const result = await deleteFetchManager(`${todoListApi}/${groupId}`, {
        userId,
      });
      if (result.status !== 200) {
        if (result.status === 401) throw new Error('쓰기 모드가 아닙니다');
        else throw new Error('다시 해주세요');
      }
      e.target.closest('section').remove();
    } catch (e) {
      return alert(e);
    }
  });
}
