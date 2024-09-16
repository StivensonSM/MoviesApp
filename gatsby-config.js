/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `MoviesApp`,
    description: `Project created as a laboratory for Pragma.`,
    author: `@StivensonSM, @SantiagoQuintero`,
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "1-Y7ciBgV0GNhZsdDrUO9xBux2uXtxAFdQfQVEzA7-Q",
      "spaceId": "eoxgsecf1823"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};