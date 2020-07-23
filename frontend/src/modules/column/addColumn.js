import Container from '../../components/container';
import { postFetchManger } from '../utils/fetchManger.js';

export default function addColumn() {
  document.getElementById('add-column').addEventListener('click', () => {
    const newColumn = new Container();
    const columnLists = document.querySelectorAll('.todo-container');
    const newId = +columnLists[columnLists.length - 1].id.substr(8) + 1;
    const data = {
      groupId: `todoList-${newId}`,
      groupTitle: '새로운 컬럼',
    };

    postFetchManger('/api/todolist', data)
      .then((res) => {
        if (res.status !== 200) throw new Error();
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    newColumn.addContainer(data);
  });
}
