import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { NodeAspect, NodeMain } from '@teambit/node';

//const jest = require('jest');
const tsconfig = require('./typescript/tsconfig.json');
//const webpackConfig = require('./webpack/webpack.config');

export class UrbanSharingNodeExtension {
  constructor(private node: NodeMain) {}

  static dependencies: any = [EnvsAspect, NodeAspect];

  static async provider([envs, node]: [EnvsMain, NodeMain]) {
    const deps = {
      dependencies:{
        "@babel/runtime": "7.12.5"
      },
      devDependencies: {
        "@types/node": "^14.14.13",
        "@types/mocha": "^8.0.4",
        "mocha": "^8.2.1"        
      }
    }

    const urbansharingNodeEnv = node.compose([
      node.overrideTsConfig(tsconfig),
      node.overrideDependencies(deps),
      //node.overrideJestConfig(require.resolve('./jest/jest.config'), jest),
      // react.overrideDevServerConfig(webpackConfig),
    ]);

    envs.registerEnv(urbansharingNodeEnv);
    return new UrbanSharingNodeExtension(node);
  }
}
