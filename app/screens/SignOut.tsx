import React from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"

import {useAuth} from "hooks"

const styles = StyleSheet.create({
  page: {flex: 1},
})

const SignOut = () => {
  const auth = useAuth()

  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={auth.signOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignOut
