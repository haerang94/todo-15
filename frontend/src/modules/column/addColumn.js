import Container from '../../components/container';
import { postFetchManger } from '../utils/fetchManger.js';

export default function addColumn() {
  document.getElementById('add-column').addEventListener('click', () => {
    if (localStorage.getItem('authorization') !== 'true')
      return alert('쓰기모드가 아닙니다');
    const newColumn = new Container();
    const columnLists = document.querySelectorAll('.todo-container');
    let newId = 1;
    if (columnLists.length !== 0) {
      newId = +columnLists[columnLists.length - 1].id.substr(8) + 1;
    }
    const data = {
      groupId: `todoList-${newId}`,
      groupTitle: '새로운 컬럼',
      userId: localStorage.getItem('userId'),
    };

    postFetchManger('/api/todolist', data)
      .then((res) => {
        if (res.status !== 200) {
          if (res.status === 401) throw new Error('쓰기 모드가 아닙니다');
          else throw new Error('다시 해주세요');
        }
        return res;
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        alert(e);
      });

    newColumn.addContainer(data);
  });
}
