import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import About, { ISkills } from "../components/About/About";
import Layout from "../components/layout";
import SEO from "../components/seo";

export interface IAboutNode {
	node: {
		pageTitle: string;
		pageKeywords: string[];
		description: string;
		title: string;
		about: string;
		skills: ISkills[];
	};
}

type AboutData = {
		allAboutJson: {
			edges: IAboutNode[];
		};
}

const AboutPage = () => {
	const data: AboutData = useStaticQuery(graphql`
	query AboutPageQuery {
		allAboutJson {
			edges {
				node {
					pageTitle
					pageKeywords
					description
					about
					skills {
						skill
						level
					}
				}
			}
		}
	}
`);
	return (
		<Layout>
			<SEO
				title={data.allAboutJson.edges[0].node.pageTitle}
				keywords={data.allAboutJson.edges[0].node.pageKeywords}
				description={data.allAboutJson.edges[0].node.description}
			/>
			<About
				about={data.allAboutJson.edges[0].node.about}
				skills={data.allAboutJson.edges[0].node.skills}
			></About>
		</Layout>
	);
};

export default AboutPage;
