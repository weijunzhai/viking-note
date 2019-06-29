# Note For Webpack

## Initial and Install

### 1, init projects and install webpack and webpack-cli:

	npm init -y
	npm install webpack webpack-cli --save-dev

### 2, create webpack.config.js file under project folder.
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
				use: [
					'file-loader'
				]
			},
			{
				test: /\.css$/, 
				use: [
					'style-loader', 'css-loader'
				]
			}
		]
	},

	plugins: []
}
```


