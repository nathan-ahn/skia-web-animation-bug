const { withExpo } = require('@expo/next-adapter')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'dripsy',
    '@dripsy/core',
    'moti',
    'app',
    'react-native-reanimated',
    '@expo/html-elements',
    'react-native-gesture-handler',
    '@shopify/react-native-skia',
  ],
  webpack: (config) => {
    config.resolve.alias["react-native/Libraries/Image/AssetRegistry"] = false;
    if(!config.resolve.fallback) {
      config.resolve.fallback = {}
    }
    config.resolve.fallback.fs = false
    return config
  }
}

module.exports = withExpo(nextConfig)
