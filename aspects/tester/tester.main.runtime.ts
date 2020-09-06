import { TesterAspect } from './tester.aspect';
import { MainRuntime } from '@teambit/cli';

export class TesterMain {
  static runtime = MainRuntime;
  
  static async provider() {
    return new TesterMain();
  }
}

TesterAspect.addRuntime(TesterMain);
