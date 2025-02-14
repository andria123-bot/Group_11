import React, { useState, useEffect } from 'react';

const Notifications = ({ tasks }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const checkOverdueTasks = () => {
      const overdueTasks = tasks.filter(
        task => new Date(task.dueDate) < new Date() && task.status !== 'completed'
      );
      if (overdueTasks.length > 0) {
        setNotifications(overdueTasks.map(task => `Task "${task.title}" is overdue!`));
      } else {
        setNotifications([]);
      }
    };

    // Check for overdue tasks every minute
    const interval = setInterval(checkOverdueTasks, 60000);

    // Initial check
    checkOverdueTasks();

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [tasks]);

  if (notifications.length === 0) {
    return null; // Don't render anything if there are no notifications
  }

  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;