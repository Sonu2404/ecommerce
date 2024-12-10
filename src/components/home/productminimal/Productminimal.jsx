
import React, { useState } from "react";
import styles from './Productminimal.module.css';
import { FaHeart, FaEye, FaRedo, FaShoppingBag } from "react-icons/fa";
import clothes1 from "../../home/images/clothes-1.jpg"
import clothes2 from "../../home/images/clothes-2.jpg"
import clothes3 from "../../home/images/clothes-3.jpg"
import clothes4 from "../../home/images/clothes-4.jpg"
import jacket1 from "../../home/images/jacket-1.jpg"
import jacket2 from "../../home/images/jacket-2.jpg"
import jacket3 from "../../home/images/jacket-3.jpg"
import jacket4 from "../../home/images/jacket-4.jpg"
import sports1 from "../../home/images/sports-1.jpg"
import sports2 from "../../home/images/sports-2.jpg"
import sports3 from "../../home/images/sports-3.jpg"
import sports4 from "../../home/images/party-wear-1.jpg"
import sports6 from "../../home/images/sports-6.jpg"
import shoe3 from "../../home/images/shoe-3.jpg"
import shoe1 from "../../home/images/shoe-1.jpg"
import shoe2 from "../../home/images/shoe-2.jpg"
import watch1 from "../../home/images/watch-1.jpg"
import watch2 from "../../home/images/watch-2.jpg"
import watch4 from "../../home/images/watch-4.jpg"
import jewellery1 from "../../home/images/jewellery-1.jpg"
import jewellery2 from "../../home/images/jewellery-2.jpg"
import jewellery3 from "../../home/images/jewellery-3.jpg"
import watch3 from "../../home/images/watch-3.jpg"
import shampoo from "../../home/images/shampoo.jpg"
import belt from "../../home/images/belt.jpg"
import perfume from "../../home/images/perfume.jpg"
import icon1 from "../../home/icons/dress.svg"
import icon2 from "../../home/icons/shoes.svg"
import icon3 from "../../home/icons/jewelry.svg"
import icon4 from "../../home/icons/perfume.svg"
import icon5 from "../../home/icons/cosmetics.svg"
import icon6 from "../../home/icons/glasses.svg"
import icon7 from "../../home/icons/bag.svg"
import shirt1 from "../../home/images/shirt-1.jpg"
import shirt2 from "../../home/images/shirt-2.jpg"
import partywear1 from "../../home/images/party-wear-1.jpg"
import partywear2 from "../../home/images/party-wear-2.jpg"
import short1 from "../../home/images/shorts-1.jpg"
import short2 from "../../home/images/shorts-2.jpg"
import sport5 from "../../home/images/sports-4.jpg"
// import clothes3 from "../../home/images/clothes-3.jpg"
// import clothes4 from "../../home/images/clothes-2.jpg"
const Productminimal = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown state
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const dropdownData = [
    {
      label: "Clothes",
      icon: icon1, // Icon for Clothes category
      items: ["Shirt", "Shorts & Jeans", "Jacket", "Dress & Frock"]
    },
    {
      label: "Footwear",
      icon: icon2, // Icon for Footwear category
      items: ["Sports", "Formal", "Casual", "Safety Shoes"]
    },
    {
      label: "Jewelry",
      icon:icon3, // Icon for Jewelry category
      items: ["Earring Rings", "Couple Rings", "Clothes Perfume"]
    },
    {
      label: "Perfume",
      icon:icon4, // Icon for Perfume category
      items: ["Clothes Perfume", "Deodorant", "Jacket", "Dress & Frock"]
    },
    {
      label: "Cosmetics",
      icon:  icon5, // Icon for Cosmetics category
      items: ["Shampoo", "Sunscreen", "Body Wash", "Makeup Kit"]
    },
    {
      label: "Glasses",
      icon: icon6, // Icon for Glasses category
      items: ["Sunglasses", "Shorts & Jeans", "Lenses", "Dress & Frock"]
    },
  ];

  const products = [
    {
      id: 1,
      imageDefault: jacket1,
      imageHover: jacket2,
      name: "Smart Watch Vital Plus",
      price: "$120.00",
      oldPrice: "$150.00",
      category: "watches",
    },
    {
      id: 2,
      imageDefault: shirt1,
      imageHover: shirt2,
      name: "Men's Casual Shoes",
      price: "$90.00",
      oldPrice: "$110.00",
      category: "shoes",
    },
    {
      id: 3,
      imageDefault: jacket3,
      imageHover: jacket4,
      name: "Cotton Shirt",
      price: "$45.00",
      oldPrice: "$60.00",
      category: "shirts",
    },
    {
      id: 4,
      imageDefault: clothes3,
      imageHover: clothes4,
      name: "Winter Jacket",
      price: "$100.00",
      oldPrice: "$130.00",
      category: "jackets",
    },
    {
      id: 5,
      imageDefault: shoe1,
      imageHover:shoe2,
      name: "Leather Bag",
      price: "$80.00",
      oldPrice: "$100.00",
      category: "bags",
    },
    {
      id: 6,
      imageDefault: watch3,
      imageHover: watch4,
      name: "Floral Skirt",
      price: "$50.00",
      oldPrice: "$70.00",
      category: "skirts",
    },
    {
      id: 7,
      imageDefault: watch1,
      imageHover: watch2,
      name: "Stylish Glasses",
      price: "$30.00",
      oldPrice: "$40.00",
      category: "accessories",
    },
    {
      id: 8,
      imageDefault: partywear1,
      imageHover:partywear2,
      name: "Classic Watch",
      price: "$150.00",
      oldPrice: "$200.00",
      category: "watches",
    },
    {
      id: 9,
      imageDefault: jacket1,
      imageHover: jacket2,
      name: "Baseball Cap",
      price: "$25.00",
      oldPrice: "$35.00",
      category: "hats",
    },
    {
      id: 10,
      imageDefault: sports2,
      imageHover: sport5,
      name: "Denim Jeans",
      price: "$60.00",
      oldPrice: "$80.00",
      category: "pants",
    },
    {
      id: 11,
      imageDefault: shoe1,
      imageHover: shoe3,
      name: "Formal Shoes",
      price: "$110.00",
      oldPrice: "$140.00",
      category: "shoes",
    },
    {
      id: 12,
      imageDefault:short1,
      imageHover: short2,
      name: "Leather Belt",
      price: "$20.00",
      oldPrice: "$30.00",
      category: "accessories",
    },
  ];
  
  const images = [
    { src: "/path/to/image1.jpg", hoverSrc: "/path/to/image1-hover.jpg" },
    { src: "/path/to/image2.jpg", hoverSrc: "/path/to/image2-hover.jpg" },
    { src: "/path/to/image3.jpg", hoverSrc: "/path/to/image3-hover.jpg" },
    { src: "/path/to/image4.jpg", hoverSrc: "/path/to/image4-hover.jpg" },
    // Add more images as needed
  ];
  
  
  // Function to render a product card
  const renderProduct = (imgSrc, altText, title, category, price, oldPrice) => {
    return (
      <div className={styles.showcase} key={title}>
        <a href="#" className={styles.showcaseImgBox}>
          <img src={imgSrc} alt={altText} className={styles.showcaseImg} width="70" />
        </a>
        <div className={styles.showcaseContent}>
          <a href="#">
            <h4 className={styles.showcaseTitle}>{title}</h4>
          </a>
          <a href="#" className={styles.showcaseCategory}>
            {category}
          </a>
          <div className={styles.priceBox}>
            <p className={styles.price}>${price}</p>
            <del>${oldPrice}</del>
          </div>
        </div>
      </div>
    );
  };
  // const products = [
  //   {
  //     img: shampoo,
  //     alt: "Shampoo, conditioner & facewash packs",
  //     title: "Shampoo, Conditioner & Facewash Packs",
  //     desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
  //     price: "$150.00",
  //     originalPrice: "$200.00",
  //     sold: 20,
  //     available: 40,
  //   },
  //   {
  //     img: jewellery1,
  //     alt: "Rose Gold diamonds Earring",
  //     title: "Rose Gold Diamonds Earring",
  //     desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
  //     price: "$1990.00",
  //     originalPrice: "$2000.00",
  //     sold: 15,
  //     available: 40,
  //   },
  // ];


  return (
    <div className={styles.containar}>
      <div className={styles.maincontainar}>
      <div className={styles.sidebar}>
      <div className={styles.Category}>Category</div>
      {dropdownData.map((dropdown, index) => (
        <ul className={styles.menuCategoryList} key={index}>
          <li className={styles.menuCategory}>
            
            <div className={styles.menuTitleFlex}>
              {/* Dynamic icon for each category */}
              <img
                src={dropdown.icon}
                alt={dropdown.label}
                className={styles.menuTitleImg}
                width="20"
                height="20"
              />
              <span className={styles.buttonLabel}>{dropdown.label}</span>
              <button
                className={styles.dropdownButton}
                onClick={() => toggleDropdown(index)}
              >
                <span className={styles.buttonIcon}>
                  {openDropdown === index ? "-" : "+"}
                </span>
              </button>
            </div>

            {/* Dropdown Menu */}
            {openDropdown === index && (
              <ul className={styles.submenuCategoryList}>
                {dropdown.items.map((item, i) => (
                  <li className={styles.submenuCategory} key={i}>
                    <a href="#" className={styles.submenuTitle}>
                      <p className={styles.productName}>{item}</p>
                      <data value="300" className={styles.stock}>
                        {Math.floor(Math.random() * 100) + 1} {/* Random stock value */}
                      </data>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      ))}
    </div>
    <br/>
<div className={styles.mains}>
<div className={styles.card}>
      <div className={styles.cards}>
        <img src={shoe1} alt="Baby Fabric Shoes" className={styles.shoeImage} />
        <div className={styles.shoess}>
          <h3 className={styles.shoes}>Baby Fabric Shoes</h3>
          <h4 className={styles.star}>★★★★★</h4> {/* You can add stars here */}
          <h5 className={styles.stars}>
            <del>$7.00</del> <span className={styles.price}>$5.00</span>
          </h5>
        </div>
      </div>
      
    </div>
    <div className={styles.card}>
      <div className={styles.cards}>
        <img src={shoe1} alt="Baby Fabric Shoes" className={styles.shoeImage} />
        <div className={styles.shoess}>
          <h3 className={styles.shoes}>Baby Fabric Shoes</h3>
          <h4 className={styles.star}>★★★★★</h4> {/* You can add stars here */}
          <h5 className={styles.stars}>
            <del>$7.00</del> <span className={styles.price}>$5.00</span>
          </h5>
        </div>
      </div>
      
    </div>
    <div className={styles.card}>
      <div className={styles.cards}>
        <img src={shoe1} alt="Baby Fabric Shoes" className={styles.shoeImage} />
        <div className={styles.shoess}>
          <h3 className={styles.shoes}>Baby Fabric Shoes</h3>
          <h4 className={styles.star}>★★★★★</h4> {/* You can add stars here */}
          <h5 className={styles.stars}>
            <del>$7.00</del> <span className={styles.price}>$5.00</span>
          </h5>
        </div>
      </div>
      
    </div>
   
    <div className={styles.card}>
      <div className={styles.cards}>
        <img src={shoe1} alt="Baby Fabric Shoes" className={styles.shoeImage} />
        <div className={styles.shoess}>
          <h3 className={styles.shoes}>Baby Fabric Shoes</h3>
          <h4 className={styles.star}>★★★★★</h4> {/* You can add stars here */}
          <h5 className={styles.stars}>
            <del>$7.00</del> <span className={styles.price}>$5.00</span>
          </h5>
        </div>
      </div>
      
    </div>
</div>
      </div>
      <div className={styles.Math}>
    <div className={styles.productShowcas}>
      <div className={styles.main}>
      <div className={styles.productShowcases}>
          <h2 className={styles.title}>Top Rated</h2>
          <div className={`${styles.showcaseWrappere} ${styles.hasScrollbar}`}>
            <div className={styles.showcaseContainer}>
            {/* Product 1 */}
            {renderProduct(
        clothes1, // Pass the imported image
        'Girls pink embroidered design top',
        'Girls Pink Embro Design Top',
        'Clothes',
        '61.00',
        '9.00'
      )}
            {/* Product 2 */}
            {renderProduct(clothes2, "girls pink embro design top", "Girls Pink Embro Design Top", "Clothes", "61.00", "9.00")}
            {/* Product 3 */}
            {renderProduct(clothes3, "black floral wrap midi skirt", "Black Floral Wrap Midi Skirt", "Clothes", "76.00", "25.00")}
            {/* Product 4 */}
            {renderProduct(clothes4, "pure garment dyed cotton shirt", "Pure Garment Dyed Cotton Shirt", "Mens Fashion", "68.00", "31.00")}
          </div>

          <div className={styles.showcaseContainer}>
            {/* Product 5 */}
            {renderProduct(jacket1, "men yarn fleece full-zip jacket", "MEN Yarn Fleece Full-Zip Jacket", "Winter wear", "61.00", "11.00")}
            {/* Product 6 */}
            {renderProduct(jacket2, "mens winter leathers jackets", "Mens Winter Leathers Jackets", "Winter wear", "32.00", "20.00")}
            {/* Product 7 */}
            {renderProduct(jacket3, "mens winter leathers jackets", "Mens Winter Leathers Jackets", "Jackets", "50.00", "25.00")}
            {/* Product 8 */}
            {renderProduct(jacket4, "better basics french terry sweatshorts", "Better Basics French Terry Sweatshorts", "Shorts", "20.00", "10.00")}
          </div>
        </div>
        </div>
      </div>

      <div className={styles.main}>
      <div className={styles.productShowcases}>
          <h2 className={styles.title}>Top Rated</h2>
          <div className={`${styles.showcaseWrappere} ${styles.hasScrollbar}`}>
            <div className={styles.showcaseContainer}>
              {/* Product 1 */}
             
              {renderProduct(sports1, "running & trekking shoes - white", "Running & Trekking Shoes ", "Sports", "49.00", "15.00")}
             
              {/* Product 2 */}
              {renderProduct(sports2 , "trekking & running shoes - black", "Trekking & Running Shoes ", "Sports", "78.00", "36.00")}
              {/* Product 3 */}
              {renderProduct(sports3, "womens party wear shoes", "Womens Party Wear Shoes", "Party Wear", "94.00", "42.00")}
              {/* Product 4 */}
              {renderProduct(sports4, "sports claw women's shoes", "Sports Claw Women's Shoes", "Sports", "54.00", "65.00")}
            </div>

            <div className={styles.showcaseContainer}>
              {/* Product 5 */}
              {renderProduct(sports6, "air trekking shoes - white", "Air Trekking Shoes - White", "Sports", "52.00", "55.00")}
              {/* Product 6 */}
              {renderProduct(shoe3, "Boot With Suede Detail", "Boot With Suede Detail", "Boots", "20.00", "30.00")}
              {/* Product 7 */}
              {renderProduct(shoe1, "men's leather formal wear shoes", "Men's Leather Formal Wear Shoes", "Formal", "56.00", "78.00")}
              {/* Product 8 */}
              {renderProduct(shoe2, "casual men's brown shoes", "Casual Men's Brown Shoes", "Casual", "50.00", "55.00")}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.productShowcases}>
          <h2 className={styles.title}>Top Rated</h2>
          <div className={`${styles.showcaseWrappere} ${styles.hasScrollbar}`}>
            <div className={styles.showcaseContainer}>
              {/* Product 1 */}
             
              {renderProduct(watch3, "pocket watch leather pouch", "Pocket Watch Leather Pouch", "Watches", "50.00", "34.00")}
              {/* Product 2 */}
              {renderProduct(jewellery3, "silver deer heart necklace", "Silver Deer Heart Necklace", "Jewellery", "84.00", "30.00")}
              {/* Product 3 */}
              {renderProduct(perfume, "titan 100 ml womens perfume", "Titan 100 Ml Womens Perfume", "Perfume", "42.00", "10.00")}
              {/* Product 4 */}
              {renderProduct(belt, "men's leather reversible belt", "Men's Leather Reversible Belt", "Belt", "24.00", "10.00")}
            </div>

            <div className={styles.showcaseContainer}>
              {/* Product 5 */}
              {renderProduct(jewellery2, "platinum zircon classic ring", "Platinum Zircon Classic Ring", "Jewellery", "62.00", "65.00")}
              {/* Product 6 */}
              {renderProduct(watch1, "smart watch vital plus", "Smart Watch Vital Plus", "Watches", "56.00", "78.00")}
              {/* Product 7 */}
              {renderProduct(shampoo, "shampoo conditioner packs", "Shampoo Conditioner Packs", "Cosmetics", "20.00", "30.00")}
              {/* Product 8 */}
              {renderProduct(jewellery1, "rose gold peacock earrings", "Rose Gold Peacock Earrings", "Jewellery", "20.00", "30.00")}
            </div>
          </div>
        </div>
      </div>
     </div>
     <div className={styles.productFeatured}>
      <h2 className={styles.title}>Deal of the Day</h2>
      <div className={styles.showcaseWrapper}>
        {/* Product 1 */}
        <div className={styles.showcaseContainer}>
          <div className={styles.showcases}>
            <div className={styles.showcaseBanner}>
              <img
                src={shampoo}
                alt="Shampoo, Conditioner & Facewash Packs"
                className={styles.showcaseImg}
              />
            </div>
            <div className={styles.showcaseContent}>
              <div className={styles.showcaseRating}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>
              <a href="#" className={styles.showcaseTitles}>
                Shampoo, Conditioner & Facewash Packs
              </a>
              <p className={styles.showcaseDesc}>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
                consectetur Lorem ipsum dolor.
              </p>
              <div className={styles.priceBox}>
                <span className={styles.prices}>$150.00</span>
                <p className={styles.dels}>$200.00</p>
              </div>
              <button className={styles.addCartBtn}>Add to Cart</button>
              <div className={styles.showcaseStatus}>
                <div className={styles.statusWrapper}>
                  <p>Already Sold: <b>20</b></p>
                  <p>Available: <b>40</b></p>
                </div>
                <div className={styles.showcaseStatusBar}></div>
              </div>
              <div className={styles.countdownBox}>
                <p className={styles.countdownDesc}>Hurry Up! Offer ends in:</p>
                <div className={styles.countdown}>
                  <div className={styles.countdownContent}>
                    <p className={styles.displayNumber}>360</p>
                    <p className={styles.displayText}>Days</p>
                  </div>
                  <div className={styles.countdownContent}>
                    <p className={styles.displayNumber}>24</p>
                    <p className={styles.displayText}>Hours</p>
                  </div>
                  <div className={styles.countdownContent}>
                    <p className={styles.displayNumber}>59</p>
                    <p className={styles.displayText}>Min</p>
                  </div>
                  <div className={styles.countdownContent}>
                    <p className={styles.displayNumber}>00</p>
                    <p className={styles.displayText}>Sec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className={styles.showcaseContainer}>
          <div className={styles.showcases}>
            <div className={styles.showcaseBanner}>
              <img
                src={jewellery1}
                alt="Rose Gold Diamonds Earring"
                className={styles.showcaseImg}
              />
            </div>
            <div className={styles.showcaseContent}>
              <div className={styles.showcaseRating}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>
              <a href="#" className={styles.showcaseTitle}>
                Rose Gold Diamonds Earring
              </a>
              <p className={styles.showcaseDesc}>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
                consectetur Lorem ipsum dolor.
              </p>
              <div className={styles.priceBox}>
                <span className={styles.price}>$1990.00</span>
                <del>$2000.00</del>
              </div>
              <button className={styles.addCartBtn}>Add to Cart</button>
              <div className={styles.showcaseStatus}>
                <div className={styles.statusWrapper}>
                  <p>Already Sold: <b>15</b></p>
                  <p>Available: <b>40</b></p>
                  {/* <div class={styles.showcasestatus}></div> */}
                </div>
                <div className={styles.showcaseStatusBar}></div>
              </div>
              <div className={styles.countdownBox}>
                <p className={styles.countdownDesc}>Hurry Up! Offer ends in:</p>
                <div className={styles.countdown}>
                  <div className={styles.countdownContent}>
                    <p className={styles.displayNumber}>360</p>
                    <p className={styles.displayText}>Days</p>
                  </div>
                  <div className={styles.countdownContent}>
                    <p className={styles.displayNumber}>24</p>
                    <p className={styles.displayText}>Hours</p>
                  </div>
                  <div className={styles.countdownContent}>
                    <p className={styles.displayNumber}>59</p>
                    <p className={styles.displayText}>Min</p>
                  </div>
                  <div className={styles.countdownContent}>
                    <p className={styles.displayNumber}>00</p>
                    <p className={styles.displayText}>Sec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* {............................................................................................} */}
    <div className={styles.productMains}>
      <h2 className={styles.titleMain}>Responsive Product Grid</h2>
      <div className={styles.productGridMain}>
        {products.map((product) => (
          <div key={product.id} className={`${styles.showcaseMain} card-${product.id}`}>
            <div className={styles.showcaseBannerMain}>
              <img
                src={product.imageDefault}
                alt={product.name}
                className={`${styles.productImgMain} ${styles.default}`}
              />
              <img
                src={product.imageHover}
                alt={product.name}
                className={`${styles.productImgMain} ${styles.hover}`}
              />
              <div className={styles.actionColumnMain}>
                <button className={styles.btnActionMain}>
                  <FaHeart />
                </button>
                <button className={styles.btnActionMain}>
                  <FaEye />
                </button>
                <button className={styles.btnActionMain}>
                  <FaRedo />
                </button>
                <button className={styles.btnActionMain}>
                  <FaShoppingBag />
                </button>
              </div>
            </div>
            <div className={styles.showcaseContentMain}>
              <p className={styles.showcaseCategoryMain}>{product.category}</p>
              <h3 className={styles.showcaseTitleMain}>{product.name}</h3>
              <div className={styles.priceBoxMain}>
                <p className={styles.priceMain}>{product.price}</p>
                <del className={styles.delmain}>{product.oldPrice}</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
    </div>
  );
};

export default Productminimal;
