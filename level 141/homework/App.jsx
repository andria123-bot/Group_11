import { useEffect, useState } from 'react'


export default function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerWidth)

  const [value, setValue] = useState("value")

  useEffect(() => {
    window.addEventListener("resize", () =>{
      console.log("Resized")
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    })
    setValue(value + 1)
    return (
      console.log("Terminal cleared"),
      window.removeEventListener("Resize", () => {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    }))
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Loading...")
    }, 1000)
  }, [])
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div>width{width}</div>
      <div>height{height}</div>
      </div>
    </>
  )
}

