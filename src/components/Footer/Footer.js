import React from "react";
import * as classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      © {new Date().getFullYear()}, Coded by&nbsp;
      <a
        href="https://github.com/serCJm"
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        CJ Moro
      </a>
    </footer>
  );
};

export default Footer;
