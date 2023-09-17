import React from "react";
import { Link } from "react-router-dom";
import logo from "./mehan-logo.jpeg";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
let FBurl =
  "https://www.facebook.com/profile.php?id=100066260061041&mibextid=ZbWKwL";
let INurl = "https://instagram.com/mehan_consulting?igshid=YmMyMTA2M2Y=";
let Turl = "https://twitter.com/llumarfilms?lang=en";
let Lurl = "https://www.linkedin.com/in/mehan-consulting-78b93a1a4";

const Footer = () => {
  const { t } = useTranslation();
  const currentLanguage = useSelector((state) => state.currentLanguage);

  return (
    <div className="footfooter">
      <div
        className={
          currentLanguage == "en" ? "footfirstBig" : "footfirstBig footAr"
        }
      >
        <div className="footfirstSmall">
          <div className="footlogo">
            <button className="footlogo-button">
              <Link to="/">
                <img src={logo} alt="logo-pic" className="footlogo-pic" />
              </Link>
            </button>
          </div>
        </div>

        <div className="footsecondSmall">
          <div className="footres-div">
            <div className="footres">{t("resources")}</div>
            <div className="footHSCPC">
              <ul className="footallul">
                <li className="footroutes">
                  <Link to="/">{t("nav1")}</Link>
                </li>
                <li className="footroutes">
                  <Link to="/services">{t("nav2")}</Link>
                </li>
                <li className="footroutes">
                  <Link to="/clients">{t("nav3")}</Link>
                </li>
                <li className="footroutes">
                  <Link to="/projects">{t("nav4")}</Link>
                </li>
                <li className="footroutes-contact">
                  <Link to="/contact">{t("nav5")}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footfus-div">
            <div className="footfus">{t("follow")}</div>
            <div className="footSocials">
              <ul className="footallul">
                <li className="footSocial-FI">
                  <a
                    href="https://www.facebook.com/profile.php?id=100066260061041&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li className="footSocial-FI">
                  <a
                    href="https://instagram.com/mehan_consulting?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="footSocial-T">
                  <a
                    href="https://twitter.com/llumarfilms?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footlegal-div">
            <div className="footlegal">{t("legal")}</div>
            <div className="footPPTC">
              <ul className="footallul">
                <li className="footPP">
                  <a
                    href="https://www.eastman.com/privacy/pages/policy.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("privacy")}
                  </a>
                </li>
                <li className="footTC">
                  <a
                    href="https://www.eastman.com/Pages/Legal_Information.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("terms")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footline"></div>

      <div className="footsecondBig">
        <div className="footrights">
          &#169; 2023 &nbsp; <div className="footbold">MEHAN Consulting</div>.
          All Rights Reserved.
        </div>
        <div className="footS-icons">
          <button
            className="footBTFB"
            onClick={() => {
              window.open(FBurl, "_blank");
            }}
          ></button>
          <button
            className="footBTIN"
            onClick={() => {
              window.open(INurl, "_blank");
            }}
          ></button>
          <button
            className="footBTT"
            onClick={() => {
              window.open(Turl, "_blank");
            }}
          ></button>
          <button
            className="footBLL"
            onClick={() => {
              window.open(Lurl, "_blank");
            }}
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
