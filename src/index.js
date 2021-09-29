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

// Checkbox
// const labelList = document.querySelectorAll('.list');
// const checkBoxes = document.querySelectorAll('.check-list');

// function displayBox() {
//   const labelList = document.querySelectorAll('.list');
//   const checkBoxes = document.querySelectorAll('.check-list');
//   for (let i = 0; i < checkBoxes.length; i += 1) {
//     checkBoxes[i].addEventListener('change', (e) => {
//       const taskIndex = e.target.getAttribute('data-id');
//       alert(taskIndex);
//       if (checkBoxes[i].checked) {
//         labelList[i].style.textDecoration = 'line-through';
//       } else {
//         labelList[i].style.textDecoration = 'none';
//       }
//     });
//   }
// }
// displayBox();

// local Storage
const listArraySerialised = JSON.stringify(listArray);

localStorage.setItem('listArray', listArraySerialised);

const listArrayDeserialised = JSON.parse(localStorage.getItem('listArray'));

console.log(listArrayDeserialised);
