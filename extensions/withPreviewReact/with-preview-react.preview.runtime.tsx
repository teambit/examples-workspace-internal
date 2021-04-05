import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeContext } from '@teambit/use-case-examples.theme.theme-context';
import { WithPreviewReactConfig, WithPreviewReactAspect } from './with-preview-react.aspect';

export class WithPreviewReactPreview {
  constructor(private config: WithPreviewReactConfig) {}

  /**
   * this is how other aspects can now access the runtime's configured values.
   */
  getConfigs() {
    // add configs here
  }

  static runtime: any = PreviewRuntime;

  static dependencies: any = [ReactAspect];

  static async provider([react]: [ReactPreview], config: WithPreviewReactConfig) {
    const withPreviewReactPreview = new WithPreviewReactPreview(config);
    // register a new provider to wrap all compositions in the symphony-react environment.
    react.registerProvider([
      ThemeContext,
    ]);

    return withPreviewReactPreview;
  }
}

WithPreviewReactAspect.addRuntime(WithPreviewReactPreview);
