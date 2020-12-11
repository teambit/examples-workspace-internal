const reactJestConfig = require('@teambit/react/jest/jest.config');

module.exports = {
  ...reactJestConfig,

  setupFilesAfterEnv: [require.resolve('./jest.setup.js')],
  transformIgnorePatterns: [
    "/node_modules/(?!(prop-types|@teambit|@bit))",
  ],
  snapshotSerializers: [require.resolve("enzyme-to-json/serializer")]
};
