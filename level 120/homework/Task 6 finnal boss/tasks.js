// tasks.js
export const tasks = [];

export function addTask(taskText) {
  const task = {
    text: taskText,
    completed: false,
  };
  tasks.push(task);
}

export function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
}

export function removeTask(index) {
  tasks.splice(index, 1);
}
