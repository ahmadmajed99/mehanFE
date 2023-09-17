import styles from "./home.module.css";
import React, { useState, useEffect } from "react";
import { MenuBar, Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ArrowUp from "../../assets/assets/arrow-up.jpg";
import classNames from "classnames";
import video1 from "../../assets/mehan-consulting-video.mp4";
import { CardHover } from "../../components/CardHover";
import FadeUpOnScroll from "../../components/FadeUpOnScroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [menubar, setMenuBar] = useState(false);
  const currentLanguage = useSelector((state) => state.currentLanguage);
  const { t } = useTranslation();
  const [arrow, setArrow] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar setMenuBar={setMenuBar} menubar={menubar} />
      <MenuBar menubar={menubar} />
      <div className={styles.homeContainer} id="firstPart">
        <div className={styles.wrapper} data-aos="fade-up">
          <div className={styles.title}>
            Me'han للخدمات والاستشارات المالية والادارية
          </div>
          <div className={styles.description}>
            We are your reliable Business partner!
          </div>
          <a href="#goal">
            <button className={styles.learnMoreBtn}>Learn More</button>
          </a>
        </div>
        <a href="#firstPart">
          {/* <button className={styles.arrowBtn}> */}
          <div
            className={classNames(
              arrow
                ? (styles.arrowCont, styles.arrowContHiden)
                : styles.arrowCont
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              color="blue"
              viewBox="0 0 32 32"
              className={classNames(
                arrow
                  ? (styles.arrowUpShow, styles.arrowUpHiden)
                  : styles.arrowUpShow
              )}
            >
              <path d="M24.567 20.862a1.619 1.619 0 000-2.283l-7.417-7.433a1.618 1.618 0 00-2.3 0l-7.417 7.433a1.619 1.619 0 000 2.283 1.619 1.619 0 002.283 0l6.283-6.283 6.283 6.283a1.619 1.619 0 002.283 0z"></path>
            </svg>
          </div>
          {/* </button> */}
        </a>
      </div>
      {/* <FadeUpOnScroll> */}

      <div className={`${styles.goalContainer} `} id="goal">
        <div className={styles.goalTitle} data-aos="fade-up">
          {t("join")}
        </div>
        <div className={styles.goalWrapper} data-aos="fade-up">
          <div>
            <div className={styles.goalName}> {t("visionT")}</div>
            <div className={styles.goalSubtitle}>{t("vision")}</div>
          </div>
          <hr className={styles.hr} />
          <div>
            <div className={styles.goalName}> {t("missionT")}</div>
            <div className={styles.goalSubtitle}>{t("mission")}</div>
          </div>
          <hr className={styles.hr} />
          <div>
            <div className={styles.goalName}> {t("valuesT")}</div>
            <div className={styles.goalSubtitle}>{t("values")}</div>
          </div>
        </div>
      </div>
      {/* </FadeUpOnScroll>
      <FadeUpOnScroll> */}
      <div className={styles.videoContainer}>
        <video
          controls
          className={styles.videoWrapper}
          data-aos="fade-up"
          src={video1}
        />
      </div>
      {/* </FadeUpOnScroll>
      <FadeUpOnScroll> */}
      <div className={styles.servicesContainer}>
        <CardHover />
      </div>
      {/* </FadeUpOnScroll> */}
      <Footer />
    </>
  );
};

export default Home;
