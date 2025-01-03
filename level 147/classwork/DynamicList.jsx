import { useState } from 'react';

const DynamicList = () => {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleAddItem = (e) => {
    setItems((prevItems) => [...prevItems, input])
  }

  return(
    <div>
      <input type="text" value={input} onChange={handleChange} placeholder='Enter item' />
      <button onClick={handleAddItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default DynamicList;