import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [input, setInput] = useState({username: "", password: ""})
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const storedUser = JSON.parse(localStorage.getItem('user'))

    if(storedUser && input.username === storedUser.username && input.password === storedUser.password){
      alert("Successful Login!")
      navigate('/dashboard')
    }else{
      alert("Invalid Credentials! Try Again!")
    }
  }

  return(
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input type="text" placeholder='Username' onChange={(e) => setInput({...input, username: e.target.value})} required />
      <input type="Password" placeholder='Password' onChange={(e) => setInput({...input, password: e.target.value})} required />
      <button>Submit</button>
    </form>
  )
}

export default Login