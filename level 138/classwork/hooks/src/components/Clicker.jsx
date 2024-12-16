import { useState } from "react"

const ClickCounter = () => {
  const [ count, setCount ] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>You clicked {count} times.</p>
    </div>
  )
}

export default ClickCounter;