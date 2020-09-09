import { EnvsMain, EnvsAspect } from '@teambit/environments';
import { ReactAspect, ReactMain } from '@teambit/react';

const tsconfig = require('./typescript/tsconfig.json');
const webpackConfig = require('./webpack/webpack.config');

export class HarmonyReactExtension {
  constructor(private react: ReactMain) {}

  /**
   * icon of the extension.
   */
  icon() {
    return this.react.icon;
  }

  static dependencies = [EnvsAspect, ReactAspect];

  static async provider([envs, react]: [EnvsMain, ReactMain]) {
    const harmonyReactEnv = react.compose([
      // react.overrideTsConfig(tsconfig),
      // react.overrideJestConfig(require.resolve('./jest/jest.config')),
      // react.overrideDevServerConfig(webpackConfig),
    ]);

    envs.registerEnv(harmonyReactEnv);
    return new HarmonyReactExtension(react);
  }
}
