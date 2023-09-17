import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Navbar.css";
import logo from "./mehan-logo1.png";
import menu from "./Menu.png";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Navbar = ({ setMenuBar, menubar }) => {
  const { t } = useTranslation();
  const currentLanguage = useSelector((state) => state.currentLanguage);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "navbiggerthing bg-header" : "navbiggerthing"}>
        <div
          className={currentLanguage == "en" ? "navnavbar" : "navnavbar navAr"}
        >
          <div>
            <img
              src={logo}
              alt="MEHANlogo"
              className={color ? "navnavbar-logo bg-Logo" : "navnavbar-logo"}
            />
          </div>
          <div className="navnavbar-list">
            <button className="navnavbar-button">
              <Link to="/">{t("nav1")}</Link>
            </button>
            <button className="navnavbar-button">
              <Link to="/services">{t("nav2")}</Link>
            </button>
            <button className="navnavbar-button">
              <Link to="/projects">{t("nav3")}</Link>
            </button>
            <button className="navnavbar-button">
              <Link to="/clients">{t("nav4")}</Link>
            </button>
            <button className="navnavbar-button">
              <Link to="/contact">{t("nav5")}</Link>
            </button>
          </div>
          <div
            className="navnavbar-menu"
            style={{ display: "flex", gap: "3rem" }}
          >
            <div>
              <LanguageSwitcher />
            </div>
            <button
              className="navmenu-button"
              id="navmenuButton"
              onClick={() => setMenuBar(!menubar)}
            >
              <svg
                className="navmenu"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                color="white"
                viewBox="0 0 32 32"
              >
                <path d="M4 8h24v2.688H4V8zm0 9.313v-2.625h24v2.625H4zM4 24v-2.688h24V24H4z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const MenuBar = ({ menubar }) => {
  // const[appear,disappear]=useState(false);

  // useEffect(() => {
  // if(window.location.pathname === "/login"){
  //   disappear(true);
  // }
  // }, [window.location.pathname])
  const { t } = useTranslation();
  return (
    <>
      <div className={!menubar ? "navhidden_hidden" : "navhidden_show"} menubar>
        <button className="navmenu-menu">
          <Link to="/">{t("nav1")}</Link>
        </button>
        <button className="navmenu-menu">
          <Link to="/services">{t("nav2")}</Link>
        </button>
        <button className="navmenu-menu">
          <Link to="/projects">{t("nav3")}</Link>
        </button>
        <button className="navmenu-menu">
          <Link to="/clients">{t("nav4")}</Link>
        </button>
        <button className="navmenu-menu">
          <Link to="/contact">{t("nav5")}</Link>
        </button>
      </div>
    </>
  );
};
export { Navbar, MenuBar };
