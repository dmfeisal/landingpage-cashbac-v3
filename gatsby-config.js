'use strict';
// require("dotenv").config({
// 	path: `.env`
// });

const siteUrl = ``;

module.exports = {
	siteMetadata: {
		title: 'Cashback App with Best Deals in Indonesia | cashbac.com',
		author: 'PT. Global Pay Indonesia',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'Cashback App with the Best Deals in Indonesia | Cashbac.com',
		keywords: `Cashbac is a cashback app with many rewards promo that can be used at your favorite merchants in Indonesia. Download Cashbac now!`,
		twitter: 'https://twitter.com/cashbacapp',
		gatsby: 'https://www.gatsbyjs.org/',
		siteUrl: 'localhost:8000'
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
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
