import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Notification from './components/Notifications';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), status: 'pending' }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
        : task
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const overdueTasks = tasks.filter(
        task => new Date(task.dueDate) < new Date() && task.status !== 'completed'
      );
      if (overdueTasks.length > 0) {
        alert(`You have ${overdueTasks.length} overdue task(s)!`);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="app">
      <h1>Task Management Dashboard</h1>
      <Dashboard tasks={tasks} />
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onUpdate={updateTask}
        onToggleStatus={toggleTaskStatus}
      />
      <Notification tasks={tasks} />
    </div>
  );
};

export default App;