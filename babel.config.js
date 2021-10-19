module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          assets: './assets',
          components: './app/components',
          hooks: './app/hooks',
          navigators: './app/navigators',
          providers: './app/providers',
          screens: './app/screens',
          utils: './app/utils',
        },
      },
    ],
  ],
};
