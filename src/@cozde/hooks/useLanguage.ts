import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { i18nConfig } from "@cozde/config";

const useLanguage = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";

  const currentLanguage = i18nConfig.langs.find(
    (lang) => lang.code === currentLanguageCode,
  );

  const { t } = useTranslation();

  const changeLanguage = (code: string) => {
    i18next.changeLanguage(code);
    cookies.set("i18next", code);
  };

  return { currentLanguage, changeLanguage, t };
};

export default useLanguage;
