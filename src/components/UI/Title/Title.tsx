import React from "react";
import * as classes from "./Title.module.css";

interface IProps {
	children: React.ReactNode;
}

const Title = ({ children }: IProps) => {
	return <h1 className={classes.title}>{children}</h1>;
};

export default Title;
