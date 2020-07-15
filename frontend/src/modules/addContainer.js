import { containerItem } from './containerItem.js';

export function addContainer() {
  const main = document.querySelector('main');
  const newContainer = containerItem();
  main.insertAdjacentHTML('beforeend', newContainer);
}
