const path = require('path');

const distDirectory = path.resolve(__dirname, 'dist');

module.exports = {
    entry: [
        './src/js/main.js'
    ],
    output: {
        path: distDirectory,
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
