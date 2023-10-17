import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Home from "../components/Home/Home";

type Node = {
	node: {
		pageTitle: string;
		pageKeywords: string[];
		heading: string;
		profession: string;
		github: string;
		about: string;
		skills: {
			skill: string;
			level: string;
		};
		qualities: {
			quality: string;
			text: string;
		};
	};
};

type HeaderData = {
	allIndexJson: {
		edges: Node[];
	};
};

const IndexPage = () => {
	const data: HeaderData = useStaticQuery(graphql`
		query HomePageQuery {
			allIndexJson {
				edges {
					node {
						pageTitle
						pageKeywords
						heading
						profession
						github
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO
				title={data.allIndexJson.edges[0].node.pageTitle}
				keywords={data.allIndexJson.edges[0].node.pageKeywords}
			/>
			<Home
				github={data.allIndexJson.edges[0].node.github}
			></Home>
		</Layout>
	);
};

export default IndexPage;
