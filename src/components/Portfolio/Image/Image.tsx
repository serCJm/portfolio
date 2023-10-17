import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as classes from "./Image.module.css";

interface IProps {
	gatsbyImageData: any;
	title: string;
	alt: string;
	link: string;
	index: number;
}

const Image = ({ gatsbyImageData, title, alt, link, index }: IProps) => {
	return (
		<div className={classes.container}>
		  <GatsbyImage
			image={gatsbyImageData}
			title={title}
			alt={alt}
			className={classes.image}
		  />
		  <a
			className={index % 2 === 0 ? classes.link : classes.linkAlt}
			href={link}
			target="_blank"
			rel="noopener noreferrer"
		  >
			View Site
		  </a>
		</div>
	  );
};

export default Image;
