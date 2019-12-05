var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                //use: 'babel-loader',
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
        ],
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}