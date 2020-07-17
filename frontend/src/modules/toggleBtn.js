export function toggleBtn() {
  document.addEventListener('input', (e) => {
    console.log(e.target);
    if (e.target.getAttribute('name').substring(0, 8) === 'textarea') {
      const id = e.target.getAttribute('name').substring(9);
      const btn = document.querySelector(`#input-btn-${id}`);
      if (e.target.value.length !== 0) {
        btn.removeAttribute('disabled');
      } else {
        btn.setAttribute('disabled', 'true');
      }
    }
  });
}
