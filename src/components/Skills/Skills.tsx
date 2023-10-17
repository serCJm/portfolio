import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import SkillItem from "./SkillItem/SkillItem";
import * as classes from "./Skills.module.css";

interface ISkills {
	skill: string;
	level: string;
}

interface IProps {
	skills: ISkills[];
}

const Skills = ({ skills }: IProps) => {
	return (
		<section className={classes.container}>
			<SectionTitle>skills.</SectionTitle>
			<section className={classes.skillsContainer}>
				{skills.map((item) => (
					<SkillItem key={item.skill} skill={item} />
				))}
			</section>
		</section>
	);
};

export default Skills;
