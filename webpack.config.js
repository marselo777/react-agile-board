const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');
const MiniCss = require('mini-css-extract-plugin');

const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

const loaderImage = path.resolve(__dirname, './loaders/cjs.js');

const config = {
    entry: {
        app: resolve('./src/index.tsx'),
        root: resolve('./src/root'),
        theme: resolve('./src/theme'),
        routes: resolve('./src/routes'),
        containers: resolve('./src/containers'),
        components: resolve('./src/components'),
        widgets: resolve('./src/widgets'),
        entities: resolve('./src/entities'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js',
        publicPath: '/',
    },
    target: 'web',
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'loaders'),
            'node_modules',
        ],
        alias: {
            components: resolve('src/components/'),
            containers: resolve('src/containers/'),
            routes: resolve('src/routes/'),
            widgets: resolve('src/widgets/'),
            entities: resolve('src/entities/'),
            root: resolve('src/root/'),
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        fallback: {
            stream: false,
        },
    },
    devtool: 'source-map',
    devServer: {
        port: 8080,
        historyApiFallback: true,
        hot: true,
        open: true,
        stats: 'errors-only',
        contentBase: path.join(__dirname, 'dist'),
        contentBasePublicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
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
    optimization: {
        runtimeChunk: 'single',
    },
};

module.exports = config;
