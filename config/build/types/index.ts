export interface IConfigPath {
  entry: string;
  output: string;
  html: string;
  src: string;
  public: string;
}

export type TConfigMode = 'development' | 'production';
export type TConfigPlatform = 'mobile' | 'desktop';

export interface IConfigOptions {
  port: number;
  paths: IConfigPath;
  mode: TConfigMode;
  analyzer: boolean;
  platform: TConfigPlatform;
}
