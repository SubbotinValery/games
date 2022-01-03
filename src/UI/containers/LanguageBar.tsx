import React from "react";
import { useTranslation } from "react-i18next";

import { availableLanguages } from "../../i18n";
import { LanguageBtn } from "../styled/LanguageBtn";

export const LanguageBar = () => {
  const { i18n } = useTranslation("Header");

  return (
    <div>
      {availableLanguages.map((lang) => (
        <LanguageBtn
          disabled={lang === i18n.language}
          active={lang === i18n.language}
          onClick={() => i18n.changeLanguage(lang)}
        >
          <span>{lang}</span>
        </LanguageBtn>
      ))}
    </div>
  );
};
