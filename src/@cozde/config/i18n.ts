import { LangaugeSettingProps } from "@types";

const instance: LangaugeSettingProps = {
  langs: [],
  options: {
    supportedLngs: ["en"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  },
};

export default instance;
