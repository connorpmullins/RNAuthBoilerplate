# Why does this boilerplate exist?

The purpose of this boilerplate is to facilitate the rapid creation of React Native apps that
require some form of user authentication.

This boilerplate is designed to work with multiple types of authentication [TO-DO: enumerate which types].
It uses the firebase auth API and is plug-and-play with that service.

The boilerplate uses:

- React Navigation to handle routing between authenticated and inauthenticated states
- Typescript because strong typing decreases the mental overhead needed to dive into a new codebase
- ESLint & Prettier to enforce & standardize styling across the codebase
- Husky to lint as a pre-commit step
- Github Actions to run tests and compile typescript

# How to Use

1. Follow the [`Getting Started`](https://rnfirebase.io/) steps for React Native firebase WITH THE FOLLOWING CHANGES

- Replace the GoogleService-Info files in the boilerplate with the ones you generate during the Firebase setup steps
- Don't worry about adding the requested in-line code changes, as they're already in the code here :thumbs-up:
  - If you want to still go check out the files they talk about in the setup docs, it might not be a bad idea

2. Ensure you have enabled the type of authentication you want to use in your Firebase Console / App

3. In the `SignIn` screen, import the authorization component that matches the authentication method you want to use.

4. Profit

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
Async Storage is not shared between apps: every app has its own
sandbox environment and has no access to data from other apps.
```

There is a more in-depth discussion of this [here](https://stackoverflow.com/a/39112472/8594291).

Ultimately, if security is a major concern for the app you're developing, I would reccommend using an encrypted
keystore, but for the purpose of this boilerplate and many applications, AsyncStorage is a more multi-use and simple
method of storing and retrieving auth tokens as well as other data we want to persist between app sessions.
