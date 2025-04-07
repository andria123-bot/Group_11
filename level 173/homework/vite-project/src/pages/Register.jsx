import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = () => {
    const isAdmin = email === 'andria.lezhava660@gmail.com';

    const user = { email, password, isAdmin };
    localStorage.setItem('user', JSON.stringify(user));

    navigate(`/verify/${email}`);
  };
  return(
    <>
      <h1>Register</h1>

      <input type="email" placeholder='Enter The Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Enter The Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </>
  )
}

export default Register