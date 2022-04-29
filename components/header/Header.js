import React from 'react'
import Link from "next/link";
import Styles from "../../styles/Header.module.css";
 const Header = () => {
  return (
    <header className={Styles.header_container}>
        <nav className={Styles.nav}>
           <h1 className={Styles.logo_Title}><Link href="/">Sound Track</Link></h1>
           <ul className={Styles.Header_Lists}>
             <li className={Styles.Header_List}>
                <Link href="/">Home</Link>
             </li>
             <li className={Styles.Header_List}>
                <Link href="/about">About</Link>
             </li>
           </ul> 
        </nav>
    </header>
  )
}
export default Header;