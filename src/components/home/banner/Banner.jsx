import React from "react";
import styles from "./Banner.module.css";
import banner1 from '../../home/images/banner-1.jpg'
import banner2 from '../../home/images/banner-2.jpg'
import banner3 from '../../home/images/banner-3.jpg'
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.sliderContainer}>
          {/* Slider Item 1 */}
          <div className={styles.sliderItem}>
            <img
              src={banner1}
              alt="women's latest fashion sale"
              className={styles.bannerImg}
            />
            <div className={styles.bannerContent}>
              <p className={styles.bannerSubtitle}>Trending item</p>
              <h2 className={styles.bannerTitle}>Women's latest <br/>fashion sale</h2>
              <p className={styles.bannerText}>
                starting at &dollar; <b>20</b>.00
              </p>
              <a href="#" className={styles.bannerBtn}>
                Shop now
              </a>
            </div>
          </div>

          {/* Slider Item 2 */}
          <div className={styles.sliderItem}>
            <img
              src={banner2}
              alt="modern sunglasses"
              className={styles.bannerImg}
            />
            <div className={styles.bannerContent}>
              <p className={styles.bannerSubtitle}>Trending accessories</p>
              <h2 className={styles.bannerTitle}>Modern sunglasses</h2>
              <p className={styles.bannerText}>
                starting at &dollar; <b>15</b>.00
              </p>
              <a href="#" className={styles.bannerBtn}>
               <button> Shop now</button>
              </a>
            </div>
          </div>

          {/* Slider Item 3 */}
          <div className={styles.sliderItem}>
            <img
              src={banner3}
              alt="new fashion summer sale"
              className={styles.bannerImg}
            />
            <div className={styles.bannerContent}>
              <p className={styles.bannerSubtitle}>Sale Offer</p>
              <h2 className={styles.bannerTitle}>New fashion summer sale</h2>
              <p className={styles.bannerText}>
                starting at &dollar; <b>29</b>.99
              </p>
              <br/>
              <a href="#" className={styles.bannerBtn}>
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
