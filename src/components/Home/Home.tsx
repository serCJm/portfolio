import React from "react";
import Social from "../Hero/Social/Social";
import Title from "../UI/Title/Title";
import * as classes from "./Home.module.css";
import HomeSVG from "./HomeSVG/HomeSVG";

interface IHome {
	github: string;
}

const Home: React.FC<IHome> = ({ github }) => {
	return (
		<div className={classes.wrapper}>
			<HomeSVG></HomeSVG>
			<Title>Javascript/React Front-End Developer</Title>
			<Social github={github}></Social>
		</div>
	);
};

export default Home;
