import React, {createContext, useEffect, useState} from "react"
import AsyncStorage from "@react-native-community/async-storage"
import auth from "@react-native-firebase/auth"

export interface AuthContextData {
  authToken?: string
  loading: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({children}) => {
  const [authToken, setAuthToken] = useState<string>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStorageData()
  }, [])

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      // setUser(user)  -- this is the real call to make
      console.log("USER: ", user)
      setAuthToken(user ? "string" : undefined)
      if (loading) {
        setLoading(false)
      }
    })
    return subscriber // unsubscribe on unmount
  }, [loading])

  async function loadStorageData(): Promise<void> {
    try {
      const _authToken = await AsyncStorage.getItem("@authToken")
      if (_authToken) {
        setAuthToken(_authToken)
      }
    } catch (error) {
      console.error("Something has gone horribly wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{authToken, loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
