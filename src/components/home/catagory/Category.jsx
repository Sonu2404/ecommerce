import React from 'react';
import styles from './Category.module.css';

// Import SVGs properly
import logo1 from "../../home/icons/coat.svg";
import logo2 from "../../home/images/dress.svg";
import glasses from "../../home/icons/glasses.svg"; // Example of importing more icons
import logo3 from "../../home/icons/bag.svg"
import logo4 from "../../home/icons/shorts.svg"
import logo5 from "../../home/icons/hat.svg"
import logo6 from "../../home/icons/jacket.svg"
import logo7 from "../../home/icons/watch.svg"

const Category = () => {
  const categories = [
    { img: logo1, title: 'Dress & frock', amount: 53 },
    { img: logo2, title: 'Winter wear', amount: 58 },
    { img: glasses, title: 'Glasses & lens', amount: 68 },
    {img: logo3, title: 'Bag', amount:67 },
    {img: logo4, title:"Shorts & jeans", amount:86},
    {img: logo5, title:"Hat & caps", amount:57},
    {img: logo6,title:"Jacket",amount:87},
    {img: logo7,title:"Watch", amount:98},
    // Repeat the import for the remaining icons
  ];


  return (
    <div className={styles.category}>
      <div className={styles.container}>
        <div className={styles.categoryItemContainer}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryItem}>
              <div className={styles.categoryImgBox}>
                <img src={category.img} alt={category.title} width="30" />
              </div>
              <div className={styles.categoryContentBox}>
                <div className={styles.categoryContentFlex}>
                  <h3 className={styles.categoryItemTitle}>{category.title}</h3>
                  <p className={styles.categoryItemAmount}>({category.amount})</p>
                </div>
                <a href="#" className={styles.categoryBtn}>
                  Show all
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
