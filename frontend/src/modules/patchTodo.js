import { patchFetchManger } from './utils/fetchManger.js';
import { todoApi } from './utils/routerList.js';
export default async function patchTodo(body, id) {
  try {
    const result = await patchFetchManger(`${todoApi}/${id}`, body);
    if (result.status !== 200) throw new Error();
    return true;
  } catch (e) {
    alert('다시 해주세요');
  }
}
