const webpack = require('webpack');
const path = require('path');
const pkg = require( './package.json' );

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const buildPath = path.join(__dirname, './build');
const sourcePath = path.join(__dirname, './src');

// Common plugins
const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(nodeEnv),
        },
    }),
    new HtmlWebpackPlugin({
        template: path.join(sourcePath, 'index.html'),
        path: buildPath,
        appMountId: 'app',
        mobile: true,
        filename: 'index.html',
        title: pkg.name
    }),
];

// Common rules
const rules = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
            loader  : 'babel-loader',
            options : {
                plugins: ['transform-decorators-legacy' ],
                presets : ["es2015", "stage-0", "react"]
            }
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
        test:   /\.json$/,
        use: [{
            loader : "file-loader",
            options : {
                name : "resources/[hash].[ext]"
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


if (isProduction) {

    // Production plugins
    plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function(module){
                return module.context && module.context.indexOf("node_modules") !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            debug: false,
            minimize: true,
            sourceMap: true,
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new ExtractTextPlugin({
            filename: 'css/style-[hash].css',
            disable: false,
            allChunks: true
        })
    );

    // Production rules
    rules.push( {
            test: /\.s?css$/,
            use : ExtractTextPlugin.extract({
                fallback : [{
                    loader : "style-loader"
                }],
                use : [ {
                    loader : "css-loader",
                    options : {
                        sourceMap : true
                    }
                }, {
                    loader : "postcss-loader",
                    options : {
                        sourceMap : true,
                        sourceComments : false,
                        plugins: function () {
                            return [
                                require('autoprefixer')({
                                    browsers: [
                                        'last 3 version',
                                        'ie >= 10',
                                    ],
                                })
                            ];
                        }
                    }
                }, {
                    loader  : "sass-loader",
                    options : {
                        sourceMap : true
                    }
                }]
            })
        }
    );
} else {
    // Development plugins
    plugins.push(
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin()
    );

    // Development rules
    rules.push( {
        test: /\.s?css$/,
        use : [ {
            loader : "style-loader"
        }, {
            loader : "css-loader",
            options : {
                sourceMap : true
            }
        }, {
            loader : "postcss-loader",
            options : {
                sourceMap : true,
                sourceComments : true,
                plugins: function () {
                    return [
                        require('autoprefixer')({
                            browsers: [
                                'last 3 version',
                                'ie >= 10',
                            ],
                        })
                    ];
                }
            }
        }, {
            loader  : "sass-loader",
            options : {
                sourceMap : true
            }
        }]
    });
}

module.exports = {
    devtool: isProduction ? 'source-map' : 'eval',
    context: sourcePath,
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