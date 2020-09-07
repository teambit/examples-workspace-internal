import { EnvsMain, EnvsAspect } from '@teambit/environments';
import { ReactAspect, ReactMain } from '@teambit/react';
import tsconfig from './typescript/tsconfig.json';

export class HarmonyReactExtension {
  constructor(
    private react: ReactMain
  ) {}

  /**
   *  return aspect icon
   */
  icon() {
    return this.react.icon();
  }

  static dependencies = [EnvsAspect, ReactAspect];

  static async provider([envs, react]: [EnvsMain, ReactMain]) {
    const harmonyReactEnv = envs.pipe([
      react.overrideTsConfig(tsconfig),
      react.overrideWebpackConfig(webpackConfig)
    ]);
    // const harmonyReactEnv = react
    //     .overrideTsConfig(tsconfig)
    //     .overrideJestConfig('./jest.config.js')
    //     .overrideWebpackConfig()
    //     .overrideBuildPipeline([])
    //     .overrideTemplate()
    //     .getComposedEnv();

    envs.registerEnv(harmonyReactEnv);

    return new HarmonyReactExtension(react);
  }
}
