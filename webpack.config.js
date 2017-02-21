var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index'
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {path: __dirname, filename: 'bundle.js'},
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                babel: {
                    presets: ['es2015', 'stage-0']
                },
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['react-hot-loader', {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'stage-0', 'react'],
                    }
                }],
                include: [
                    path.resolve(__dirname, "src"),
                ],
                exclude: /node_modules/
            }
        ]
    }
};