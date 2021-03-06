require("dotenv").config({
  version: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Picked Organic Farm',
    author: 'Hunter Chang',
    description: 'A Gatsby.js V2 Starter based on Dimension by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo-min.png', // This path is relative to the root of the site.
      },
    },
    {
        resolve: 'gatsby-plugin-snipcartv3020',
        options: {
            version: process.env.version,
            apiKey: 'MmQ0ZmU2NDEtZjc4MS00NjBmLThlN2EtYjliYzVmYTQ4MGI3NjM3MDI2MTI1Mjk1NTczMjAz', // use public api key here or in environment variable
        },
    },
  ],
};
