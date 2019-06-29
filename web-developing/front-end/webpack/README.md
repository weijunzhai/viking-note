# Note For Webpack

## Initial and Install

#### 1, Init projects and install webpack and webpack-cli:

  npm init -y
  npm install webpack webpack-cli --save-dev

#### 2, Create webpack.config.js file under project folder.
**webpack.config.js**

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
- **entry**: entry file, everything run begin with
- **output**: output path
- **mode**: either development or production
- **module**: 
- **plugins**: 

## Loaders

#### 1, Loader config example

```javascript
module: {
  rules: [ 
    {
      test: /\.(png|jpg)$/, 
      use: ['file-loader']
    },
    {
      test: /\.css$/, 
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.scss$/, 
      use: ['style-loader', 'css-loader', 'sass-loader']
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
      use: ['handlebars-loader']
    }
  ]
}
```

#### 2, Keywords Explaination:
- **rules**:
- **test**:
- **use**:
- **exclude**:
- **loader**:
- **options**:


#### 3, Key Loaders
- **style-loader**:
- **file-loader**:
- **css-loader**:
- **sass-loader**:
- **babel-loader**:

## Plugins:

#### 1, Plugins config example

```javascript
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
	plugins: [
		new TerserPlugin(),
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

```

#### 2, Commonly used plugins:
- terser-webpack-plugin
- mini-css-extract-plugin
- clean-webpack-plugin
- html-webpack-plugin


#### 3, Key notes



## Production vs Development

mode: production | development;
The mode on the config file can be access by code:  process.env.NODE_ENV












