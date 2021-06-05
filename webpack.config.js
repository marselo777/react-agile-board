const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');
const MiniCss = require('mini-css-extract-plugin');
const streamBrowserify = require('stream-browserify');

const path = require('path');

const config = {
    entry: {
        app: path.join(__dirname, './src/index.tsx'),
        root: path.join(__dirname, './src/root'),
        theme: path.join(__dirname, './src/theme'),
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    target: 'es6',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        fallback: {
            stream: false,
        },
    },
    devtool: 'inline-source-map',
    devServer: {
        publicPath: '/',
        port: 6060,
        historyApiFallback: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        hot: true,
        overlay: false,
        host: '127.0.0.1',
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
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
            extensions: ['ts', 'tsx', 'js', 'jsx'],
        }),
        new MiniCss(),
    ],
    // stream: streamBrowserify,
};

module.exports = config;
