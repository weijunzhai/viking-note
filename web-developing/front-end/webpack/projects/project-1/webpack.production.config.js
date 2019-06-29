const path = require('path');  // with in the webpack, we can not use ES6 import.
// const TerserPlugin = require('terser-webpack-plugin');  // default included in production mode.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, './dist'), 
		publicPath: ''  // the path 
	}, 
	mode: 'production',
	// mode: 'development',

	module: {
		rules: [ 
			{
				test: /\.(png|jpg)$/, 
				use: [
					'file-loader'
				]
			},
			{
				test: /\.css$/, 
				use: [
					// 'style-loader', 'css-loader'      // bundle css file with js file
					MiniCssExtractPlugin.loader, 'css-loader'    // bundle css files as a single file
				]
			},
			{
				test: /\.scss$/, 
				use: [
					// 'style-loader', 'css-loader', 'sass-loader'
					MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
				]
			}, 
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/env' ], 
						plugins: ['transform-class-properties']
					}
				}
			}, 
			{
				test: /\.hbs$/,
				use: [
					'handlebars-loader'
				]
			}

		]
	},

	plugins: [
		// new TerserPlugin(),   // recommand way to compress files. // this is included by default in production mode
		new MiniCssExtractPlugin({
			filename: 'styles.[contenthash].css'
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "Hello World1",
			template: "src/index.hbs", 
			description: "Hi World"
		})
	]
}

/**
 * plugins are additional javascript libraries that do everyything that loaders cannot do.
 *
 * plugins can also modify how the bundles themselves are created. For example, uglifyjsplugin takes the bundle.js and minmizes the contents to decrease the bundle size.
 *
 * 
 */