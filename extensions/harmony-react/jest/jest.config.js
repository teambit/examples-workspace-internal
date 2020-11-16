const reactJestConfig = require('@teambit/react/jest/jest.config');

module.exports = {
  ...reactJestConfig,

  setupFilesAfterEnv: [require.resolve('./jest.setup.js')],
  transformIgnorePatterns: [
    "/node_modules/(?!(prop-types|@teambit))",
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
