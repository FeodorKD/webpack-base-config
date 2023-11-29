import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { IConfigOptions } from './types'
import { buildPlugins } from './buildPluggins'

export function buildWebpack(options: IConfigOptions): webpack.Configuration  {
    const isProd = options.mode === 'production'
    const isDev = options.mode === 'development'
    return {
        mode: options.mode ?? 'development',
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}