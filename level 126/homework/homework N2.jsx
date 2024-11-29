const isLoggedIn = false;

function Greeting(){
  return (
    <div>
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Pleace Log In</h1>}
    </div>
  );
}