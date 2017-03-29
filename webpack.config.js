const path = require('path');
const commonConfig = require('./webpack.common.config');
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');

const isProduction =  process.env.NODE_ENV === 'production';

const buildPath = path.join(__dirname, './build');
const sourcePath = './src';
const context = path.join(__dirname, sourcePath);

let plugins = [].concat(commonConfig.plugins);
let rules = [].concat(commonConfig.rules);


if (isProduction) {
    plugins.push(...prodConfig.plugins);
    rules.push(...prodConfig.rules);
} else {
    plugins.push(...devConfig.plugins);
    rules.push(...devConfig.rules);
}


module.exports = {
    devtool: isProduction ? 'source-map' : 'eval',
    context,
    entry: {
        app: './index.jsx'
    },
    output: {
        path: buildPath,
        publicPath: '/',
        filename: 'js/[name]-[hash].js',
    },
    module: {
        rules,
    },
    resolve: {
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
        modules: [
            'node_modules',
            sourcePath,
        ],
    },
    plugins,
    devServer: {
        contentBase: isProduction ? buildPath : sourcePath,
        port: 3000,
        compress: isProduction,
        inline: !isProduction,
        hot: !isProduction,
        host: '0.0.0.0',
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            },
        },
    },
};