export default class Draggable {
  constructor(el) {
    this.el = el;
    this.cloneEl = null;
    this.shiftX = null;
    this.shiftY = null;
    this.droppable = null;
    this.droppableLists = null;
    this.todoLists = null;
    this.ul = this.el.closest('ul');
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.init();
    this.addEventHandlers();
  }

  init() {
    //필수
    this.cloneEl = this.el.cloneNode(true);
    this.cloneEl.classList.add('clone');
    this.cloneEl.classList.remove('todo-item');
  }

  addEventHandlers() {
    this.el.addEventListener('mousedown', this.onMouseDown);
    this.el.addEventListener('dragstart', (e) => e.preventDefault());
    this.cloneEl.addEventListener('dragstart', (e) => e.preventDefault());
    this.el.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseDown(e) {
    if (e.target.dataset.method === 'delete') return;
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
    this.el.style.left = `${x - this.el.offsetWidth / 2}px`;
    this.el.style.top = `${y - this.el.offsetHeight / 2}px`;
  }

  onMouseMove(e) {
    this.moveElementTo(e.pageX, e.pageY);

    this.todoLists = document.querySelectorAll('.todo-item');
    this.droppableLists = document.querySelectorAll('.droppable');
    let elements = Array.from(this.todoLists);

    let linkCoords = elements.map((link) => {
      let rect = link.getBoundingClientRect();
      return [rect.x, rect.y];
    });
    let distances = [];

    linkCoords.forEach((linkCoord) => {
      let distance = Math.hypot(
        linkCoord[0] - parseInt(e.clientX),
        linkCoord[1] - parseInt(e.clientY),
      );
      distances.push(parseInt(distance));
    });
    // console.log(distances); // 거리보기
    let closestLinkIndex = distances.indexOf(Math.min(...distances));
    if (closestLinkIndex !== distances.length - 1) {
      this.todoLists[closestLinkIndex].previousElementSibling.classList.add(
        'show',
      );
    } else {
      this.todoLists[closestLinkIndex].classList.add('show');
    }

    Array.from(this.todoLists)
      .filter((el, idx) => idx !== closestLinkIndex)
      .map((link) => {
        link.previousElementSibling.classList.remove('show');
      });
  }

  onMouseUp(e) {
    if (e.target.dataset.method === 'delete') return;
    document.removeEventListener('mousemove', this.onMouseMove);
    Array.from(this.droppableLists).map((list) => {
      if (list.classList.contains('show')) list.classList.remove('show');
    });

    this.el.style.position = 'static';
    this.ul.replaceChild(this.el, this.cloneEl);
    this.init();
  }
}
