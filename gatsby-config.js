module.exports = {
  siteMetadata: {
    title: "Cocktail Stack",
    author: {
      name: `Andreas Lautenschlager`,
      summary: `Online Marketing and Development - www.lautenschlager.de`,
    },
    description:
      "Discover the world of cocktails and discover a list of drinks. With instructions and ingredients.",
    siteUrl: "https://cocktails.lautenschlager.de",
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: [
          "react-alice-carousel/lib/alice-carousel.css",
          "src/components/modules/KlaroStyles.scss",
        ], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/img/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({ site, allSitePage }) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://cocktails.lautenschlager.de",
        sitemap: "https://cocktails.lautenschlager.de/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
        output: "/robots.txt",
      },
    },
  ],
}
