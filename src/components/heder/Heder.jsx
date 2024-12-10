import React from "react";
import styles from "./Header.module.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
const Header = () => {
  return (
    <header>
      <div className={styles.headerTop}>
        <div className={styles.container}>
          <ul className={styles.socialContainer}>
            <li><a href="#" className={styles.socialLink}><IoLogoFacebook /></a></li>
            <li><a href="#" className={styles.socialLink}><FaSquareTwitter /></a></li>
            <li><a href="#" className={styles.socialLink}><FaInstagram /></a></li>
            <li><a href="#" className={styles.socialLink}><FaLinkedin /></a></li>
          </ul>
          <div className={styles.alertNews}>
            <p>
              <b>Free Shipping</b> This Week Order Over - $55
            </p>
          </div>
          <div className={styles.actions}>
            <select name="currency">
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
            </select>
            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.headerMain}>
        <div className={styles.container}>
          <a href="#" className={styles.logo}>
            <img src="./assets/images/logo/logo.svg" alt="Anon's logo" width="120" height="36" />
          </a>
          <div className={styles.searchContainer}>
            <input type="search" name="search" className={styles.searchField} placeholder="Enter your product name..." />
            <button className={styles.searchBtn}>
            <CiSearch />
            </button>
          </div>
          <div className={styles.userActions}>
            <button className={styles.actionBtn}><CgProfile /></button>
            <button className={styles.actionBtn}><FaRegHeart /><span className={styles.count}>0</span></button>
            <button className={styles.actionBtn}><IoBagOutline /><span className={styles.count}>0</span></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
