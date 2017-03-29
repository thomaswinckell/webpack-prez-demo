const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require( './package.json' );


const nodeEnv = process.env.NODE_ENV || 'development';
const buildPath = path.join(__dirname, './build'); // TODO : avoid redundancy


const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(nodeEnv),
        },
    }),
    new HtmlWebpackPlugin({
        template: './index.html',
        path: buildPath,
        appMountId: 'app',
        mobile: true,
        filename: 'index.html',
        title: pkg.name
    }),
];

const rules = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
            loader  : 'babel-loader'
        }],
    },
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce : "pre",
        loader:  "source-map-loader"
    },
    {
        test:   /\.(png|jpg|jpeg|gif|bmp)$/,
        use: [{
            loader : "file-loader",
            options : {
                name : "images/[hash].[ext]"
            }
        }]
    },
    {
        test:   /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9-\.=]+)?$/,
        use: [{
            loader : "file-loader",
            options : {
                name : "fonts/[hash].[ext]"
            }
        }]
    },
];

module.exports = {
    rules,
    plugins
};