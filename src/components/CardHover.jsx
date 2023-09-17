import React from "react";
import styles from "./CardHover.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const CardHover = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img
          src="https://hosting.renderforestsites.com/17644818/965566/media/5bb2f3aec4df7824e956f23565021966.jpg"
          alt="image1"
        />
        <div className={styles.conText}>
          <p className={styles.p}>
            CRISIS MANAGEMENT AND RESCUE PLANS
            <a href="/services" className={styles.seeMoreLink}>
              <button className={styles.seeMoreBtn}>See More</button>
            </a>
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          src="https://hosting.renderforestsites.com/17644818/965566/media/f3d71d07354d862242d429306c765c94.jpg"
          alt="image2"
        />
        <div className={styles.conText}>
          <p className={styles.p}>
            TRAINING AND DEVELOPMENT
            <a href="/services" className={styles.seeMoreLink}>
              <button className={styles.seeMoreBtn}>See More</button>
            </a>
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          src="https://hosting.renderforestsites.com/17644818/965566/media/1761132d4adda584e38973fe900aab9a.jpg"
          alt="image3"
        />
        <div className={styles.conText}>
          <p className={styles.p}>
            AUDIT AND INSURANCE
            <a href="/services" className={styles.seeMoreLink}>
              <button className={styles.seeMoreBtn}>See More</button>
            </a>
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          src="https://hosting.renderforestsites.com/17644818/965566/media/9a2f22eaf78d03cc48c47c8818af6b93.jpg"
          alt="image4"
        />
        <div className={styles.conText}>
          <p className={styles.p}>
            CRISIS MANAGEMENT AND RESCUE PLANS
            <a href="/services" className={styles.seeMoreLink}>
              <button className={styles.seeMoreBtn}>See More</button>
            </a>
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          src="https://hosting.renderforestsites.com/17644818/965566/media/c651bdcb4d802f8e424bfd372f3d6fa0.webp"
          alt="image5"
        />
        <div className={styles.conText}>
          <p className={styles.p}>
            ACCOUNTING CONSULTING SERVICE
            <a href="/services" className={styles.seeMoreLink}>
              <button className={styles.seeMoreBtn}>See More</button>
            </a>
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          src="https://hosting.renderforestsites.com/17644818/965566/media/968cc9014b7d38e097854b91e7ad6dd3.jpg"
          alt="image6"
        />
        <div className={styles.conText}>
          <p className={styles.p}>
            PUBLIC SECTOR FINANCIAL MANAGEMENT
            <a href="/services" className={styles.seeMoreLink}>
              <button className={styles.seeMoreBtn}>See More</button>
            </a>
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          src="https://hosting.renderforestsites.com/17644818/965566/media/9f7f01a54b22df1e2d5fa3d0eba8109a.jpg"
          alt="image7"
        />
        <div className={styles.conText}>
          <p className={styles.p}>
            Management and Business Continuity Consultancy
            <a href="/services" className={styles.seeMoreLink}>
              <button className={styles.seeMoreBtn}>See More</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
