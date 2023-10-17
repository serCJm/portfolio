import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import Portfolio from "../components/Portfolio/Portfolio";
import Layout from "../components/layout";
import SEO from "../components/seo";

export interface IPortfolioProject {
	title: string;
	description: string;
	implementation: string[];
	link: string;
	imageId: string;
	github: string;
}

export interface IPortfolioNode {
	node: {
		pageTitle: string;
		pageKeywords: string[];
		projects: IPortfolioProject[];
		description: string;
	};
}

interface IProps {
		allPortfolioJson: {
			edges: IPortfolioNode[];
		};
		allFile: any
}

const PortfolioPage = () => {
	const data: IProps = useStaticQuery(graphql`
    query {
      allPortfolioJson {
        edges {
          node {
            pageTitle
            pageKeywords
            description
            projects {
              title
              description
              implementation
              link
              imageId
              github
            }
          }
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  console.log("Data from GraphQL query:", data);

  const imageMap: { [key: string]: any } = {};
  data.allFile.edges.forEach(({ node }: any) => {
  	if (node.childImageSharp) { // Check if it's an image that Gatsby processes
    	imageMap[node.relativePath.split('.')[0]] = node.childImageSharp.gatsbyImageData;
  }
});

  const projectsWithImages = data.allPortfolioJson.edges[0].node.projects.map((project: any) => {
    return {
      ...project,
      gatsbyImageData: imageMap[project.imageId],
    };
  });

  return (
    <Layout>
		<SEO
				title={data.allPortfolioJson.edges[0].node.pageTitle}
				keywords={data.allPortfolioJson.edges[0].node.pageKeywords}
				description={data.allPortfolioJson.edges[0].node.description}
			/>
      <Portfolio projects={projectsWithImages} />
    </Layout>
  );
}

export default PortfolioPage;
