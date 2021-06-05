const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');

const path = require('path');

const config = {
    entry: {
        app: path.resolve(__dirname, './src/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    target: 'web',
    resolve: {
        alias: {},
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        publicPath: '/',
        port: 8080,
        historyApiFallback: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        hot: true,
        overlay: false,
        host: '127.0.0.1',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.tsx$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline'},
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Board Agile',
            filename: 'index.html',
            template: path.join(__dirname, './src/index.html'),
        }),
        new CleanWebpackPlugin(),
        new DotEnvPlugin({
            path: './env',
            safe: true,
        }),
        new EsLintPlugin({
            context: path.join(__dirname, './src'),
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
    ],
};

module.exports = config;
