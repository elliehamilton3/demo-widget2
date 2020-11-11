const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.module\.css$/,
    exclude: /\.module\.css$/,
    use: ['style-loader', 'css-loader'],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};