import { getTodos } from './task.js';

export default function displayBox() {
  const checkBoxes = document.querySelectorAll('.check-list');
  for (let i = 0; i < checkBoxes.length; i += 1) {
    checkBoxes[i].addEventListener('change', (e) => {
      const taskIndex = Number(e.target.getAttribute('data-id'));
      let todos = JSON.parse(localStorage.getItem('todos')) || [];
      const taskUpdate = todos.find((task) => task.index === taskIndex);
      taskUpdate.completed = !taskUpdate.completed;
      todos = todos.filter((task) => task.index !== taskIndex);
      todos.push(taskUpdate);
      localStorage.setItem('todos', JSON.stringify(todos));
      getTodos();
    });
  }
}
