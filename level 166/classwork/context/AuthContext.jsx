import { createContext } from 'react'

export const AuthContext = createContext()

export default AuthProvider = ({ children, email, password }) => {
  return(
    <AuthContext.Provider value={{ email, password }}>
      {children}
    </AuthContext.Provider>
  )
}