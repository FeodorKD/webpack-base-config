import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { Configuration } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IConfigOptions } from "./types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";


export function buildPlugins(options: IConfigOptions): Configuration['plugins'] {
    const isProd = options.mode === 'production'
    const isDev = options.mode === 'development'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: options.paths.html,
            favicon: path.resolve(options.paths.public, 'favicon.ico')
        }),
        /**Позволяет использовать переменные окружения в коде*/
        new webpack.DefinePlugin({
            __PLATFORM__ : JSON.stringify(options.platform)
        }),
        /**Вынесение проыерки типов в отдельный процес*/
        new ForkTsCheckerWebpackPlugin(),

    ]

    if(isProd) {
        if(options.analyzer){
            plugins.push(new BundleAnalyzerPlugin());
        }
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
        plugins.push(new CopyPlugin({
            patterns: [
                { from: path.resolve(options.paths.public, 'locales'), to: path.resolve(options.paths.output, 'locales') },
            ]})
        )
    }

    if(isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ReactRefreshPlugin())
    }
    

    return plugins
}