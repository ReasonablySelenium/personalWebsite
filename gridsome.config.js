module.exports = {
  chainWebpack(config) {
    config.mode('production')
  },

  siteName: 'Reasonably Selenium\'s Blog',
  siteDescription: 'A blog made by Reasonably Selenium',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    }
  ]
}