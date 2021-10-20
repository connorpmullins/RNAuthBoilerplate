import React from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"

import auth from "@react-native-firebase/auth"

const signIn = () => {
  auth()
    .createUserWithEmailAndPassword(
      "jane.doe@example.com",
      "SuperSecretPassword!",
    )
    .then(() => {
      console.log("User account created & signed in!")
    })
    .catch(error => {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!")
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!")
      }

      console.error(error)
    })
}

const styles = StyleSheet.create({
  page: {flex: 1},
})
const SignIn = () => {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={signIn}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn
