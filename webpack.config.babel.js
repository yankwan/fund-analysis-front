import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';

export default {
    entry: {
        vendor: ['angular'],
        bootstrap: 'bootstrap-loader/extractStyles',  
        app: './src/script/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            { 
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    // 使用css modules
                    use: [{
                            loader: "css-loader",
                            options: {
                                modules: true,
                                localIdentName: '[local]--[hash:base64:5]',
                                sourceMap: true,
                                camelCase: true
                            }
                        }, 'sass-loader']
                  })
            },// ['style-loader', 'css-loader', 'sass-loader']
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: ['ng-annotate-loader','babel-loader?cacheDirectory=true']
            },
            {
                test: /\.html$/,
                exclude: path.resolve(__dirname, './src/script/index.html'),
                use: [
                    { loader:'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src')) },
                    { loader: 'html-loader' }
                ]
            },
            { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
            { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=[name].[ext]' },
            { test: /\.(ttf|eot)$/, loader: 'file-loader?name=[name].[ext]' }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'AngulrJS In ES6',
            minify: {
                collapseWhitespace: true
            },
            inject: 'body',
            hash: true,
            template: path.resolve(__dirname, './src/script/index.html')
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true
        }),
        new UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "manifest"]
        }),
        // new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // })
    ]
}