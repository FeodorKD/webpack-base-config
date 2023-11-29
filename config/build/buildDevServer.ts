import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { IConfigOptions } from "./types";

export function buildDevServer(options: IConfigOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        //если раздавать статику через nginx, то нужно делать проксирование на index.html
        historyApiFallback: {
            disableDotRule: true,
        },
        hot: true
    }
}