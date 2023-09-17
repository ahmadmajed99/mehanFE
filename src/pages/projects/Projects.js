import "./projects.css";
import React, { useState } from "react";
import Hero from "../../components/project/Hero";
import { MenuBar, Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import News from "../../components/project/News";

function Projects() {
  const [menubar, setMenuBar] = useState(false);

  return (
    <>
      <Navbar setMenuBar={setMenuBar} menubar={menubar} />
      <MenuBar menubar={menubar} />
      <div className="pApp" style={{ backgroundColor: "#EAE8ED" }}>
        <Hero />
        <section className="pcards-list"></section>
        <News />
      </div>
      <Footer />
    </>
  );
}

export default Projects;
