import { getFetchManger, postFetchManger } from './utils/fetchManger.js';
import { todoLogApi } from './utils/routerList.js';

const logUl = document.querySelector('ul.activity-ul');
let logList = [];

function addTodoLog(data) {
  postFetchManger(todoLogApi, data)
    .then((res) => {
      if (res.status !== 200) throw new Error();
      return res.json();
    })
    .then((res) => {
      renderTodoLog(data);
    })
    .catch((e) => {
      console.log(e);
    });
}

function getTodoLog() {
  getFetchManger(todoLogApi)
    .then((logs) => {
      logList = logs;
      logs.forEach((log) => {
        renderTodoLog(log);
      });
    })
    .catch((e) => {
      console.log(e);
    });
}

function updateTodoLog() {
  const previousLogs = logUl.children;
  let time;
  let previousTime;
  for (let i = 0; i < previousLogs.length; i++) {
    time = calculateTime(logList[i].time);
    previousTime = previousLogs[i].querySelector('span.time');
    if (previousTime.textContent !== time)
      previousLogs[i].querySelector('span.time').textContent = time;
  }
}

export { addTodoLog, getTodoLog, updateTodoLog };

function renderTodoLog(data) {
  const todoLog = makeTodoLog(data);
  logUl.insertAdjacentHTML('beforeend', todoLog);
}

function makeTodoLog(data) {
  const {
    actionType,
    username,
    previousContent,
    presentContent,
    preivousColumn,
    presentColumn,
  } = data;

  const time = calculateTime(data.time);
  let content;

  switch (actionType) {
    case 'add':
      content = `added ${presentContent} to ${presentColumn}`;
      break;
    case 'remove':
      content = `removed ${presentContent} from ${presentColumn}`;
      break;
    case 'update':
      content = `updated ${previousContent} to ${presentContent}`;
      break;
    case 'move':
      content = `moved ${presentContent} from ${preivousColumn} to ${presentColumn}`;
      break;
    default:
  }
  return makeTemplate(username, content, time);
}

function calculateTime(pastTimeString) {
  const millisecondUnit = 1000;
  const timeUnit = 60;
  const dateUnit = 24;

  const presentTime = new Date();
  const pastTime = new Date(pastTimeString);

  const diffSecond = Math.floor((presentTime - pastTime) / millisecondUnit);
  const diffMinute = Math.floor(diffSecond / timeUnit);
  const diffHour = Math.floor(diffMinute / timeUnit);
  const diffDate = Math.floor(diffHour / dateUnit);

  if (diffDate > 0) return `${diffDate} days`;
  if (diffHour > 0) return `${diffHour} hours`;
  if (diffMinute > 0) return `${diffMinute} minutes`;
  return `${diffSecond} seconds`;
}

function makeTemplate(username, content, time) {
  return `<li>
    <div class="row">
    <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1239&q=80" alt="logo" style="width:40px;height:40px">
    <div class="col">
        <div class="log"><p>@${username}</p> ${content} </div>
        <div><span class="time">${time}</span> ago.</div>
    </div>
    </div>
  </li>`;
}
