import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `CJ Moro Portfolio`,
		description: `CJ Moro Front-End Web Developer Personal Portfolio`,
		author: `CJ Moro`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		`gatsby-plugin-react-helmet-async`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		"gatsby-transformer-json",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./src/site-data/`,
			},
		},
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `CJ Portfolio`,
				shortName: `Portfolio`,
				startUrl: `/`,
				backgroundColor: `#fff`,
				themeColor: `#2079e0`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},

	],
};

export default config;
