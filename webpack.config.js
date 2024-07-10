const crypto = require("crypto");
module.exports = {
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: false,
    },
  },
};
