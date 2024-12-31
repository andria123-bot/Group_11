import { useEffect, useState } from "react";

const ToDolistLocal = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, e.target.item.value]);
  }

  const handleDelete = (index) => {
    const filteredItemes = items.filter((_, i) => i !== index);
    setItems(filteredItemes);
  }

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    setItems(storedItems);
  }, []);

  useEffect(() => {
    if(items.length > 0){
      localStorage.setItem('items', JSON.stringify(items)); 
    }
  }, [items])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" placeholder="Add todo item..." required/>
        <button>Submit</button>
      </form>

      {
        items.map((item, index) => {
          return <li key={index} onClick={() => handleDelete(index)}>{item}</li>
        })
      }
    </div>
  )
}

export default ToDolistLocal;