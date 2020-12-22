export const deps = {
    dependencies: {
      react: '-',
    },
    // TODO: add this only if using ts
    devDependencies: {
      '@types/react': '16.9.43',
      '@types/react-router-dom': '^5.1.5',
    },
    // TODO: take version from config
    peerDependencies: {    
      react: '^16.13.1',
      'react-dom': '^16.13.1',
      "handlebars-loader": {
        version: "1.7.1",
        resolveFromEnv: true
      }
    },
  }