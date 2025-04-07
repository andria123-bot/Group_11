import { useState  } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      if (user.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      alert('Invalid credentials');
    }
  };


  return(
    <>
      <h1>Login</h1>
      <input type="email" placeholder="Enter The Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter The Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login