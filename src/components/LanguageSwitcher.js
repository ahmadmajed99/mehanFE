import React, { useEffect } from "react";
import { useCurrentLanguage } from "./currentLanguage";
import i18n from "../i18n";
import "./languageSwitcher.css";
import { useDispatch } from "react-redux";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useCurrentLanguage();
  const dispatch = useDispatch();

  function handleChangeLanguage(event) {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  }

  if (currentLanguage === "en") {
    dispatch({ type: "currentLanguageChange", currentLanguage: "en" });
  } else if (currentLanguage === "ar") {
    dispatch({ type: "currentLanguageChange", currentLanguage: "ar" });
  }

  return (
    <select
      value={currentLanguage}
      onChange={handleChangeLanguage}
      className="language-switcher"
    >
      <option value="en">English</option>
      <option value="ar">Arabic</option>
    </select>
  );
};

export default LanguageSwitcher;
