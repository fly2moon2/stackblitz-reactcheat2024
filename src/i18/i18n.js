import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// use language detector
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    //translation: require('./i18/locales/en/translations.json')
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "home": "Home",
      "page": "Page",
      "applicant": "Applicant",
    }
  },
  zhCN: {
    //translation: require('./i18/locales/zh-HK/translations.json')
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "home": "HomeCN",
      "page": "Page@CN",
      "applicant": "Applicant@CN",
    }
  },
  zhHK: {
    //translation: require('./i18/locales/zh-HK/translations.json')
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "home": "Home@HK",
      "page": "Page@HK",
      "applicant": "Applicant@HK",
    }
  },
  /* The resources are the JSON files with the translations that you created in the last step. The namespaces (ns) and default namespace (defaultNS) are the keys from the resources object.
  ok if without*/
  //ns: ['translations'],
  //defaultNS: 'translations'
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    resources,
    //lng: 'zhCN',
    //lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
