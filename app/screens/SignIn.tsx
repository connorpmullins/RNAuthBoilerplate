import React from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"

import {useAuth} from "hooks"

const styles = StyleSheet.create({
  page: {flex: 1},
})
const SignIn = () => {
  const auth = useAuth()

  const signIn = () => {
    const fakeAuthString = "someString"
    auth.signIn(fakeAuthString)
  }

  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={signIn}>
        <Text>Sign Ins</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn
