module.exports = {
  siteMetadata: {
    title: `HI I'M BRYAN`,
    subTitle: `M DEVELOPER`,
    description: `Web Developer, software engineer, Java, JavaScript, Python`,
    author: `Bryan Sánchez`,
  },

  
  flags: { THE_FLAG: false },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name:`Im Bryan`,
        short_name:`Bryan`,
        start_url: `/`,
        background_color: `#1b1b1b`,
        theme_color: `#171717`,
        display: `standalone`,
        icon: `src/components/img/icon-f.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Reem Kufi`
       
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/ 
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
};
