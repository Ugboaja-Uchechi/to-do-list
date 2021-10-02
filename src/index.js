/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */
import './style.css';
import { getTodos } from './task.js';

const inputText = document.querySelector('.add');
const listTask = document.querySelector('.add-task');
const clear = document.querySelector('.clear-all');
const todos = JSON.parse(localStorage.getItem('todos')) || [];
export let editIndex = null;

function saveLocalTodos({ index, description, completed }) {
  todos.push({ index, description, completed });
  localStorage.setItem('todos', JSON.stringify(todos));
  console.log(todos);
}

const showTasks = (e) => {
  e.preventDefault();
  if (editIndex !== null) {
    // eslint-disable-next-line no-use-before-define
    saveEdit(editIndex);
    editIndex = null;
  } else {
    saveLocalTodos({ index: todos.length + 1, description: inputText.value, completed: false });
  }
  getTodos();
  inputText.value = '';
  window.location.reload();
};
listTask.addEventListener('submit', showTasks);

function deleteItem(index) {
  const filterItems = todos.filter((todo, id) => id !== index);
  filterItems.forEach((item, index) => {
    item.index = index + 1;
  });
  localStorage.setItem('todos', JSON.stringify(filterItems));
  window.location.reload();
}

document.querySelectorAll('.trash').forEach((e, key) => {
  e.addEventListener('click', () => deleteItem(key));
});

function editItems(index) {
  editIndex = index;
  // eslint-disable-next-line eqeqeq
  const itemEdit = todos.find((a, id) => id == index);
  inputText.value = itemEdit.description;
}
document.querySelectorAll('.column').forEach((e, key) => {
  e.addEventListener('click', () => editItems(key));
});

function saveEdit(index) {
  const newInput = todos[index];
  newInput.description = inputText.value;
  localStorage.setItem('todos', JSON.stringify(todos));
}

function clearItems() {
  const filterItems = todos.filter((todo) => todo.completed !== true);
  localStorage.setItem('todos', JSON.stringify(filterItems));
  window.location.reload();
}

clear.addEventListener('click', clearItems);
