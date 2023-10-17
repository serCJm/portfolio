import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" description="This page is missing" />
		<div style={{ textAlign: "center", color: "var(--hero-font)" }}>
			<h1 style={{ margin: "7rem auto 2rem", color: "var(--hero-font)" }}>
				NOT FOUND
			</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		</div>
	</Layout>
);

export default NotFoundPage;
