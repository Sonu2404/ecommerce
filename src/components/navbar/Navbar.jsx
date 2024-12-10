import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [jewelryOpen, setJewelryOpen] = useState(false);
  const [perfumeOpen, setPerfumeOpen] = useState(false);

  const toggleCategories = () => setCategoriesOpen(!categoriesOpen);
  const toggleJewelry = () => setJewelryOpen(!jewelryOpen);
  const togglePerfume = () => setPerfumeOpen(!perfumeOpen);

  return (
    
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>Home</li>

        {/* Categories Dropdown */}
        <li className={styles.navItem}>
          <li onClick={toggleCategories} className={styles.dropdownBtn}>
            Categories
          </li>
          {categoriesOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownRow}>
                <h4>Electronics</h4>
                <ul>
                  <li>Desktop</li>
                  <li>Laptop</li>
                  <li>Camera</li>
                  <li>Tablet</li>
                  <li>Headphone</li>
                </ul>
              </div>
              <div className={styles.dropdownRow}>
                <h4>Men's</h4>
                <ul>
                  <li>Shirt</li>
                  <li>Shorts</li>
                  <li>Jeans</li>
                  <li>Safety Shoes</li>
                  <li>Wallet</li>
                </ul>
              </div>
              <div className={styles.dropdownRow}>
                <h4>Women's</h4>
                <ul>
                  <li>Dress & Frock</li>
                  <li>Earrings</li>
                  <li>Necklace</li>
                  <li>Makeup Kit</li>
                </ul>
              </div>
              <div className={styles.dropdownRow}>
                <h4> Electronics</h4>
                <ul>
                  <li>Smart Watch</li>
                  <li>Smart TV</li>
                  <li>Keyboard</li>
                  <li>Mouse</li>
                  <li>Microphone</li>
                </ul>
              </div>
            

            </div>
          )}
        </li>
        <li className={styles.navItem}>
          <li onClick={toggleJewelry} className={styles.dropdownBtn}>
            MEN'S
          </li>
          {jewelryOpen && (
            <div className={styles.dropdowns}>
              <div className={styles.dropdownRows}>
                <ul>
                  <li>Shirt</li>
                  <li>Shorts & Jeans</li>
                  <li>Safety Shoes</li>
                  <li>Wallet</li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li className={styles.navItem}>
          <li onClick={toggleJewelry} className={styles.dropdownBtn}>
          WOMEN'S
          </li>
          {jewelryOpen && (
            <div className={styles.dropdownss}>
              <div className={styles.dropdownRows}>
                <ul>
                  <li> Dress & Frock</li>
                  <li>Earrings</li>
                  <li>Necklace</li>
                  <li>Makeup Kit</li>
                   </ul>
              </div>
            </div>
          )}
        </li>

        {/* Jewelry Dropdown outside Categories */}
        <li className={styles.navItem}>
          <li onClick={toggleJewelry} className={styles.dropdownBtn}>
            Jewelry
          </li>
          {jewelryOpen && (
            <div className={styles.dropdowns1}>
              <div className={styles.dropdownRow}>
                <ul>
                  <li>Earrings</li>
                  <li>Couple Rings</li>
                  <li>Necklace</li>
                  <li>Bracelets</li>
                </ul>
              </div>
            </div>
          )}
        </li>

        {/* Perfume Dropdown outside Categories */}
        <li className={styles.navItem}>
          <li onClick={togglePerfume} className={styles.dropdownBtn}>
            Perfume
          </li>
          {perfumeOpen && (
            <div className={styles.dropdowns2}>
              <div className={styles.dropdownRow}>
                <ul>
                  <li>Clothes Perfume</li>
                  <li>Deodorant</li>
                  <li>Flower Fragrance</li>
                  <li>Air Freshener</li>
                </ul>
              </div>
            </div>
          )}
        </li>

        <li className={styles.navItem}>Blog</li>
        <li className={styles.navItem}>Hot Offers</li>
      </ul>
    </nav>
  );
};

export default Navbar;
