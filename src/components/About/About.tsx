import React from "react";
import Skills from "../Skills/Skills";
import PageTitle from "../UI/PageTitle";
import * as classes from "./About.module.css";

export interface ISkills {
	skill: string;
	level: string;
}

interface IProps {
	about: string;
	skills: ISkills[];
}

const About = ({ about, skills }: IProps) => {
	return (
		<>
			<PageTitle>about.</PageTitle>
			<p className={classes.about}>{about}</p>
			<Skills skills={skills}></Skills>
		</>
	);
};

export default About;
