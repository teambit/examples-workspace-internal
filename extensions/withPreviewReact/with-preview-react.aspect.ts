import { Aspect } from '@teambit/harmony';

export type WithPreviewReactConfig = {
  /**
   * Type for config variables, e.g. as populated with the default config supplied below
   */
};

export const WithPreviewReactAspect = Aspect.create({
  id: 'teambit.use-case-examples/envs.with-preview',
  defaultConfig: {
    // add config variables here, e.g. data fetching api endpoints
  },
});
