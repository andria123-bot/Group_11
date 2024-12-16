import { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
      setTaskName('');
    }
  };

  const editTask = (id, newName) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, name: newName } : task));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input type="text" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="text" value={task.name} onChange={(e) => editTask(task.id, e.target.value)} />
            <button onClick={() => toggleComplete(task.id)}>{task.completed ? 'Undo' : 'Complete'}</button>
            <span>{task.completed ? ' (Completed)' : ''}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
