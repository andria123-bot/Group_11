import React from 'react';

const Dashboard = ({ tasks }) => {
  const completed = tasks.filter(task => task.status === 'completed').length;
  const pending = tasks.filter(task => task.status === 'pending').length;
  const overdue = tasks.filter(task => new Date(task.dueDate) < new Date() && task.status !== 'completed').length;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>
      <p>Overdue: {overdue}</p>
    </div>
  );
};

export default Dashboard;