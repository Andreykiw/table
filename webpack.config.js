const path = require("path");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /public/],
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel'),
                            '@babel/plugin-transform-runtime'
                        ].filter(Boolean),
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', { runtime: 'automatic' }] 
                        ]
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: [/node_modules/, /public/],
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel'),
                            '@babel/plugin-transform-runtime'
                        ].filter(Boolean),
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', { runtime: 'automatic' }] 
                        ]
                    }
                }
            },
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public', to: '' } 
            ],
        }),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    
    devServer: {
        static: path.resolve(__dirname, 'src'),
        hot: true,
        open: true,
    },
};
