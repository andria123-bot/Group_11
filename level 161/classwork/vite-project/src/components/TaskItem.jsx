import { useState } from "react"

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleSave = () => {
    onUpdate(updatedTask)
    isEditing(false)
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={updatedTask.title} onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value})} />
          <button onClick={handleSave}>Save Me!</button>
        </div>
      ) : (
        <div>
          <h1>{task.title}</h1>
          <h3>{task.description}</h3>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      )}
    </div>
  )
}