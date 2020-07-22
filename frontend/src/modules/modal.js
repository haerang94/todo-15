import splitText from './utils/splitText.js';
import patchTodo from './todo/patchTodo.js';
import patchColumn from './column/patchColumn.js';

export function toggleModal() {
  const modal = document.querySelector('.modal');
  const contentModal = modal.children[0];
  const columnModal = modal.children[1];
  let targetElement;
  let liId;
  let groupId;

  modal.addEventListener('click', closeHandler);
  modal.addEventListener('click', contentUpdateHandler);
  modal.addEventListener('click', columnUpdateHandler);
  document.addEventListener('dblclick', showContentModalHandler);
  document.addEventListener('dblclick', showColumnModalHandler);

  function closeHandler(e) {
    if (e.target.dataset.id !== 'modal-close') return;
    closeModal(e);
  }

  async function contentUpdateHandler(e) {
    if (e.target.dataset.id !== 'modal-content-update') return;
    const textArea = e.target.previousElementSibling;
    const { title, content } = splitText(textArea.value);
    const result = await patchTodo({ title, content, author: 'cc6656' }, liId);
    if (!result) return;
    updateContentText(title, content);
    textArea.value = '';
    closeModal(e);
  }

  function updateContentText(title, content) {
    targetElement.querySelector('.todo-item-title').textContent = title;
    targetElement.querySelector('.todo-item-content > p').textContent = content;
  }

  async function columnUpdateHandler(e) {
    if (e.target.dataset.id !== 'modal-column-update') return;
    const textArea = e.target.previousElementSibling;
    const groupTitle = textArea.value;
    const result = await patchColumn({ groupTitle }, groupId);
    if (!result) return;
    targetElement.textContent = groupTitle;
    textArea.value = '';
    closeModal(e);
  }

  function showContentModalHandler(e) {
    // console.log(liId);
    const li = e.target.closest('li');
    if (!li || li.className !== 'todo-item') return;
    liId = li.getAttribute('id');
    targetElement = li;
    contentModal.classList.remove('hidden');
    contentModal.querySelector('textarea').value =
      li.querySelector('.todo-item-title').textContent +
      li.querySelector('.todo-item-content').textContent;
  }

  function showColumnModalHandler(e) {
    if (e.target.className !== 'todo-container-header-title') return;
    const currentModal = modal.children[1];
    groupId = e.target.id.substr(13);
    targetElement = e.target;
    columnModal.classList.remove('hidden');
    columnModal.querySelector('input[type="text"]').value =
      e.target.textContent;
  }

  function closeModal(e) {
    e.target.closest('.modal-container').classList.add('hidden');
  }
}
