/** @type {import('next').NextConfig} */
const withLess = require('next-with-less')

const nextConfig = withLess({
  reactStrictMode: true,
  swcMinify: true,
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        'primary-color': '#9900FF',
        'border-radius-base': '4px'
      }
    }
  }
})

module.exports = nextConfig
