import splitText from './utils/splitText.js';
import patchTodo from './todo/patchTodo.js';
import patchTodoList from './todoList/patchTodoList';

export function toggleModal() {
  const modal = document.querySelector('.modal');
  const contentModal = modal.children[0];
  const columnModal = modal.children[1];
  let targetElement;
  let liId;
  let id;

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
    const result = await patchTodo(
      { title, content, author: 'cc6656' },
      liId,
      targetElement,
    );
    if (!result) return;
    textArea.value = '';
    closeModal(e);
  }

  async function columnUpdateHandler(e) {
    if (e.target.dataset.id !== 'modal-column-update') return;
    const textArea = e.target.previousElementSibling;
    const groupTitle = textArea.value;
    const groupId = `todoList-${id}`;
    const result = await patchTodoList({ groupTitle }, groupId);
    if (!result) return;
    targetElement.textContent = groupTitle;
    textArea.value = '';
    closeModal(e);
  }

  function showContentModalHandler(e) {
    const li = e.target.closest('li');
    if (!li || li.className !== 'todo-item') return;
    liId = li.getAttribute('id');
    targetElement = li;
    renderContentModal(li);
  }

  function renderContentModal(li) {
    const textArea = contentModal.querySelector('textarea');
    const content =
      li.querySelector('.todo-item-title').textContent +
      li.querySelector('.todo-item-content').textContent;
    renderModal(contentModal, textArea, content);
  }

  function showColumnModalHandler(e) {
    if (e.target.className !== 'todo-container-header-title') return;
    id = e.target.id.substr(13);
    targetElement = e.target;
    renderColumnModal(e);
  }

  function renderColumnModal(e) {
    const inputText = columnModal.querySelector('input[type="text"]');
    renderModal(columnModal, inputText, e.target.textContent);
  }

  function renderModal(modal, element, content) {
    modal.classList.remove('hidden');
    element.value = content;
    element.select();
  }

  function closeModal(e) {
    e.target.closest('.modal-container').classList.add('hidden');
  }
}
