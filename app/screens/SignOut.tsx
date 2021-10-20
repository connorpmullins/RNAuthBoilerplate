import React from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"

import auth from "@react-native-firebase/auth"

const styles = StyleSheet.create({
  page: {flex: 1},
})

const SignOut = () => {
  return (
    <View style={styles.page}>
      <TouchableOpacity
        onPress={() =>
          auth()
            .signOut()
            .then(() => console.log("Signed Out"))
        }>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignOut
