import { createContext, useContext } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }){
  return (
    <AuthContext.Provider value={{ NAME: 'Emerson', email: 'emerson@email.com'}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
