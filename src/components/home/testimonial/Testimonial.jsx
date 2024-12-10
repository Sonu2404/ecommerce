import React from 'react';
import styles from './Testimonial.module.css';
// import { FaBoat, FaRocket, FaPhone, FaUndo, FaTicketAlt } from 'react-icons/fa';
import { CiDeliveryTruck } from "react-icons/ci";
import { IoRocketOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { SlActionUndo } from "react-icons/sl";
import { ImTicket } from "react-icons/im";
import testimonial1 from "../../home/images/testimonial-1.jpg"
import quotesa from "../../home/icons/quotes.svg"
import Banner1 from "../../home/images/cta-banner.jpg"

const Testimonial = () => {
  const services = [
    { icon: <CiDeliveryTruck />, title: 'Worldwide Delivery', desc: 'For Order Over $100' },
    { icon: <IoRocketOutline />, title: 'Next Day Delivery', desc: 'UK Orders Only' },
    { icon: <LuPhone />, title: 'Best Online Support', desc: 'Hours: 8AM - 11PM' },
    { icon: <SlActionUndo />, title: 'Return Policy', desc: 'Easy & Free Return' },
    { icon: < ImTicket  />, title: '30% Money Back', desc: 'For Order Over $100' },
  ];

  return (
    <div className={styles.container}>
      {/* Testimonials Section */}
      <div className={styles.testimonial}>
        <h2 className={styles.title}>Testimonial</h2>
        <div className={styles.testimonialCard}>
          <img
            src={testimonial1}
            alt="Alan Doe"
            className={styles.testimonialBanner}
            width="80"
            height="80"
          />
          <p className={styles.testimonialName}>Alan Doe</p>
          <p className={styles.testimonialTitle}>CEO & Founder Invision</p>
          <img
            src={quotesa}
            alt="quotation"
            className={styles.quotationImg}
            width="26"
          />
          <p className={styles.testimonialDesc}>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaContainer}>
        <img
          src={Banner1}
          alt="Summer Collection"
          className={styles.ctaBanner}
        />
        <a  className={styles.ctaContent}>
          <p className={styles.discount}>25% Discount</p>
          <h2 className={styles.ctaTitle}>Summer Collection</h2>
          <p className={styles.ctaText}>Starting @ $10</p>
          <p className={styles.ctaBtn}>Shop Now</p>
        </a>
      </div>

      {/* Services Section */}
      <div className={styles.service}>
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.serviceContainer}>
          {services.map((service, index) => (
            <div className={styles.serviceItem} key={index}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
