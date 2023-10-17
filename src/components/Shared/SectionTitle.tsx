import React from "react";
import * as classes from "./SectionTitle.module.css";

interface IProps {
	children: React.ReactNode;
}

const SectionTitle = ({ children }: IProps) => {
	return <h2 className={classes.title}>{children}</h2>;
};

export default SectionTitle;
