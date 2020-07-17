export function toggleBtn() {
  document.addEventListener('input', (e) => {
<<<<<<< HEAD
    if (e.target.getAttribute('id').substring(0, 8) === 'textarea') {
      const id = e.target.getAttribute('id').substring(9);
      const btn = document.querySelector(`#input-btn-${id}`);
      if (e.target.value.length !== 0) {
        btn.removeAttribute('disabled');
=======
    if (e.target.type === 'textarea') {
      const textarea = e.target;
      const addBtn = textarea.nextElementSibling.firstElementChild;
      if (textarea.value.length !== 0) {
        addBtn.removeAttribute('disabled');
>>>>>>> c0291fef4327d036e53533ecba3f772059de464b
      } else {
        addBtn.setAttribute('disabled', 'true');
      }
    }
  });
}
