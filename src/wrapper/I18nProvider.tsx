import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { useAppSelector } from "store";

const instance = i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next);

interface LingProviderProps {
  children: React.ReactNode;
}

function LingProvider(props: LingProviderProps) {
  const { children } = props;
  const config = useAppSelector((state) => state.app.i18n);

  instance.init(config.options);

  return <>{children}</>;
}

export default LingProvider;
