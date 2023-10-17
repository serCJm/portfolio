import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as classes from "./Social.module.css";

interface ISocial {
	github: string;
}

const Social: React.FC<ISocial> = ({ github }) => {
	return (
		<div className={classes.linkContainer}>
			<a
				href={github}
				target="_blank"
				rel="noopener noreferrer"
				className={classes.link}
			>
				<FontAwesomeIcon icon={faGithub} />
			</a>
		</div>
	);
};

export default Social;
