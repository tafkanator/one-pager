var path = require('path');

var appPath = path.resolve(__dirname, 'app');

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'app' ,'index.js')
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},

	eslint: {
		configFile: '.eslintrc',
		emitError: true,
		emitWarning: true
	},

	module: {
		preLoaders: [
			{ test: /\.js$/, include: appPath, loader: 'eslint-loader' }
		],
		loaders: [
			{ test: /\.js$/, include: appPath, loader: 'babel-loader' },
			{ test: /\.html$/, loader: 'html-loader' },
			{ test: /\.css/, include: appPath, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
			{ test: /\.(png|jpg|)$/, loader: 'url?limit=10000&name=[name].[ext]' }
		]
	},

	debug: true,

	devtool: 'source-map'
};