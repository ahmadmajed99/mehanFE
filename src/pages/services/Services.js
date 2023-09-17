import React, { useState } from "react";
import styles from "./services.module.css";
import { CardsServices } from "./CardsServices";
import { MenuBar, Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
// import { MenuBar, Navbar } from "../../components/navbar/Navbar";

const Services = () => {
  const [menubar, setMenuBar] = useState(false);
  return (
    <>
      <div>
        <Navbar setMenuBar={setMenuBar} menubar={menubar} />
        <MenuBar menubar={menubar} />
      </div>
      <div className={styles.container} id="services">
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Our Services</div>
          <div className={styles.description}>
            Mehan Consulting offers comprehensive financial and management
            consulting services to businesses, leveraging the expertise of an
            international network of experienced consultants to provide tailored
            solutions for clients in various industries.
          </div>
          <CardsServices />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
