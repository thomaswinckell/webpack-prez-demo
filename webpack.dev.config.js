const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

const plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
];

const rules = [{
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
}];

module.exports = {
    rules,
    plugins
};