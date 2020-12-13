export const deps = {
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