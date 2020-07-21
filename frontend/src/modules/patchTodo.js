import { patchFetchManger } from './utils/fetchManger.js';
export default async function patchTodo(body, id) {
  try {
    const result = await patchFetchManger(`/api/todo/${id}`, body);
    if (result.status !== 200) throw new Error();
    return true;
  } catch (e) {
    alert('다시 해주세요');
  }
}
