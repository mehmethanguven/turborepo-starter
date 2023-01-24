module.exports = {
  ...require('config/jest-next-app'),
  rootDir: '.',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
}
