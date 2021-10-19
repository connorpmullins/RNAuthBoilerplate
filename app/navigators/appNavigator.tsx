import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignOut } from "screens"

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="SignOut">
      <AppStack.Screen name="SignOut" component={SignOut} />
    </AppStack.Navigator>
  )
}

export default AppNavigator
