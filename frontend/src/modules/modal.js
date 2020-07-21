import splitText from './utils/splitText.js';

export function toggleModal() {
  const modal = document.querySelector('.modal');
  const contentModal = modal.children[0];
  const columnModal = modal.children[1];
  let targetElement;

  modal.addEventListener('click', closeHandler);
  modal.addEventListener('click', contentUpdateHandler);
  modal.addEventListener('click', columnUpdateHandler);
  document.addEventListener('dblclick', showContentModalHandler);
  document.addEventListener('dblclick', showColumnModalHandler);

  function closeHandler(e) {
    if (e.target.dataset.id !== 'modal-close') return;
    closeModal(e);
  }

  function contentUpdateHandler(e) {
    if (e.target.dataset.id !== 'modal-content-update') return;
    const textArea = e.target.previousElementSibling;
    const { title, content } = splitText(textArea.value);
    targetElement.querySelector('.todo-item-title').textContent = title;
    targetElement.querySelector('.todo-item-content').textContent = content;
    textArea.value = '';
    closeModal(e);
  }

  function columnUpdateHandler(e) {
    if (e.target.dataset.id !== 'modal-column-update') return;
    const textArea = e.target.previousElementSibling;
    targetElement.textContent = textArea.value;
    textArea.value = '';
    closeModal(e);
  }

  function showContentModalHandler(e) {
    const li = e.target.closest('li');
    if (!li) return;
    if (li.className !== 'todo-item') return;
    targetElement = li;
    contentModal.classList.remove('hidden');
    contentModal.querySelector('textarea').value =
      li.querySelector('.todo-item-title').textContent +
      li.querySelector('.todo-item-content').textContent;
  }

  function showColumnModalHandler(e) {
    if (e.target.className !== 'todo-container-header-title') return;
    const currentModal = modal.children[1];
    targetElement = e.target;
    columnModal.classList.remove('hidden');
    columnModal.querySelector('input[type="text"]').value =
      e.target.textContent;
  }

  function closeModal(e) {
    e.target.closest('.modal-container').classList.add('hidden');
  }
}
