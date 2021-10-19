import React from "react"
import {NavigationContainer} from "@react-navigation/native"

import {AppNavigator, AuthNavigator} from "navigators"
import {useAuth} from "hooks"

import {AuthContextData} from "providers/AuthProvider"

const determineNavigator = (auth: AuthContextData) => {
  if (auth.loading) {
    return <AuthNavigator />
  } else if (auth.authToken) {
    return <AppNavigator />
  } else {
    return <AuthNavigator />
  }
}
export default function RootNavigator() {
  const auth = useAuth()

  const NavigationFlow = determineNavigator(auth)
  return <NavigationContainer>{NavigationFlow}</NavigationContainer>
}
