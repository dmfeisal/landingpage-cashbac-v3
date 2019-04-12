let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"

require('dotenv').config({
  path: `.env.${activeEnv}`
});
const siteURL = `${process.env.CB_HOST}`

console.log(siteURL)

module.exports = {
	siteMetadata: {
		title: 'Get Instant Cashback for Every Transaction | Cashbac App',
		author: 'PT. Global Pay Indonesia',
		imageUrl: 'https://dl.dropboxusercontent.com/s/yp5xezri84yv0bn/logo-cashbac.png',
		description: 'Guaranteed instant cashback rewards when you dine, shop, and more at thousands of merchants in Indonesia. No expiry period. No top-ups needed.',
		keywords: `Cashbac, Cashback, Promo, Voucher, Promotion, Outlet, Favorite Restaurant, Reward, Cashbac is a cashback app with many rewards promo that can be used at your favorite merchants in Indonesia. Download Cashbac now!`,
		twitter: 'https://twitter.com/cashbacapp',
    facebook: 'https://www.facebook.com/cashbacapp/',
		instagram: 'https://www.instagram.com/cashbacapp/',
		linkedin: 'https://www.linkedin.com/company/cashbac',
		youtube: 'https://www.youtube.com/channel/UC9QEz3fWvpp1guO81L6ejBw',
		gatsby: 'https://www.gatsbyjs.org/',
		siteUrl: siteURL
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `modules`,
				path: `${__dirname}/node_modules`
			}
		},
		`gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Cashbac Reward App',
				short_name: 'Cashbac',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/cashbac-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: `/sitemap.xml`,
				exclude: ["/blog/*"],
				query: `
					{
						site {
							siteMetadata {
								siteUrl
							}
						}
	 
						allSitePage {
							edges {
								node {
									path
								}
							}
						}
				}`
			}
		},
		{
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteURL,
        sitemap: `${siteURL}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
		},
		{
      resolve: `gatsby-transformer-json`,
      options: {
				typeName: 'Json',
				path: `./src/data/`,
      },
		}
		//,`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
