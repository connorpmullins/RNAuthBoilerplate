# Design Considerations

### Authorization Token Storage
Auth Tokens often need to be persisted between user sessions, and their storage should be secure. 
There is a common perception that AsyncStorage is not secure, due to the fact that it doesn't encrypt stored data. 
For this reason, people often use tools like Oblador's [react-native-keychain](https://github.com/oblador/react-native-keychain)
or [expo-secure-store](https://github.com/expo/expo/tree/master/packages/expo-secure-store#installation-in-bare-react-native-projects)
to persist sensitive data.

While these tools are ultimately MORE secure, AsyncStorage still is secure as long as our user hasn't
jailbroken their device or an attacker doesn't have physical access to the user's device. The reason is
given in the react native docs:
```
Async Storage is not shared between apps: every app has its own sandbox environment and has no access
to data from other apps.
```
There is a more in-depth discussion of this [here](https://stackoverflow.com/a/39112472/8594291).

Ultimately, if security is a major concern for the app you're developing, I would reccommend using an encrypted
keystore, but for the purpose of this boilerplate and many applications, AsyncStorage is a more multi-use and simple
method of storing and retrieving auth tokens as well as other data we want to persist between app sessions.