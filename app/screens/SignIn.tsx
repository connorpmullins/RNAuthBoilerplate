import React from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"

const styles = StyleSheet.create({
  page: {flex: 1},
})
const SignIn = () => {
  const signIn = () => {
    // firebase signin!
  }

  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={signIn}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn
