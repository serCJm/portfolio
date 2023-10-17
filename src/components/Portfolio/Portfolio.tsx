import React from "react";
import PageTitle from "../UI/PageTitle";
import * as classes from "./Portfolio.module.css";
import Project from "./Project/Project";

interface IProps {
	projects: any[];
}

const Portfolio = ({ projects }: IProps) => {
	return (
		<div className={classes.container}>
			<PageTitle>projects.</PageTitle>
			{projects.map((project, i) => (
				<Project key={project.title} project={project} index={i} />
			))}
		</div>
	);
};

export default Portfolio;
