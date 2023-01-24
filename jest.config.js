const path = require('path')

const fromRoot = d => path.join(__dirname, d)

module.exports = {
  roots: [fromRoot('apps/next-app'), fromRoot('apps/node-server')],
  resetMocks: true,
  coveragePathIgnorePatterns: [],
  collectCoverageFrom: [
    '<rootDir>/components/**/*.{js,ts,tsx}',
    '<rootDir>/pages/**/*.{js,ts,tsx}',
  ],
  coverageThreshold: null,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.jsx?$': 'esbuild-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '@components/(.*)': fromRoot('apps/next-app/components/$1'),
    '@pages/(.*)': fromRoot('apps/next-app/pages/$1'),
  },
}
