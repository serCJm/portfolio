import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Thanks = () => (
	<Layout>
		<SEO title="Thank You" />
		<div style={{ textAlign: "center", color: "var(--hero-font)" }}>
			<h1 style={{ margin: "10rem auto", color: "var(--hero-font)" }}>
				Thanks
			</h1>
			<p>I got your message and will reply ASAP. Have an awesome day!</p>
		</div>
	</Layout>
);

export default Thanks;
