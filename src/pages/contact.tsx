import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Layout from "../components/layout";
import SEO from "../components/seo";

export interface IPortfolioNode {
	node: {
		pageTitle: string;
		pageKeywords: string[];
		description: string;
	};
}

interface IProps {

		allContactJson: {
			edges: IPortfolioNode[];
		};

}

const ContactPage = () => {
	const data: IProps = useStaticQuery(graphql`
		query ContactPageQuery {
			allContactJson {
				edges {
					node {
						pageTitle
						pageKeywords
						description
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO
				title={data.allContactJson.edges[0].node.pageTitle}
				keywords={data.allContactJson.edges[0].node.pageKeywords}
				description={data.allContactJson.edges[0].node.description}
			/>
			<ContactForm />
		</Layout>
	);
};


export default ContactPage;
