// app.js
import { tasks, addTask, toggleTaskCompletion, removeTask } from './tasks.js';

const inputField = document.querySelector('input');
const addButton = document.getElementById('submitBtn');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const taskText = inputField.value.trim();
  if (taskText) {
    addTask(taskText);
    inputField.value = '';
    renderTasks();
  }
});

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.text;
    taskItem.style.textDecoration = task.completed ? 'line-through' : 'none';
    taskItem.addEventListener('click', () => {
      toggleTaskCompletion(index);
      renderTasks();
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      removeTask(index);
      renderTasks();
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
  });
}

// Load tasks from localStorage if available
document.addEventListener('DOMContentLoaded', () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (savedTasks) {
    savedTasks.forEach((task) => tasks.push(task));
    renderTasks();
  }
});

// Save tasks to localStorage whenever tasks change
window.addEventListener('beforeunload', () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
});
