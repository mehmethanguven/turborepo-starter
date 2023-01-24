// module.exports = {
//   reactStrictMode: true,
//   experimental: {
//     transpilePackages: ["ui"],
//   },
// };
const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  reactStrictMode: true,
})
