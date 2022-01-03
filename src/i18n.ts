import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

export enum Language {
  En = "en",
  Ru = "ru",
}

const resources = {
  [Language.En]: en,
  [Language.Ru]: ru,
};

export const availableLanguages = Object.keys(resources);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: [Language.En],
    preload: [Language.En],
    resources,
  });
