function updateCount(listUl) {
  const section = listUl.closest('section');
  const count = listUl.children.length;
  const countElement = section.querySelector('div > div > div');

  countElement.textContent = count;
}

export { updateCount };
