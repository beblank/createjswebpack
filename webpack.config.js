module.exports = {
  entry: './app/js/main.js',
  output: {
  	path: './build',
    filename: 'bundle.js'       
  },
  devtool: 'source-map',
  watch: true,
  module: {
  	loaders:[

  	]
  }
};