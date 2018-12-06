/* eslint camelcase: 0 */
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'parent',
        path: `${__dirname}`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
