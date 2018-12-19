const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: './dist/bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js',],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'awesome-typescript-loader',
                exclude: '/node_modules/',
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
                include: path.resolve(__dirname, 'src'),
            },
        ],
    },
    plugins: [
        new CheckerPlugin(),
    ],
    devServer: {
        hot: true,
    }
};
