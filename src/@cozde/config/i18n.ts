import { LangaugeSettingProps } from "@types";

const instance: LangaugeSettingProps = {
  langs: [
    {
      name: "Vietnam",
      code: "vi",
      country_code: "vie",
      icon: "vi",
    },
    {
      name: "Germany",
      code: "de",
      country_code: "de",
      icon: "de",
    },
    {
      name: "English",
      code: "en",
      country_code: "usa",
      icon: "en",
    },
  ],
  options: {
    supportedLngs: ["en", "vi", "de"],
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
