export default function deleteColumn() {
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('fa-times')) return;

    e.target.closest('section').remove();
  });
}
