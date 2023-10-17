import React from "react";
import { Helmet } from "react-helmet-async";
import { StaticQuery, graphql } from "gatsby";

type IMeta =
	| {
			property: string;
			content: string;
	  }
	| {
			name: string;
			content: string;
	  };

interface IProps {
	description?: string;
	lang: string;
	meta: IMeta[];
	keywords: string[];
	title: string;
}

interface ISEOQuery {
	site: {
		siteMetadata: {
			title: string;
			description: string;
			author: string;
		};
	};
}

const detailsQuery = graphql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				title
				description
				author
			}
		}
	}
`;

function SEO({ description, lang, meta, keywords, title }: IProps) {
	return (
		<StaticQuery
			query={detailsQuery}
			render={(data: ISEOQuery) => {
				const metaDescription =
					description || data.site.siteMetadata.description;
				return (
					<Helmet
						htmlAttributes={{
							lang,
						}}
						title={title}
						titleTemplate={`%s | ${data.site.siteMetadata.title}`}
						meta={[
							{
								name: `description`,
								content: metaDescription,
							},
							{
								property: `og:title`,
								content: title,
							},
							{
								property: `og:description`,
								content: metaDescription,
							},
							{
								property: `og:type`,
								content: `website`,
							},
							{
								name: `twitter:card`,
								content: `summary`,
							},
							{
								name: `twitter:creator`,
								content: data.site.siteMetadata.author,
							},
							{
								name: `twitter:title`,
								content: title,
							},
							{
								name: `twitter:description`,
								content: metaDescription,
							},
						]
							.concat(
								keywords.length > 0
									? {
											name: `keywords`,
											content: keywords.join(`, `),
									  }
									: [],
							)
							.concat(meta)}
					/>
				);
			}}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	keywords: [],
};

export default SEO;
