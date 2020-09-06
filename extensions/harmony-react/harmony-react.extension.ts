import { EnvsMain, EnvsAspect } from '@teambit/environments';
import { ReactAspect, ReactMain } from '@teambit/react';
import { HarmonyReactEnv } from './harmony-react.env';

export class HarmonyReactExtension {
  constructor(
    private env: HarmonyReactEnv
  ) {}

  /**
   *  return aspect icon
   */
  icon() {
    return 'https://static.bit.dev/extensions-icons/react.svg';
  }

  static dependencies = [EnvsAspect, ReactAspect];

  static async provider([envs, react]: [EnvsMain, ReactMain]) {
    const harmonyReactEnv = new HarmonyReactEnv(react.env);
    const env = envs.compose(harmonyReactEnv, react.env);
    envs.registerEnv(env);
    return new HarmonyReactExtension(harmonyReactEnv);
  }
}
