import {Text, TouchableOpacity, View} from "react-native"

// import { useAuth } from "hooks"

const SignIn = () => {
  // const auth = useAuth()
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={
        // auth.signIn
        () => null
      }>
        <Text>
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn
