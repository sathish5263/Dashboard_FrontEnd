const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle file name
  },
  module: {  
    rules: [
      // JavaScript/JSX files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // Sass files
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader', // Turns CSS into CommonJS
          'sass-loader' // Turns Sass into CSS
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.mjs', '.json'], // File extensions to resolve
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template
      filename: 'index.html' // Output HTML file name
    })
  ]
};