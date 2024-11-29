function renderGreeting(){
  return (
    <h1>Hello World!</h1>
  );
};

function App(){
  return (
    <div>
      {renderGreeting()}
    </div>
  )
}