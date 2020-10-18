module.exports = {
  siteMetadata: {
    title: `けいさん`,
    description: `いろいろなけいさんをすることができます。`,
    author: `@kajirikajiri`,
  },
  plugins: [
    "gatsby-plugin-top-layout",
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    "gatsby-plugin-react-helmet",
  ],
}
