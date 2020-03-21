const withCSS = require('@zeit/next-css')
const withMDX = require('@next/mdx')()

const cssSetup = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    })

    return config
  },
})

module.exports = withMDX(cssSetup)
