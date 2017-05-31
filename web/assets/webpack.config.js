var _ = require('lodash');
var path = require('path');
var buildConfigs = require('./build.config.js');

module.exports = {

	entry: './js/src/product/detail.js',
	output: {
		filename: 'detail.js',
		path: './js/release/product/'
	},
	module: {
		loaders: [
			{ test: /\.mst$/, loader: 'raw-loader' },
			{ test: /\.tpl$/, loader: 'raw-loader' },
		]
	}
};