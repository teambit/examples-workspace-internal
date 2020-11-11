import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { BabelAspect, BabelMain } from '@teambit/babel';
import ts from 'typescript';
// import * as babelModule from 'babel-core';

const jest = require('jest');
const tsconfig = require('./typescript/tsconfig.json');
// const webpackConfig = require('./webpack/webpack.config');
const babelConfig = require('./babel/babel.config.json');

export class HarmonyReactBabelExtension {
  constructor(private react: ReactMain) {}

  static dependencies = [EnvsAspect, ReactAspect, BabelAspect];

  static async provider([envs, react, babel]: [EnvsMain, ReactMain, BabelMain]) {

    const babelCompiler = babel.createCompiler({babelTransformOptions: babelConfig});

    const harmonyReactBabelEnv = react.compose([
      // @ts-ignore
       react.overrideTsConfig(tsconfig, ts),
      react.overrideJestConfig(require.resolve('./jest/jest.config'), jest),
      react.overrideCompiler(babelCompiler),
      react.overrideCompilerTasks([babelCompiler.createTask()])
      // react.overrideDevServerConfig(webpackConfig),
    ]);

    envs.registerEnv(harmonyReactBabelEnv);
    return new HarmonyReactBabelExtension(react);
  }
}
