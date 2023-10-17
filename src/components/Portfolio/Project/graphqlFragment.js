import { graphql } from "gatsby";

export const projectImage = graphql`
	fragment projectImage on File {
		childImageSharp {
			gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, backgroundColor: "transparent")
		}
	}
`;
