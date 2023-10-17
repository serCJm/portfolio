import React from "react";
import * as classes from "./PageTitle.module.css";

interface IProps {
	children: React.ReactNode;
}

const PageTitle = ({ children }: IProps) => {
	return <h1 className={classes.pageTitle}>{children}</h1>;
};

export default PageTitle;
