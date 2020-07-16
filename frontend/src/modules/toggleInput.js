export function toggle() {
  document.addEventListener('click', (e) => {
    const id = e.target.id.split('-')[2];
    const inputContainer = document.getElementById(`input-${id}`);
    if (inputContainer.classList.contains('hidden')) {
      inputContainer.classList.remove('hidden');
    } else {
      inputContainer.classList.add('hidden');
    }
  });
}
