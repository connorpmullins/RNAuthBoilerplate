import React, { createContext, useEffect, useState } from "react"
import AsyncStorage from "@react-native-community/async-storage"

export interface AuthContextData {
  authToken?: string
  loading: boolean
  signIn:(authToken: string) => Promise<void>
  signOut:() => void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {

  const [authToken, setAuthToken] = useState<string>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStorageData()
  }, [])

  async function loadStorageData(): Promise<void> {
    try {
      const authToken = await AsyncStorage.getItem("@authToken")
      if (authToken) {
        setAuthToken(authToken)
      }
    } catch (error) {
      console.error('Something has gone horribly wrong')
    } finally {
      setLoading(false)
    }
  }

  // this is a dummy-function for now that will allow us to set
  const signIn = async (authToken: string) => {
    if (authToken) {
      setAuthToken(authToken)
      AsyncStorage.setItem('@authToken', authToken)
    }
  }

  const signOut = ()=> setAuthToken(undefined)

  return (
    <AuthContext.Provider value={{authToken, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
