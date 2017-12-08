const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: [
            'angular',
            'angular-ui-router/release/angular-ui-router.js',
            'jquery',
            'lodash',
            'bootstrap',
            'bootstrap/dist/css/bootstrap.css',
            'components-font-awesome'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'www')
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(bower_components|node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /(bower_components|node_modules)/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            }
        ]
    },
    resolve: {
        modules: ['bower_components', 'node_modules']
    },
    plugins: [
        new CleanWebpackPlugin(['www']),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        })
    ],
    devtool: 'source-map'
}
