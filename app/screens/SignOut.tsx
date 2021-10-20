import React from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"

const styles = StyleSheet.create({
  page: {flex: 1},
})

const SignOut = () => {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => null /*firebase signout*/}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignOut
