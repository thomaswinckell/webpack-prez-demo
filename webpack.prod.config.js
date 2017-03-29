const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: function(module) {
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
        mangle: true,
        compress: {
            sequences: true,  // join consecutive statemets with the “comma operator”
            properties: true,  // optimize property access: a["foo"] → a.foo
            dead_code: true,  // discard unreachable code
            drop_debugger: true,  // discard “debugger” statements
            unsafe: false, // some unsafe optimizations (see below)
            conditionals: true,  // optimize if-s and conditional expressions
            comparisons: true,  // optimize comparisons
            evaluate: true,  // evaluate constant expressions
            booleans: true,  // optimize boolean expressions
            loops: true,  // optimize loops
            unused: true,  // drop unused variables/functions
            hoist_funs: true,  // hoist function declarations
            hoist_vars: false, // hoist variable declarations
            if_return: true,  // optimize if-s followed by return/continue
            join_vars: true,  // join var declarations
            cascade: true,  // try to cascade `right` into `left` in sequences
            side_effects: true,  // drop side-effect-free statements
            warnings: false,  // warn about potentially dangerous optimizations/code
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
];

const rules = [{
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
}];

module.exports = {
    rules,
    plugins
};