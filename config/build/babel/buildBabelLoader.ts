import { type IConfigOptions } from '../types';

export function buildBabelLoader({ mode }: IConfigOptions) {
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    ['@babel/preset-react', { runtime: isDev ? 'automatic' : 'classic' }],
                ],
            },
        },
    };
}
