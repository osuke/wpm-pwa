workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new workboxPlugin.GenerateSW({
        swDest: 'sw.js',
        clientsClaim: true,
        skipWaiting: true,
      })
    ]
  }
}