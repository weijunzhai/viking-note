# Note For Webpack

## Initial and Install

#### 1, Init projects and install webpack and webpack-cli:

	npm init -y
	npm install webpack webpack-cli --save-dev

#### 2, Create webpack.config.js file under project folder.
** webpack.config.js **

```javascript
const path = require('path');

module.export = {
	entry: './index.js',

	output: {
		filename: 'bundle.js'
		path: ''
	},

	mode: 'development | production',

	module: {
		rules: [ 
			{
				test: /\.(png|jpg)$/, 
				use: ['file-loader']
			},
			{
				test: /\.css$/, 
				use: ['style-loader', 'css-loader']
			}
		]
	},

	plugins: []
}
```

#### 3, On package.json under 'scripts': put 'build: "webpack"

```javascript
"scripts": {
  "build": "webpack"
}

```

#### 4, keyword explaination
- entry: entry file, everything run begin with
- output: output path
- mode: either development or production
- module: 
plugins: 

## Loaders




