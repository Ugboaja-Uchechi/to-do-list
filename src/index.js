/* eslint-disable no-use-before-define */
import './style.css';
import { getTodos } from './task.js';

const inputText = document.querySelector('.add');
const listTask = document.querySelector('.add-task');
const clear = document.querySelector('.clear-all');
const todos = JSON.parse(localStorage.getItem('todos')) || [];

const showTasks = (e) => {
  e.preventDefault();
  saveLocalTodos({ description: inputText.value, completed: false });
  getTodos();
  inputText.value = '';
};
listTask.addEventListener('submit', showTasks);

function saveLocalTodos({ description, completed }) {
  let nextIndex = todos.sort((a, b) => b.index - a.index)[0] || 0;
  nextIndex = typeof nextIndex === 'object' ? nextIndex.index : 0;
  nextIndex += 1;

  todos.push({ index: nextIndex, description, completed });
  localStorage.setItem('todos', JSON.stringify(todos));
  console.log(todos);
}

function deleteItem(index) {
  const filterItems = todos.filter((todo, id) => id !== index);
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
