import { Link } from "gatsby";
import React from "react";
import * as classes from "./Navigation.module.css";

type Props = {
	drawerMenu: boolean;
};

const pages = ["about", "portfolio", "contact"];

const Navigation = ({ drawerMenu }: Props) => {
	const path = typeof window !== "undefined" ? window.location.href : "";

	const notHomePage = pages.some((el) => path.includes(el));

	const homePageLink = (
		<li className={classes.navLiHome} key="home-page">
			<Link
				className={classes.navItemHome}
				// to={`/${page.replace("about me", "")}`}
				to="/"
			>
				go home.
			</Link>
		</li>
	);

	return (
		<nav className={drawerMenu ? classes.navigation : classes.closed}>
			<ul className={classes.navList}>
				{notHomePage && homePageLink}
				{pages.map((page) => (
					<li className={classes.navLi} key={page}>
						<Link
							className={classes.navItem}
							// to={`/${page.replace("about me", "")}`}

							to={`/${page}`}
							activeClassName={classes.navItemActive}
						>
							{page}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
