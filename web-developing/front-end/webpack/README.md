# Note For Webpack

## Initial and Install

#### 1, Init projects and install webpack and webpack-cli:

  npm init -y
  npm install webpack webpack-cli --save-dev

#### 2, Create webpack.config.js file under project folder.
**webpack.config.js**
- we use **require** to import package because webpack does not support ES6

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
    An entry point indicates which module webpack should use to begin building out its internal dependency graph. webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

    By default its value is ./src/index.js, but you can specify a different (or multiple entry points) by configuring the entry property in the webpack configuration. 
- **output**: output path
    The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.

- **mode**: either development or production
- **module**: 
- **plugins**: 

## Loaders
    Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

- **text:**
    property identifies which file or files should be transformed.
- **use:**
    property indicates which loader should be used to do the transforming.



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
            est: /\.hbs$/,
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
    While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

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












