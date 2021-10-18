module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // ! has to be listed last (https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation)
  ],
};
