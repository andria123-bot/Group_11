import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ShowAuth = () => {
  const { email, password } = useContext(AuthContext)

  return(
    <>
      <h3>Email: {email}</h3>
      <h3>Password: {password}</h3>
    </>
  )
}

export default ShowAuth