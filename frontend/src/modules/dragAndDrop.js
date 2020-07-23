import { patchFetchManger } from '../modules/utils/fetchManger.js';
import { todoMoveApi } from '../modules/utils/routerList.js';
import 'regenerator-runtime/runtime';
import { updateCount } from './utils/updateCount';

export default class Draggable {
  constructor(el) {
    this.el = el;
    this.cloneEl = null;
    this.shiftX = null;
    this.shiftY = null;
    this.droppable = null;
    this.droppableLists = null;
    this.todoLists = null;
    this.closestLinkIndex = null;
    this.ul = null;
    this.time = 0;
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.addEventHandlers();
  }

  init() {
    //필수
    this.cloneEl = this.el.cloneNode(true);
    this.cloneEl.classList.add('clone');
    this.cloneEl.classList.remove('todo-item');
    this.ul = this.el.closest('ul');
  }

  addEventHandlers() {
    this.el.addEventListener('mousedown', this.onMouseDown);
    this.el.addEventListener('dragstart', (e) => e.preventDefault());
    this.el.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseDown(e) {
    e.preventDefault();
    if (e.target.dataset.method === 'delete') return;

    if (new Date().getTime() < this.time + 400) {
      //버그 해결
      document.removeEventListener('mousemove', this.onMouseMove);
      this.cloneEl.remove();
      return;
    }
    this.time = new Date().getTime();

    this.init();
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

  closestTodoList(e) {
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
    this.closestLinkIndex = distances.indexOf(Math.min(...distances));
    // console.log(Math.min(...distances));

    // 먼저 show가 있는 것을 검사해 다 지워준다.
    if (this.droppableLists !== null) {
      Array.from(this.droppableLists).map((list) => {
        if (list.classList.contains('show')) list.classList.remove('show');
      });
    }

    this.todoLists[this.closestLinkIndex].previousElementSibling.classList.add(
      'show',
    );
  }

  moveElementTo(x, y) {
    const leftPosition = x - this.shiftX < 0 ? 0 : x - this.shiftX;
    const topPosition = y - this.shiftY < 0 ? 0 : y - this.shiftY;
    this.el.style.left = `${leftPosition}px`;
    this.el.style.top = `${topPosition}px`;
  }

  onMouseMove(e) {
    this.moveElementTo(e.pageX, e.pageY);
    this.closestTodoList(e);
  }

  async onMouseUp(e) {
    if (e.target.dataset.method === 'delete') return;
    document.removeEventListener('mousemove', this.onMouseMove);

    this.el.style.position = 'static';
    if (this.droppableLists !== null && this.todoLists !== null) {
      let todolist = this.todoLists[this.closestLinkIndex]; // 가장 가까운 투두리스트
      Array.from(this.droppableLists).map((list) => {
        // show 속성을 가진 것은 지워준다.
        if (list.classList.contains('show')) list.classList.remove('show');
      });

      //다른 곳으로 이동한다면
      if (this.el !== todolist) {
        this.el.previousElementSibling.remove(); // 클론 제거
        const ul = todolist.closest('ul'); // 이동할 곳의 ul
        ul.insertBefore(this.el, todolist);
        //droppable추가
        const li = document.createElement('li');
        li.classList.add('droppable');
        ul.insertBefore(li, todolist);

        // 정보 업데이트
        const id = ul.id.substr(9);

        let curIdx;
        console.log(this.el, ul.children[1]);
        if (this.el === ul.children[1]) {
          console.log(true);
          curIdx = +this.el.nextSibling.nextSibling.getAttribute('idx') + 1;
        } else {
          curIdx = +this.el.previousElementSibling.previousElementSibling.getAttribute(
            'idx',
          );
        }

        const data = {
          idx: curIdx,
          groupId: ul.id,
          groupTitle: document.getElementById(`column-title-${id}`).textContent,
        };

        try {
          const result = await patchFetchManger(
            `/api/todos/move/${this.el.id}`,
            data,
          );
          if (result.status !== 200) throw new Error();
        } catch {
          throw new Error();
        }
      }
      this.cloneEl.remove();
      this.init();
      const ulList = document.querySelectorAll('.todoitem-ul');
      for (let ul of ulList) {
        updateCount(ul);
      }
    }
  }
}
