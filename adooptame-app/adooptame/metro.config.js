// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Usa react-native-svg-transformer para archivos .svg
config.transformer = {
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  ...config.transformer,
};
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

module.exports = config;
