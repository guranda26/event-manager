module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-optional-catch-binding",
    "@babel/plugin-transform-dynamic-import",
    "@babel/plugin-transform-async-generator-functions",
    "@babel/plugin-transform-json-strings",
    "@babel/plugin-transform-object-rest-spread",
  ],
};
