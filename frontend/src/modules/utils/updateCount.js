function updateCount(listUl) {
  const section = listUl.closest('section');
  const count = listUl.querySelectorAll('.todo-item').length - 1;
  const countElement = section.querySelector('div > div > div');

  countElement.textContent = count;
}

export { updateCount };
