import React from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"

import auth from "@react-native-firebase/auth"

const styles = StyleSheet.create({
  page: {flex: 1},
})

/**
 *
 * @returns JSX Element
 * @description
 * Accepts any 'SignOut' method component,
 * Makes the methods `onSignOut` and `onSignOutError` available to children
 *  - `onSignOut` may not work, as routing is being handled by our AuthProvider
 */
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
