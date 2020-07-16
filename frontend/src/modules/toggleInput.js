export function toggle() {
  const togglePlusBtn = document.querySelectorAll('.fa-plus-square-o');

  togglePlusBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      //   console.log(e.target);
      const columnId = e.target.parentNode.parentNode.parentNode.parentNode.id;
      const inputContainer = document.getElementById(`input-${columnId}`);
      //   console.log(inputContainer);
      if (inputContainer.classList.contains('hidden')) {
        inputContainer.classList.remove('hidden');
      } else {
        inputContainer.classList.add('hidden');
      }
    });
  });
}
