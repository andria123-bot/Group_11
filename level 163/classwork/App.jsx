import { useState } from 'react';
import Register from './components/Register2';

function App() {
  const [account, setAccount] = useState(null);

  return (
    <>
      {account ? <h1>Admin</h1> : <Register />}
    </>
  );
}

export default App;
