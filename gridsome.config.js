module.exports = {
  chainWebpack(config) {
    config.mode('production')
  },

  siteName: 'Reasonably Selenium\'s Blog',
  siteDescription: 'A blog made by Reasonably Selenium',


  templates: {
    Post: '/blog/:year/:month/:title',
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
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