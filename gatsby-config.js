module.exports = {
  siteMetadata: {
    title: "Cloud für das Neuland",
    description: "Repository des <Cloud für das Neuland>-Projekt",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",

    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `utilities`,
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-iubenda-cookie-footer",
      options: {
        iubendaOptions: {
          consentOnContinuedBrowsing: false,
          ccpaAcknowledgeOnDisplay: true,
          whitelabel: false,
          lang: "de",
          siteId: 2251601,
          enableCcpa: true,
          countryDetection: true,
          reloadOnConsent: false,
          cookiePolicyId: 80467400,
          cookiePolicyUrl: "/datenschutz",
          banner: {
            acceptButtonDisplay: true,
            customizeButtonDisplay: true,
            position: "top",
            acceptButtonColor: "#EA6509",
            acceptButtonCaptionColor: "white",
            customizeButtonColor: "#D5D5D5",
            customizeButtonCaptionColor: "#5E5E5E",
            rejectButtonColor: "#0073CE",
            rejectButtonCaptionColor: "white",
            textColor: "#5E5E5E",
            backgroundColor: "white",
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/main.scss"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-plugin-netlify`, // make sure to keep it last in the array
      options: {
        headers: {
          "/*": ["X-Frame-Options: sameorigin"],
        },
        mergeSecurityHeaders: false,
      },
    },
  ],
};
