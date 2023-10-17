import React, { useState } from "react";
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import { navbar, overlay } from "./Navbar.module.css";
import Navigation from "./Navigation/Navigation";

const Navbar = () => {
	const [drawerMenu, setDrawer] = useState(false);
	return (
		<div className={overlay}>
			<div className={navbar}>
				<DrawerToggle drawerMenu={drawerMenu} setDrawer={setDrawer} />
			</div>

			<Navigation drawerMenu={drawerMenu} />
		</div>
	);
};

export default Navbar;
