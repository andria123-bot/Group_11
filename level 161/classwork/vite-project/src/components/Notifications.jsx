import { useState, useEffect } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const overdueTasks = tasks.filter(task => new Date(task.dueDate) < new Date() && task.status !== 'completed');
      if (overdueTasks.length > 0) {
        alert('You have overdue tasks!');
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div>
    </div>
  );
};

export default App;