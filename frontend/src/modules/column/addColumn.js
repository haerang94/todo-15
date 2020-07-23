import Container from '../../components/container';

export default function addColumn() {
  document.getElementById('add-column').addEventListener('click', () => {
    const newColumn = new Container();
    const columnLists = document.querySelectorAll('.todo-container');
    const newId = +columnLists[columnLists.length - 1].id.substr(8) + 1;
    const data = {
      groupId: `todoList-${newId}`,
      groupTitle: '새로운 컬럼',
    };
    newColumn.addContainer(data);
  });
}
