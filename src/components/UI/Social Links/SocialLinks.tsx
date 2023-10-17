import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as classes from "./SocialLinks.module.css";

interface IProps {
	link1: string;
	link2: string;
}

const SocialLinks = ({ link1, link2 }: IProps) => {
	return (
		<div className={classes.linkContainer}>
			<a
				href={link1}
				target="_blank"
				rel="noopener noreferrer"
				className={classes.link}
			>
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a
				href={link2}
				target="_blank"
				rel="noopener noreferrer"
				className={classes.linkRight}
			>
				<FontAwesomeIcon icon={faExternalLinkAlt} />
			</a>
		</div>
	);
};

export default SocialLinks;
