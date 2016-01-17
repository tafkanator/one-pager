var Webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'app' ,'index.js')
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{ test: /\.js$/, include: path.resolve(__dirname, 'app'), loader: 'babel-loader' },
			{ test: /\.css/, include: path.resolve(__dirname, 'app'), loaders: ['style', 'css?sourceMap'] },
			{ test: /\.(png|jpg|)$/, loader: 'url?limit=10000&name=[name].[ext]' }
		]
	},

	plugins: [
		new Webpack.NoErrorsPlugin()
	],

	debug: true,

	devtool: 'source-map'
};