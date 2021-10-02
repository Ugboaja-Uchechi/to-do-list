export const allTasks = document.querySelector('.task-list');
let todos = [];

export function getTodos() {
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  let newDisplay = '';
  todos.forEach((item) => {
    const check = item.completed ? 'checked' : '';
    const completed = item.completed ? 'completed' : '';
    newDisplay += `
    <li ${completed}>
    <input type="checkbox" data-id="${item.index}" name="" class="check-list" ${check}>
    <label class="list ${completed}" contentEditable = "true" for="">${item.description}<i class="fas fa-edit column"></i><i class="far fa-trash-alt trash"></i></label>
    </li>
    `;
  });
  allTasks.innerHTML = newDisplay;
}
getTodos();

export function displayBox() {
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

allTasks.addEventListener('click', displayBox());