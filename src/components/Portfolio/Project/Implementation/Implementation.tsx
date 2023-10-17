import React from "react";
import SocialLinks from "../../../UI/Social Links/SocialLinks";
import * as classes from "./Implementation.module.css";

interface IProps {
	implementation: string[];
	setImplementation: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	showImplementation: boolean;
	github: string;
	link: string;
}

const Implementation = ({
	implementation,
	setImplementation,
	showImplementation,
	github,
	link,
}: IProps) => {
	return (
		<div
			className={
				showImplementation
					? classes.implementationShow
					: classes.implementationHide
			}
		>
			<div className={classes.titleContainer}>
				<h3 className={classes.title}>Implementation</h3>
				<button
					className={classes.btnClose}
					onClick={setImplementation}
				>
					&times;
				</button>
			</div>
			<div className={classes.contentContainer}>
				<ul className={classes.list}>
					{implementation.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<SocialLinks link1={github} link2={link}></SocialLinks>
			</div>
		</div>
	);
};

export default Implementation;
