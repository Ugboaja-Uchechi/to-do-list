/* eslint-disable no-use-before-define */
import './style.css';
import { getTodos } from './task.js';

const inputText = document.querySelector('.add');
const listTask = document.querySelector('.add-task');
// const clear = document.querySelector('.clear-task');
// const bin = document.querySelectorAll('.trash');

const showTasks = (e) => {
  e.preventDefault();
  saveLocalTodos({ description: inputText.value, completed: false });
  getTodos();
  inputText.value = '';
};
listTask.addEventListener('submit', showTasks);

function saveLocalTodos({ description, completed }) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  let nextIndex = todos.sort((a, b) => b.index - a.index)[0] || 0;
  nextIndex = typeof nextIndex === 'object' ? nextIndex.index : 0;
  nextIndex += 1;

  todos.push({ index: nextIndex, description, completed });
  localStorage.setItem('todos', JSON.stringify(todos));
  console.log(todos);
}

// document.addEventListener('DomContentLoaded', getTodos);
// document.addEventListener('DomContentLoaded', showTasks);

// const deleteItem = () => {
//   localStorage.clear();
// };

// clear.addEventListener('click', deleteItem);

// function checkTodos(e) {
//   const item = e.target;
//   const todo = item.parentElement;
//   // Delete todo
//   if (item.classList.contains('trash')) {
//     const deleteId = todos.parentElement;
//     deleteId.style.display = 'none';
//     clear(todos);
//     console.log(deleteId);
//   }
//   console.log(todo);
//   if (item.checked) {
//     todos.classList.add('completed');
//     console.log(todo, item);
//     clear(item);
//   }
//   if (!item.checked) {
//     todos.classList.remove('completed');
//     console.log(todo, item);
//     clear(item);
//   }
// }
// checkTodos();

// const bars = document.querySelectorAll('.column');

// function open() {
//   for (let j = 0; j < bars.length; j += 1) {
//     bars[j].addEventListener('click', () => {
//       if (bars[j].onclick) {
//         bars[j].style.display = 'none';
//         bin[j].style.display = 'flex';
//       } else {
//         bars.style.display = 'flex';
//         bin.style.display = 'none';
//       }
//     });
//   }
// }
// open();

// Add Tasks
// const addIcon = document.querySelector('icon');
// addIcon.addEventListener('click', (e) => {
//   if (inputText.value !== '') {
//     e.preventDefault();
//     // Create new element
//     const newLi = document.createElement('label');
//     newLi.classList.add('list');
//     newLi.innerHTML = inputText.value;
//     allTasks.appendChild(newLi);
//   }
// });

// Remove tasks

// local Storage

// const listArraySerialised = JSON.stringify(showTasks);

// localStorage.setItem('newDisplay', listArraySerialised);

// const listArrayDeserialised = JSON.parse(localStorage.getItem('newDisplay'));

// listArrayDeserialised();

// if (localStorage.setItem('listArrayDeserialised') === 'true') {
//   document.querySelectorAll('input').checked = true;
// } else {
//   document.querySelectorAll('input').checked = false;
// }
