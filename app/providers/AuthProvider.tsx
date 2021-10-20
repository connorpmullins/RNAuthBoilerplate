import React, {createContext, useEffect, useState} from "react"
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth"

export interface AuthContextData {
  authUser: FirebaseAuthTypes.User | null
  loading: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({children}) => {
  const [authUser, setAuthUser] = useState<FirebaseAuthTypes.User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setAuthUser(user)
      if (loading) {
        setLoading(false)
      }
    })
    return subscriber // unsubscribe on unmount
  }, [loading])

  return (
    <AuthContext.Provider value={{authUser, loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
