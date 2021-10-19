import React from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { useAuth } from "hooks"

const SignIn = () => {

  const auth = useAuth()

  const signIn = () => {
    const fakeAuthString = "someString"
    auth.signIn(fakeAuthString)
  }

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={signIn}>
        <Text>
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  )
  
}

export default SignIn
