import { patchFetchManger } from '../utils/fetchManger.js';
import { columnApi } from '../utils/routerList.js';

export default async function patchTodoList(body, groupId) {
  try {
    const result = await patchFetchManger(`${todoListApi}/${groupId}`, body);
    if (result.status !== 200) throw new Error();
    return true;
  } catch (e) {
    alert('다시 해주세요');
  }
}
