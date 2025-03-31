import useLightMode from '../hooks/useToggle';

const Component1 = () => {
  const [lightMode, toggle] = useLightMode(false)

  const handleClick = () => {
    toggle()
  }

  return (
    <div style={
      {width: 200,
      height: 200,
      backgroundColor: lightMode ? 'red' : 'blue'}}>
      <button onClick={handleClick}>I am Super sigma boi</button>
      <p style={{color: 'yellow'}}>Hello World</p>
    </div>
  )
}

export default Component1
