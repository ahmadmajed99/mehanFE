import { useState } from "react";

export const useCurrentLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  return [currentLanguage, setCurrentLanguage];
};
