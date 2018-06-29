var path = require('path')
var webpack = require('webpack')
//var NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: { //Обновлено
    rules: [ //добавили babel-loader
      // {
      //   test: /\.js$/,
      //   loaders: ['eslint-loader'],
      //   include: [
      //     path.resolve(__dirname, "src"),
      //   ],
      // },
      {
        loaders: ['babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/,
      } ,
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                }
            },
            {
                loader: 'postcss-loader'
            }
        ]
    }
    ]
  } ,

  resolve: {
    extensions: ['.js', '.jsx'], //**Change
    modules: [
        'node_modules'
    ]
},
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ,new webpack.NoEmitOnErrorsPlugin()
   /// ,new NpmInstallPlugin() // <--
  ]
}