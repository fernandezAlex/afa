import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="lang-container">
      <div className={i18n.language} />
      <select
        className="lang bg-transparent"
        name="language"
        onChange={changeLanguage}
      >
        <option className="bg-transparent" value="es">
          <span className="rus"></span> ES
        </option>
        <option className="bg-transparent en" value="en">
          EN
        </option>
      </select>
    </div>
  );
};
