const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        './src/jigits.js'
    ],

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'jigits.js',
        //publicPath: 'dist/',
    },
    devtool: "source-map",
    performance: {
        hints: false
    },
    watchOptions: {
        aggregateTimeout: 100,
    },
    plugins: [
        //new CleanWebpackPlugin(['app/assets/admin/build']),
        new MiniCssExtractPlugin({
            filename: 'jigits.css',
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                //include: path.resolve(__dirname, PATHS.source + 'src/js'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: 'env'
                    }
                }
            },

            {
                test: /\.(sass|scss)$/,
                use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /fonts/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            useRelativePath: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 80,

                            }
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                exclude: /fonts/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img/',
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                exclude: /img/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            //useRelativePath: true,
                            outputPath: 'fonts/',
                            name: '[name].[ext]'
                        },
                    },
                ],
            }

        ]
    },
};