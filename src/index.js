import './style.css';
import { getTodos } from './task.js';

const inputText = document.querySelector('.add');
const listTask = document.querySelector('.add-task');
const clear = document.querySelector('.clear-all');
const todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveLocalTodos({ index, description, completed }) {
  todos.push({ index, description, completed });
  localStorage.setItem('todos', JSON.stringify(todos));
  console.log(todos);
}

const showTasks = (e) => {
  e.preventDefault();
  saveLocalTodos({ index: todos.length + 1, description: inputText.value, completed: false });
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

function clearItems() {
  const filterItems = todos.filter((todo) => todo.completed !== true);
  localStorage.setItem('todos', JSON.stringify(filterItems));
  window.location.reload();
}

clear.addEventListener('click', clearItems);
