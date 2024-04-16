const path = require('path');

module.exports = {
  resolve: {
    fallback: {
        "http": require.resolve("stream-http"),
        "net": require.resolve("net-browserify")

    }
  }
};
