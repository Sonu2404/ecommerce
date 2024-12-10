import React from 'react';
// import styles from './Blog.module.css';
import styles from "./Blog.module.css"
import blog1 from "../../home/images/blog-1.jpg"
import blog2 from "../../home/images/blog-2.jpg"
import blog3 from "../../home/images/blog-3.jpg"
import blog4 from "../../home/images/blog-4.jpg"
const blogs = [
  {
    img: blog1,
    alt: 'Clothes Retail KPIs 2021 Guide for Clothes Executives',
    category: 'Fashion',
    title: 'Clothes Retail KPIs 2021 Guide for Clothes Executives.',
    author: 'Mr Admin',
    date: '2022-04-06',
    formattedDate: 'Apr 06, 2022',
  },
  {
    img: blog2,
    alt: 'Curbside fashion Trends: How to Win the Pickup Battle.',
    category: 'Clothes',
    title: 'Curbside fashion Trends: How to Win the Pickup Battle.',
    author: 'Mr Robin',
    date: '2022-01-18',
    formattedDate: 'Jan 18, 2022',
  },
  {
    img: blog3,
    alt: 'EBT vendors: Claim Your Share of SNAP Online Revenue.',
    category: 'Shoes',
    title: 'EBT vendors: Claim Your Share of SNAP Online Revenue.',
    author: 'Mr Selsa',
    date: '2022-02-10',
    formattedDate: 'Feb 10, 2022',
  },
  {
    img: blog4,
    alt: 'Curbside fashion Trends: How to Win the Pickup Battle.',
    category: 'Electronics',
    title: 'Curbside fashion Trends: How to Win the Pickup Battle.',
    author: 'Mr Pawar',
    date: '2022-03-15',
    formattedDate: 'Mar 15, 2022',
  },
];

const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.blogContainer}>
          {blogs.map((blog, index) => (
            <div className={styles.blogCard} key={index}>
              <a >
                <img
                  src={blog.img}
                  alt={blog.alt}
                  width="300"
                  className={styles.blogBanner}
                />
              </a>
              <div className={styles.blogContent}>
                <a className={styles.blogCategory}>
                  {blog.category}
                </a>
                <a>
                  <h3 className={styles.blogTitle}>{blog.title}</h3>
                </a>
                <p className={styles.blogMeta}>
                  By <cite>{blog.author}</cite> /{' '}
                  <time dateTime={blog.date}>{blog.formattedDate}</time>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
