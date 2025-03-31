import useLightMode from '../hooks/useToggle';

const Component2 = () => {
  const [lightMode, toggle] = useLightMode(false)

  return (
    <div style={{width: 200, height: 200, backgroundColor: lightMode ? 'red' : 'blue', }}>
      <button onClick={toggle}>I am Sigma</button>
      <p style={{color: 'yellow'}}>HHeelloo world</p>
    </div>
  )
}

export default Component2
