import { useState } from 'react'

const AddProductForm = ({ onAdd }) => {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name.trim()){
      onAdd({ name })
      setName('')
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Add An Item" required />
      <button>Add</button>
    </form>
  )
}

export default AddProductForm;