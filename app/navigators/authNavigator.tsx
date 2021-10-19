import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignIn } from "screens"

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator
