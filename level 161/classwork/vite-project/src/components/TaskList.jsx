import { useState } from "react";
import TaskItem from './TaskItem.jsx'

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  const [filter, setFilter] = useState("all")

  const filteredTask = task.filter(task => {
    if (filter == 'all') return true
    return task.status = filter
  })

  return(
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      {filteredTask.map(task => {
        <TaskItem key={tasks.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
      })}
    </div>
  )
}

export default TaskList;