module.exports = {
  outputDir: 'docs',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/what-to-eat/'
    : '/'
}
