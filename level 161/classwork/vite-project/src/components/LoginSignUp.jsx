import { useState } from 'react'

const Auth = ({ isLogin }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] =  useState('')

  const handleSubmit = (e) => {
    e.preventDefault;
    
    console.log(email, pass)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name='email' value={email} placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" name='pass' value={pass} placeholder='Enter Your Password' onChange={(e) => setEmail(e.target.value)} required />
      <button>{isLogin ? 'Login' : "SignUp"}</button>
    </form>
  )
}

export default Auth