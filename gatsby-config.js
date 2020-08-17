require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `jaepang.log`,
    siteTitleAlt: `jaepang.log`,
    siteHeadline: `log of jaepang`,
    siteUrl: `http://code.jaepang.dev:8000`,
    siteDescription: `개발자이자 인간 신재광의 로그가 찍히는 공간입니다.`,
    siteLanguage: `ko/en`,
    siteImage: `/banner.jpg`,
    author: `@jaepang`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/jaepang`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/jk_extends_soldier/`,
          },
        ],
        formatString: `YYYY년 M월 D일`
      },
    },
    
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Pacifico', 'Song Myung', 'Gelasio', 'Arizonia', 'Ubuntu Mono']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jaepang.log`,
        short_name: `jk log`,
        description: `개발자이자 인간 신재광의 로그가 찍히는 공간입니다.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#EE5DA9`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
