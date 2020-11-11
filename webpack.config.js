/* eslint-disable no-undef */
const path = require('path');

const config = {
  mode: 'production',
  entry: path.join(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, './demo'),
    filename: 'widget.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.txt'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        include: [path.resolve('src')],
        loader: 'ts-loader',
        options: {
          transpileOnly: false,
          compilerOptions: {
            module: 'es2015',
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
