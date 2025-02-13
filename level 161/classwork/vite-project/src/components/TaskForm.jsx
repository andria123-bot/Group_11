import { useState } from 'react'

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTask = { title, description, dueDate, priority, status: 'pending'}
    onAddTask(newTask)
  }
  return(
    <form onChange={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button>Add Task...</button>
    </form>
  )
}

export default TaskForm;