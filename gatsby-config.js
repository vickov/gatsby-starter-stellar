module.exports = {
  siteMetadata: {
    title: "Optimus Dental site",
    author: "Vicko Vitasovic",
    description: "Optimus dental webpages",
    other: 
    { googleMapsKey: "AIzaSyBbFgCgwOGf1cK5YACwl4WkNTfsblnHUwo" }
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
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
