import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// EN
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enSolutions from './locales/en/solutions.json';
import enServices from './locales/en/services.json';
import enContact from './locales/en/contact.json';
import enSuccess from './locales/en/success.json';
import enNotFound from './locales/en/notFound.json';
import enVisionhub from './locales/en/visionhub.json';
import enSupporthub from './locales/en/supporthub.json';
import enKnowledgehub from './locales/en/knowledgehub.json';
import enFamilyhub from './locales/en/familyhub.json';
import enLegalhub from './locales/en/legalhub.json';
import enEduassess from './locales/en/eduassess.json';

// VI
import viCommon from './locales/vi/common.json';
import viHome from './locales/vi/home.json';
import viAbout from './locales/vi/about.json';
import viSolutions from './locales/vi/solutions.json';
import viServices from './locales/vi/services.json';
import viContact from './locales/vi/contact.json';
import viSuccess from './locales/vi/success.json';
import viNotFound from './locales/vi/notFound.json';
import viVisionhub from './locales/vi/visionhub.json';
import viSupporthub from './locales/vi/supporthub.json';
import viKnowledgehub from './locales/vi/knowledgehub.json';
import viFamilyhub from './locales/vi/familyhub.json';
import viLegalhub from './locales/vi/legalhub.json';
import viEduassess from './locales/vi/eduassess.json';

// JA
import jaCommon from './locales/ja/common.json';
import jaHome from './locales/ja/home.json';
import jaAbout from './locales/ja/about.json';
import jaSolutions from './locales/ja/solutions.json';
import jaServices from './locales/ja/services.json';
import jaContact from './locales/ja/contact.json';
import jaSuccess from './locales/ja/success.json';
import jaNotFound from './locales/ja/notFound.json';
import jaVisionhub from './locales/ja/visionhub.json';
import jaSupporthub from './locales/ja/supporthub.json';
import jaKnowledgehub from './locales/ja/knowledgehub.json';
import jaFamilyhub from './locales/ja/familyhub.json';
import jaLegalhub from './locales/ja/legalhub.json';
import jaEduassess from './locales/ja/eduassess.json';

// ZH
import zhCommon from './locales/zh/common.json';
import zhHome from './locales/zh/home.json';
import zhAbout from './locales/zh/about.json';
import zhSolutions from './locales/zh/solutions.json';
import zhServices from './locales/zh/services.json';
import zhContact from './locales/zh/contact.json';
import zhSuccess from './locales/zh/success.json';
import zhNotFound from './locales/zh/notFound.json';
import zhVisionhub from './locales/zh/visionhub.json';
import zhSupporthub from './locales/zh/supporthub.json';
import zhKnowledgehub from './locales/zh/knowledgehub.json';
import zhFamilyhub from './locales/zh/familyhub.json';
import zhLegalhub from './locales/zh/legalhub.json';
import zhEduassess from './locales/zh/eduassess.json';

// KO
import koCommon from './locales/ko/common.json';
import koHome from './locales/ko/home.json';
import koAbout from './locales/ko/about.json';
import koSolutions from './locales/ko/solutions.json';
import koServices from './locales/ko/services.json';
import koContact from './locales/ko/contact.json';
import koSuccess from './locales/ko/success.json';
import koNotFound from './locales/ko/notFound.json';
import koVisionhub from './locales/ko/visionhub.json';
import koSupporthub from './locales/ko/supporthub.json';
import koKnowledgehub from './locales/ko/knowledgehub.json';
import koFamilyhub from './locales/ko/familyhub.json';
import koLegalhub from './locales/ko/legalhub.json';
import koEduassess from './locales/ko/eduassess.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        solutions: enSolutions,
        services: enServices,
        contact: enContact,
        success: enSuccess,
        notFound: enNotFound,
        visionhub: enVisionhub,
        supporthub: enSupporthub,
        knowledgehub: enKnowledgehub,
        familyhub: enFamilyhub,
        legalhub: enLegalhub,
        eduassess: enEduassess,
      },
      vi: {
        common: viCommon,
        home: viHome,
        about: viAbout,
        solutions: viSolutions,
        services: viServices,
        contact: viContact,
        success: viSuccess,
        notFound: viNotFound,
        visionhub: viVisionhub,
        supporthub: viSupporthub,
        knowledgehub: viKnowledgehub,
        familyhub: viFamilyhub,
        legalhub: viLegalhub,
        eduassess: viEduassess,
      },
      ja: {
        common: jaCommon,
        home: jaHome,
        about: jaAbout,
        solutions: jaSolutions,
        services: jaServices,
        contact: jaContact,
        success: jaSuccess,
        notFound: jaNotFound,
        visionhub: jaVisionhub,
        supporthub: jaSupporthub,
        knowledgehub: jaKnowledgehub,
        familyhub: jaFamilyhub,
        legalhub: jaLegalhub,
        eduassess: jaEduassess,
      },
      zh: {
        common: zhCommon,
        home: zhHome,
        about: zhAbout,
        solutions: zhSolutions,
        services: zhServices,
        contact: zhContact,
        success: zhSuccess,
        notFound: zhNotFound,
        visionhub: zhVisionhub,
        supporthub: zhSupporthub,
        knowledgehub: zhKnowledgehub,
        familyhub: zhFamilyhub,
        legalhub: zhLegalhub,
        eduassess: zhEduassess,
      },
      ko: {
        common: koCommon,
        home: koHome,
        about: koAbout,
        solutions: koSolutions,
        services: koServices,
        contact: koContact,
        success: koSuccess,
        notFound: koNotFound,
        visionhub: koVisionhub,
        supporthub: koSupporthub,
        knowledgehub: koKnowledgehub,
        familyhub: koFamilyhub,
        legalhub: koLegalhub,
        eduassess: koEduassess,
      },
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
