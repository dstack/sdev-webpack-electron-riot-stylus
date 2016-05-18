var webpack = require('webpack'),
  nib = require('nib'),
  jeet = require('jeet');

var conf = {
  entry:{
    app: [
      'webpack/hot/dev-server',
      './src/main.js'
    ]
  },
  output: {
    path: './app/js',
    filename: '[name].pack.js',
    publicPath: 'http://localhost:8080/js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot',
      Promise: 'lie',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  devServer: {
    contentBase: './app',
    publicPath: 'http://localhost:8080/'
  },
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      { test: /\.styl$/, exclude: /node_modules/, loader: 'style-loader!css-loader?-import!stylus-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.(js|tag)$/, exclude: /node_modules/, loader: 'babel', presets: ['es2015'] }
    ]
  },
  stylus: {
    use: [nib(), jeet()],
    import: ['~nib/lib/nib/index.styl','~jeet/stylus/jeet/index.styl']
  }
};

module.exports = conf;
