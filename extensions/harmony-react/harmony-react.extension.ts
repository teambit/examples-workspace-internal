import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import ts from 'typescript';

const jest = require('jest');
const tsconfig = require('./typescript/tsconfig.json');
const webpackConfig = require('./webpack/webpack.config');

export class HarmonyReactExtension {
  constructor(private react: ReactMain) {}

  static dependencies = [EnvsAspect, ReactAspect];

  static async provider([envs, react]: [EnvsMain, ReactMain]) {
    const harmonyReactEnv = react.compose([
      // @ts-ignore
      react.overrideTsConfig(tsconfig, ts),
      react.overrideJestConfig(require.resolve('./jest/jest.config'), jest),
      // react.overrideDevServerConfig(webpackConfig),
    ]);

    envs.registerEnv(harmonyReactEnv);
    return new HarmonyReactExtension(react);
  }
}
