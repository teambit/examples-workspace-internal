import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { NodeAspect, NodeMain } from '@teambit/node';

const webpackConfig = require('./webpack/webpack.config');
const { deps } = require('./dependencies/deps.js');

export class HandlebarsNodeExtension {
  constructor(private node: NodeMain) {}

  static dependencies: any = [EnvsAspect, NodeAspect];

  static async provider([envs, node]: [EnvsMain, NodeMain]) {

    const HandlebarsNodeEnv = node.compose([
      // @ts-ignore
      node.overrideDependencies(deps),
      node.overrideDevServerConfig(webpackConfig),
      node.overridePreviewConfig(webpackConfig),
    ]);

    envs.registerEnv(HandlebarsNodeEnv);
    return new HandlebarsNodeExtension(node);
  }
}
