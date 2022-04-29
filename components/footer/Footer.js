import React from 'react'
import Styles from "../../styles/Footer.module.css"
 const Footer = () => {
  return (
    <footer className={Styles.footer}>
        Made By <a className={Styles.link} href="https://www.linkedin.com/in/mohamed-elshahawy-6a74a112a/" rel="noreferrer" target="_blank">@MohmedElshshawy</a>
    </footer>
  )
}
export default Footer;