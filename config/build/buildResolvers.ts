import { Configuration } from 'webpack';
import { IConfigOptions } from './types';
export function buildResolvers(options: IConfigOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src,
        },
    };
}
