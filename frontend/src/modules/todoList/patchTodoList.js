import { patchFetchManger } from '../utils/fetchManger.js';
import { todoListApi } from '../utils/routerList.js';

export default async function patchTodoList(body, id) {
  try {
    const result = await patchFetchManger(`${todoListApi}/${id}`, body);
    if (result.status !== 200) throw new Error();
    return true;
  } catch (e) {
    alert('다시 해주세요');
  }
}
