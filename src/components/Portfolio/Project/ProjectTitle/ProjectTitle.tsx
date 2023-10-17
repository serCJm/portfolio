import React from "react";
import * as classes from "./ProjectTitle.module.css";

interface IProps {
	title: string;
	setImplementation: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
}

const ProjectTitle = ({ title, setImplementation }: IProps) => {
	return (
		<div className={classes.titleContainer}>
			<h2 className={classes.title}>{title}</h2>
			<button className={classes.btn} onClick={setImplementation}>
				<span className={classes.circle} />
				<span className={classes.circle} />
				<span className={classes.circle} />
			</button>
		</div>
	);
};

export default ProjectTitle;
