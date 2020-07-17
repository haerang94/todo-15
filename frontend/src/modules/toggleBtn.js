export function toggleBtn() {
  document.addEventListener('input', (e) => {
    if (e.target.type === 'textarea') {
      const textarea = e.target;
      const addBtn = textarea.nextElementSibling.firstElementChild;
      if (textarea.value.length !== '') {
        addBtn.removeAttribute('disabled');
      } else {
        addBtn.setAttribute('disabled', 'true');
      }
    }
  });
}
