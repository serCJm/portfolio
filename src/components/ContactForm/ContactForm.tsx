import { navigateTo } from "gatsby-link";
import React, { useState } from "react";
import PageTitle from "../UI/PageTitle";
import * as classes from "./ContactForm.module.css";

interface IEncodeData {
	["form-name"]: string;
	name: string;
	email: string;
	message: string;
	[key: string]: string;
}

function encode(data: IEncodeData) {
	return Object.keys(data)
		.map(
			(key) =>
				encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
		)
		.join("&");
}

const ContactForm = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		const submitForm = e.target as HTMLElement;
		const formName = submitForm.getAttribute("name");
		const action = submitForm.getAttribute("action");
		if (formName && action) {
			fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: encode({
					"form-name": formName,
					...form,
				}),
			})
				.then(() => navigateTo(action))
				.catch((error) => alert(error));
		}
	}
	return (
		<div className={classes.container}>
			<PageTitle>contact.</PageTitle>

			<form
				name="contact"
				method="post"
				action="/thanks"
				data-netlify="true"
				netlify-honeypot="bot-field"
				onSubmit={handleSubmit}
				className={classes.form}
			>
				{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
				<input type="hidden" name="form-name" value="contact" />
				<p hidden>
					<label>
						Don’t fill this out:{" "}
						<input name="bot-field" onChange={handleChange} />
					</label>
				</p>
				<p className={classes.inputContainer}>
					<input
						type="text"
						name="name"
						onChange={handleChange}
						placeholder="your name"
						required
						className={classes.input}
						value={form.name}
					/>
					<label className={classes.label} htmlFor="name">
						Your name:
					</label>
				</p>
				<p className={classes.inputContainer}>
					<input
						type="email"
						name="email"
						onChange={handleChange}
						required
						className={classes.input}
						placeholder="email"
						value={form.email}
					/>
					<label className={classes.label} htmlFor="email">
						Your email:
					</label>
				</p>
				<p className={classes.inputContainer}>
					<textarea
						name="message"
						onChange={handleChange}
						required
						className={classes.textarea}
						placeholder="message"
						value={form.message}
					/>
					<label className={classes.label} htmlFor="message">
						Message:
					</label>
				</p>
				<p className={classes.btnContainer}>
					<button type="submit" className={classes.btn}>
						Submit
					</button>
				</p>
			</form>
		</div>
	);
};

export default ContactForm;
