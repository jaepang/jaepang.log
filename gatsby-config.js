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
    facebookAppID: process.env.MYBLOG_FACEBOOK_APP_ID
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        mdx: false,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                className: `anchor-header`,
                maintainCase: false,
                removeAccents: true,
                elements: [`h1`, `h2`, `h3`, `h4`],
                offsetY: 100,
                icon: `<svg aria-hidden="true" focusable="false" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              },
            },
          ],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
          ],
        },
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
