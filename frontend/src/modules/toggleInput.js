export function toggleInput() {
  const main = document.querySelector('main');
  main.addEventListener('click', (e) => {
    //+ 버튼을 눌렀을 때 토글시키기
    if (!e.target.classList.contains('fa-plus')) return;
    const id = e.target.id.split('-')[2];
    toggleHidden(id);
    const scrollPoint = document.querySelector(`.scroll-${id}`);
    scrollPoint.scrollIntoView();
  });
  // 취소 버튼을 눌렀을 때
  document.addEventListener('click', (e) => {
    if (e.target.id.substr(0, 10) !== 'cancel-btn') return;
    const id = e.target.id.substr(11);
    toggleHidden(id);
  });
}

function toggleHidden(id) {
  const inputContainer = document.getElementById(`input-todo-${id}`);
  const textarea = document.querySelector(`#textarea-${id}`);``
  if (inputContainer.classList.contains('hidden')) {
    textarea.value = '';
    inputContainer.classList.remove('hidden');
  } else {
    inputContainer.classList.add('hidden');
  }
}
