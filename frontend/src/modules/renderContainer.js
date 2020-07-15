import { containerItem } from './containerItem.js';

export function renderContainer() {
  const main = document.querySelector('main');
  const newContainer = containerItem();
  main.insertAdjacentHTML('beforeend', newContainer);
}
