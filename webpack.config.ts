import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { IConfigPath, TConfigMode, TConfigPlatform } from './config/build/types';

interface EnvVariables {
  mode?: TConfigMode;
  port?: number;
  analyzer?: boolean;
  platform?: TConfigPlatform;
}

export default (env: EnvVariables): webpack.Configuration => {
    const paths: IConfigPath = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    };

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths: paths,
        analyzer: env.analyzer ?? false,
        platform: env.platform ?? 'desktop',
    });
    return config;
};
