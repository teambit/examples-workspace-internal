import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { BabelAspect, BabelMain } from '@teambit/babel';
// import * as babelModule from 'babel-core';

const babelConfig = require('./babel/babel.config.json');

export class ReactBabelExtensionBasic {
  constructor(private react: ReactMain) {}

  static dependencies: any = [EnvsAspect, ReactAspect, BabelAspect];

  static async provider([envs, react, babel]: [EnvsMain, ReactMain, BabelMain]) {

    const babelCompiler = babel.createCompiler({babelTransformOptions: babelConfig});

    const harmonyReactBabelEnv = react.compose([
      // @ts-ignore
      react.overrideCompiler(babelCompiler),  
      react.overrideCompilerTasks([babelCompiler!.createTask!()])
    ]);

    envs.registerEnv(harmonyReactBabelEnv);
    return new ReactBabelExtensionBasic(react);
  }
}
