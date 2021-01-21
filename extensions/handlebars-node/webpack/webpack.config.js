module.exports = {
  module: {
    rules: [{ test: /\.handlebars$/, loader: require.resolve('handlebars-loader') }],
  },
};
