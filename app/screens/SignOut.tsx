import React from "react"
import {Text, TouchableOpacity, View} from "react-native"

import {useAuth} from "hooks"

const SignOut = () => {
  const auth = useAuth()

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={auth.signOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignOut
