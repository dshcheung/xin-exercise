module.exports = {
  chainWebpack: function (config) {
    // change default main.js to main.jsx
    return config.entry('app').clear().add('./src/main.jsx').end();
  },
  // For adding in stuff without chainWebpack
  // configureWebpack: {
  // }
};