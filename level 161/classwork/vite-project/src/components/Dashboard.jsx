import { useState, useEffect } from 'react';

const DashBoard = ({ tasks }) => {
  const [stats, setStats] = useState({ completed: 0, pending: 0, overdue: 0 });

  useEffect(() => {
    const completed = tasks.filter(task => task.status == 'completed').length;
    const pending = tasks.filter(task => task.status === 'pending').length;
    const overdue = tasks.filter(task => new Date(task.dueDate) < new Date() && task.status !== 'completed').length;
    setStats({ completed, pending, overdue });
  }, [tasks])

  return (
    <>
      <h1>Dashboard</h1>
      <h3>Completed: {status.completed}</h3>
      <h3>Pending: {status.pending}</h3>
      <h3>Overdue: {status.overdue}</h3>
    </>
  )
}

export default DashBoard