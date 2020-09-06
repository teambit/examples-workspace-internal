import { ReactEnv } from '@teambit/react';

export class HarmonyReactEnv {
  constructor(
    private reactEnv: ReactEnv
  ) {}

  getCompiler() {
    return this.reactEnv.getCompiler();
  }
}
