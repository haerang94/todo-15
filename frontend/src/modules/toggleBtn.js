export function toggleBtn() {
  document.addEventListener('input', (e) => {
    if (e.target.getAttribute('id').substring(0, 8) === 'textarea') {
      const id = e.target.getAttribute('id').substring(9);
      const btn = document.querySelector(`#input-btn-${id}`);
      if (e.target.value.length !== 0) {
        btn.removeAttribute('disabled');
      } else {
        btn.setAttribute('disabled', 'true');
      }
    }
  });
}
