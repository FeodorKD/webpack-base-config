import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IConfigOptions } from "./types";
import ReactRefreshTypescript from "react-refresh-typescript";
import {buildBabelLoader} from "./babel/buildBabelLoader";


export function buildLoaders(options: IConfigOptions) : ModuleOptions['rules']{
    const isDev = options.mode === 'development'

    const cssLoaderWithModule =  {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path]_[name]__[local]' : '[hash:base64:8]'
            },
            
        },
      }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoaderWithModule,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const imagesLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use:[
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }

    const babelLoader = buildBabelLoader(options)

    const typescriptLoader = {
        //ts-loader умеет работать с jsx, если проект без ts, то используем babel-loader
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypescript()].filter(Boolean)
                    }),
                    transpileOnly: true
                }
            }
        ]
    }

    return [
        imagesLoader,
        sassLoader,
        //typescriptLoader,
        babelLoader,
        svgrLoader
    ]
    
}