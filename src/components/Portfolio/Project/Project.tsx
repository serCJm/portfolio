import React, { useState } from "react";
import Image from "../Image/Image";
import Implementation from "./Implementation/Implementation";
import * as classes from "./Project.module.css";
import ProjectTitle from "./ProjectTitle/ProjectTitle";

interface IProject {
	title: string;
	description: string;
	implementation: string[];
	link: string;
	imageId: string;
	github: string;
}

interface IProps {
	project: any;
	index: number;
}

const Project = ({ project, index }: IProps) => {
	const [showImplementation, setImplementation] = useState(false);

	return (
		<div className={classes.container}>
			<section className={classes.content}>
				<ProjectTitle
					title={project.title}
					setImplementation={() =>
						setImplementation(!showImplementation)
					}
				/>
				<p className={classes.description}>{project.description}</p>
				<Implementation
					implementation={project.implementation}
					showImplementation={showImplementation}
					setImplementation={() =>
						setImplementation(!showImplementation)
					}
					github={project.github}
					link={project.link}
				/>
			</section>
			<Image
			  gatsbyImageData={project.gatsbyImageData}
				imageId={project.imageId}
				title={project.title}
				alt={project.link}
				link={project.link}
				index={index}
			/>
		</div>
	);
};

export default Project;
