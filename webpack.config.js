var path = require('path');

var config = {
    entry: ['webpack/hot/dev-server','./app/main.js'],

    output: {
        path:  './build',
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        port: 3001
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        },{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }]
    }
};

module.exports = config;