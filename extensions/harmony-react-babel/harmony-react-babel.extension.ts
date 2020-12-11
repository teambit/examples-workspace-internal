import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { BabelAspect, BabelMain } from '@teambit/babel';
import ts from 'typescript';
// import * as babelModule from 'babel-core';

const jest = require('jest');
const tsconfig = require('./typescript/tsconfig.json');
// const webpackConfig = require('./webpack/webpack.config');
const babelConfig = require('./babel/babel.config.json');

const deps = {
  dependencies: {
    react: '-',
  },
  // TODO: add this only if using ts
  devDependencies: {
    'core-js': '^3.6.5',
    '@types/react': '16.9.43',
    '@types/jest': '~26.0.9',
    '@types/mocha': '-',
    '@types/react-router-dom': '^5.1.5',
  },
  // TODO: take version from config
  peerDependencies: {
    react: '^16.13.1',
    'react-dom': '^16.13.1',
    'enzyme': {
      version: '3.11.0',
      resolveFromEnv: true
    },
    'enzyme-to-json': {
      version: '3.6.1',
      resolveFromEnv: true
    }
  },
}

export class HarmonyReactBabelExtension {
  constructor(private react: ReactMain) {}

  static dependencies: any = [EnvsAspect, ReactAspect, BabelAspect];

  static async provider([envs, react, babel]: [EnvsMain, ReactMain, BabelMain]) {

    const babelCompiler = babel.createCompiler({babelTransformOptions: babelConfig});

    const harmonyReactBabelEnv = react.compose([
      // @ts-ignore
      react.overrideTsConfig(tsconfig, ts),
      react.overrideJestConfig(require.resolve('./jest/jest.config'), jest),
      react.overrideCompiler(babelCompiler),
      react.overrideCompilerTasks([babelCompiler!.createTask!()]),
      react.overrideDependencies(deps)
      // react.overrideDevServerConfig(webpackConfig),
    ]);

    envs.registerEnv(harmonyReactBabelEnv);
    return new HarmonyReactBabelExtension(react);
  }
}
