module.exports = {
  chainWebpack(config) {
    config.mode('production')
  },

  siteName: 'Reasonably Selenium\'s Blog',
  siteDescription: 'A blog made by Reasonably Selenium',


  templates: {
    Post: '/blog/:year/:month/:title',
    sitePage: '/:title',
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: []
        },
        refs: {
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'pages/**/*.md',
        typeName: 'sitePage',
        remark: {
          plugins: []
        },
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    }
  ]
}