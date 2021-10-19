import React from "react"
import { RootNavigator } from "navigators"
import { AuthProvider } from "providers"

const App = () => (
  <AuthProvider>
    <RootNavigator />
  </AuthProvider>
)

export default App
