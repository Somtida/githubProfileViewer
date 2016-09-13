module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'app/js/main.js'
  },
  module: {
    loader: [
      {
        test: /\.jsx?$/,
        loaders: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}
