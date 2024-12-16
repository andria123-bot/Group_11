import { useState } from 'react'
const DataFetching = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <p>{isLoading ? "Data is loading..." : "Data is here"}</p>
      <button onClick={() => setIsLoading(!isLoading)}>Toggle</button>
    </div>
  )
}

export default DataFetching;