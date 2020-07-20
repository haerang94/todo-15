export function toggleModal() {
  const modalContainer = document.querySelector('.modal-container');
  modalContainer.addEventListener('click', (e) => {
    if (
      !e.target.classList.contains('close-modal-btn') &&
      e.target.dataset.method !== 'update'
    )
      return;
    modalContainer.classList.add('hidden');
  });

  document.addEventListener('dblclick', (e) => {
    if (
      !e.target.classList.contains('todo-item') &&
      !e.target.parentNode.classList.contains('todo-item')
    )
      return;
    modalContainer.classList.remove('hidden');
  });
}
