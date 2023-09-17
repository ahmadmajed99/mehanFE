// import { render } from "@testing-library/react";
import styles from "./clients.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MenuBar, Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import clients from "./client.json";
import mazoon from "./partnerLogo/mazoon.png";
import ghader from "./partnerLogo/ghader.png";
import hilal from "./partnerLogo/hilal.jpg";
import trust from "./partnerLogo/trust.jpg";
import aatco from "./partnerLogo/aatco.jpg";
import diwan from "./partnerLogo/dewan.jpg";
import kdouh from "./partnerLogo/kdouh.jpg";
import zaman from "./partnerLogo/zaman.png";
import sirin from "./partnerLogo/sirin.png";
import shamal from "./partnerLogo/shamal.jpg";
import pipes from "./partnerLogo/pipes.png";
import canroyal from "./partnerLogo/canroyal.jpg";
import ghazala from "./partnerLogo/ghazala.png";
import black from "./partnerLogo/black.png";
import gpc from "./partnerLogo/gpc.png";
import galfar from "./partnerLogo/galfar.jpg";
import jouda from "./partnerLogo/jouda.png";
import imos from "./partnerLogo/imos.png";
import neoman from "./partnerLogo/neoman.png";
import marasim from "./partnerLogo/marasim.jpg";
import marsa from "./partnerLogo/marsa.jpg";
import mof from "./partnerLogo/mof.jpg";
import nis from "./partnerLogo/nis.png";
import nizwa from "./partnerLogo/nizwa.png";
// import nwewllc from "./partnerLogo/n"
import nuhas from "./partnerLogo/nuhas.png";
import ofpf from "./partnerLogo/ofpf.png";
import saog from "./partnerLogo/saog.jpg";
import pharma from "./partnerLogo/pharma.png";
import polycon from "./partnerLogo/polycon.jpg";
import sohar from "./partnerLogo/sohar.png";
import tricolor from "./partnerLogo/tricolor.png";

// nwewllc.com

const Clients = () => {
  const [menubar, setMenuBar] = useState(false);

  return (
    <>
      <Navbar setMenuBar={setMenuBar} menubar={menubar} />
      <MenuBar menubar={menubar} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>Companies we have worked with</div>
            <div className={styles.description}>
              Nothing makes us happier than the success of our customers. We do
              our best to make them satisfied with the results.
            </div>
          </div>
          <div className={styles.logoContainer}>
            <a href="https://www.mazoondairy.om/">
              <img src={mazoon} alt="logo" className={styles.logoPartner} />
            </a>
            <a href="https://gazalaonline.com/">
              <img src={ghazala} alt="logo" className={styles.logoPartner} />
            </a>
            <img src={ghader} alt="logo" className={styles.logoPartner} />
            <a href="hilalgroup.com/service/fiber-acrylic">
              <img src={hilal} alt="logo" className={styles.logoPartner} />
            </a>
            <a href="www.4trust.com">
              <img src={trust} alt="logo" className={styles.logoPartner} />
            </a>
            <img src={aatco} alt="logo" className={styles.logoPartner} />
            <img src={diwan} alt="logo" className={styles.logoPartner} />
            <img src={kdouh} alt="logo" className={styles.logoPartner} />
            <img src={sirin} alt="logo" className={styles.logoPartner} />
            <img src={shamal} alt="logo" className={styles.logoPartner} />
            <a href="www.canroyallube.com">
              <img src={canroyal} alt="logo" className={styles.logoPartner} />
            </a>

            <a href="https://www.meatlandoman.com/">
              <img src={jouda} alt="logo" className={styles.logoPartner} />
            </a>
            <img src={black} alt="logo" className={styles.logoPartner} />
            <img src={gpc} alt="logo" className={styles.logoPartner} />
            <img src={galfar} alt="logo" className={styles.logoPartner} />
            <img src={pipes} alt="logo" className={styles.logoPartner} />
            <a href="https://www.danat-azaman.com">
              <img src={zaman} alt="logo" className={styles.logoPartner} />
            </a>
            <a href="https://www.imosgulf.com/">
              <img src={imos} alt="logo" className={styles.logoPartner} />
            </a>
            <a href="http://www.localineoman.com/">
              <img src={neoman} alt="logo" className={styles.logoPartner} />
            </a>
            <a href="https://marasimom.com">
              <img src={marasim} alt="logo" className={styles.logoPartner} />
            </a>

            <img src={marsa} alt="logo" className={styles.logoPartner} />

            <a href="https://mof.gov.om">
              <img src={mof} alt="logo" className={styles.logoPartner} />
            </a>
            <img src={nis} alt="logo" className={styles.logoPartner} />
            <a href="https://www.nizwafoods.com/">
              <img src={nizwa} alt="logo" className={styles.logoPartner} />
            </a>
            <a href="https://www.nuhasoman.com">
              <img src={nuhas} alt="logo" className={styles.logoPartner} />
            </a>
            <img src={ofpf} alt="logo" className={styles.logoPartner} />
            <img src={saog} alt="logo" className={styles.logoPartner} />

            <a href="https://www.omanpharma.com">
              <img src={pharma} alt="logo" className={styles.logoPartner} />
            </a>
            <a href="https://www.instagram.com/tricoloreitaliantiles/">
              <img src={tricolor} alt="logo" className={styles.logoPartner} />
            </a>
            <img src={polycon} alt="logo" className={styles.logoPartner} />
            <img src={sohar} alt="logo" className={styles.logoPartner} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Clients;
