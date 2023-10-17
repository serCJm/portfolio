import React from "react";
import Navbar from "./Navbar/Navbar";
import { gatsbySite } from "./styles/layout.module.css";
import "./styles/variables.css";
// import Footer from "./Footer/Footer";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	React.useEffect(() => {
		const clearAnim = () => sessionStorage.removeItem("homePageAnim");
		window.addEventListener("beforeunload", clearAnim);
		return () => window.removeEventListener("beforeunload", clearAnim);
	}, []);
	return (
		<React.StrictMode>
			<div className={gatsbySite}>
				<Navbar></Navbar>
				<main>{children}</main>

				{/* <Footer /> */}
			</div>
		</React.StrictMode>
	);
};
export default Layout;
