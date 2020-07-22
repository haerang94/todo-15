export default class Draggable {
  constructor(el) {
    this.el = el;
    this.cloneEl = null;
    this.shiftX = null;
    this.shiftY = null;
    this.ul = this.el.closest('ul');
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.init();
    this.addEventHandlers();
  }

  init() {
    this.cloneEl = this.el.cloneNode(true);
    this.cloneEl.id = 'clone';
  }

  addEventHandlers() {
    this.el.addEventListener('mousedown', this.onMouseDown);
    this.el.addEventListener('dragstart', (e) => e.preventDefault());
    this.cloneEl.addEventListener('dragstart', (e) => e.preventDefault());
    this.el.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseDown(e) {
    this.getDragPointer(e.clientX, e.clientY);
    this.prepareElement();
    this.moveElementTo(e.pageX, e.pageY);
    document.addEventListener('mousemove', this.onMouseMove);
    this.ul.insertBefore(this.cloneEl, this.el.nextSibling);
  }

  getDragPointer(x, y) {
    const elRect = this.el.getBoundingClientRect();
    this.shiftX = x - elRect.left;
    this.shiftY = y - elRect.top;
    this.el.style.left = this.shiftX + 'px';
    this.el.style.right = this.shiftY + 'px';
  }

  prepareElement() {
    this.el.style.position = 'absolute';
    this.el.style.zIndex = 999;
  }

  moveElementTo(x, y) {
    const leftPosition = x - this.shiftX < 0 ? 0 : x - this.shiftX;
    const topPosition = y - this.shiftY < 0 ? 0 : y - this.shiftY;
    this.el.style.left = `${leftPosition}px`;
    this.el.style.top = `${topPosition}px`;
  }

  onMouseMove(e) {
    this.moveElementTo(e.pageX, e.pageY);
  }

  onMouseUp(e) {
    document.removeEventListener('mousemove', this.onMouseMove);
    this.el.style.position = 'static';
    this.ul.replaceChild(this.el, this.cloneEl);
  }
}
