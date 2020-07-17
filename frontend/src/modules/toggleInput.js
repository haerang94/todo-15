export function toggle() {
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('fa-plus')) return;
    const id = e.target.id.split('-')[2];
    const inputContainer = document.getElementById(`input-todo-${id}`);
    if (inputContainer.classList.contains('hidden')) {
      inputContainer.classList.remove('hidden');
    } else {
      inputContainer.classList.add('hidden');
    }
  });
}
