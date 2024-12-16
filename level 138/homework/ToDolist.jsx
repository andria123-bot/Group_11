import { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleClick = () => {
    if (item.length > 0) {
      setItems([...items, item]);
      setItem("");
    } else {
      alert("Cant be empty string!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.length > 0) {
      setItems([...items, item]);
      setItem("");
    }
  };

  const handleDelete = (index) => {
    const filteredItems = items.filter((_, i) => i !== index);
    setItems(filteredItems);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" value={item} onChange={handleChange} placeholder="Add todo item...." required />
        <button type="button" onClick={handleClick}>Add</button>
      </form>
      <ul>
        {
          items.map((item, index) => {
            return <li key={index} onClick={() => handleDelete(index)}>{item}</li>;
          })
        }
      </ul>
    </div>
  );
}

export default ToDoList;
