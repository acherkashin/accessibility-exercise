import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng: 'ru',
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          skipLink: "Go to main content",
          logo: "Museum Logo",
          slideIndex: "{{current}} out of {{all}}",
          exhibitionsAndEvents: "Exhibitions and events",
          museum: "Museum",
          onlineStreaming: "Online Streaming",
          liveBroadcast: "Live Broadcast",
          liveTitle: "Tours and lectures live",
          search: {
            input: 'Search',
            button: 'Search',
          },
          mainHeading: 'Pushkin Museum',
          carouselRole: "Carousel",
          carouselName: 'Carousel Name',
        }
      },
      ru: {
        translation: {
          skipLink: "Перейти к основному содержимому страницы",
          logo: "Логотип музея",
          slideIndex: "{{current}} из {{all}}",
          exhibitionsAndEvents: "Выставки и события",
          museum: "Музей",
          onlineStreaming: "Онлайн трансляция",
          liveBroadcast: "Прямой эфир",
          liveTitle: "Экскурсии и лекции в прямом эфире",
          search: {
            input: 'Поиск',
            button: 'Искать'
          },
          mainHeading: 'Пушкинский музей',
          carouselRole: "Карусель",
          carouselName: 'Анонсы мероприятий',
        }
      }
    }
  });

export default i18n;
