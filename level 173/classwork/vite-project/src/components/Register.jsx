import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [user, setUser] = useState({username: "", password: ""})
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(user))
    navigate("/")
  }

  return(
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input type="text" placeholder='Username' onChange={(e) => setUser({...user, username: e.target.value})} required />
      <input type="password" placeholder='Password' onChange={(e) => setUser({...user, password: e.target.value})} required />
      <button>Register</button>
    </form>
  )
}

export default Register; 