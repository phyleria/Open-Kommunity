const path = require('path');

module.exports = function override(config, env) {
  // Add the fallback for `os` module
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "os": require.resolve("os-browserify/browser"),
  };
  return config;
};
