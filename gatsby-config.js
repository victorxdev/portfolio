module.exports = {
  siteMetadata: {
    title: "Victor - Digital Portfolio",
    author: "Victor",
    description: "Victor's Digital Portfolio"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-PPP83FV",
        // Include GTM in development.
        // Defaults to false mTextTrackCueon.
        includeInDevelopment: false,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
