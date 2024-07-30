module.exports = {
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      http: require.resolve("stream-http"),
      net: require.resolve("net-browserify"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
};