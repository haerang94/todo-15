export function toggleInput() {
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('fa-plus')) return;
    const id = e.target.id.split('-')[2];
    toggleHidden(id);
  });

  document.addEventListener('click', (e) => {
    if (e.target.id.substr(0, 10) !== 'cancel-btn') return;
    const id = e.target.id.substr(11);
    toggleHidden(id);
  });
}

function toggleHidden(id) {
  const inputContainer = document.getElementById(`input-todo-${id}`);
  if (inputContainer.classList.contains('hidden')) {
    inputContainer.classList.remove('hidden');
  } else {
    inputContainer.classList.add('hidden');
  }
}
