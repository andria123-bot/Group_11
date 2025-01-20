import { useState, useEffect } from 'react';

function ReRender() {
  const [input, setInput] = useState("")
  const [count, setCount] = useState(null);

  useEffect(() => {
    console.log("Count has been changed")
  }, [count, input]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>

      <p>Inputed Text: {input}</p>
      <input type="text" onChange={(e) => setInput((e.target.value))} />
    </div>
  );
}

export default ReRender;
