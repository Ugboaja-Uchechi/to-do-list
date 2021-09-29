import './style.css';
import { displayBox } from './check.js';

const allTasks = document.querySelector('.task-list');

const listArray = [
  {
    description: 'Complete To-Do list',
    completed: false,
    index: 0,
  },
  {
    description: 'Take a walk',
    completed: false,
    index: 1,
  },
  {
    description: 'Watch a movie',
    completed: false,
    index: 2,
  },
];

const showTasks = (tasks) => `
<li data-id="${tasks.index}">
<input data-id="${tasks.index}" type="checkbox" name="" class="check-list">
<label class="list" for="">${tasks.description}<i class="fas fa-ellipsis-v"></i></label>
</li>
`;
allTasks.innerHTML = listArray.map((tasks) => showTasks(tasks)).join('');

displayBox();

// local Storage

const listArraySerialised = JSON.stringify(listArray);

localStorage.setItem('listArray', listArraySerialised);

const listArrayDeserialised = JSON.parse(localStorage.getItem('listArray'));

listArrayDeserialised();
