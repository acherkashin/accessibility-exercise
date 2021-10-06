import richter from "./../images/museums/richter.png";
import museion from "./../images/museums/museion.png";
import lopuhinyx from "./../images/museums/lopuhinyx.png";
import personal from "./../images/museums/personal.png";
import gallary from "./../images/museums/gallary.png";
import study from "./../images/museums/study.png";
import { MuseumListItemProps } from "./MuseumListItem";

export const museumListData: MuseumListItemProps[] = [{
  title: "МЕМОРИАЛЬНАЯ КВАРТИРА С.Т. РИХТЕРА",
  address: "ул. Большая Бронная, 2/6, 16 этаж, кв. 58",
  imageSrc: richter,
  moreDetails: "Подробнее о мемориальной квартире Рихтера",
}, {
  title: "ЦЭВ «МУСЕЙОН»",
  address: "Колымажный пер., 6/2, 3 (вход с Малого Знаменского переулка)",
  imageSrc: museion,
  moreDetails: "Подробнее о Центре эстетического восприяти МУСЕЙОН",
}, {
  title: "УСАДЬБА ЛОПУХИНЫХ",
  address: "Малый Знаменский пер., 3/5с4",
  imageSrc: lopuhinyx,
  moreDetails: "Подробнее об УСАДЬБЕ ЛОПУХИНЫХ",
}, {
  title: "УЧЕБНЫЙ МУЗЕЙ",
  address: "ул. Чаянова, 15",
  imageSrc: study,
  moreDetails: "Подробнее об учебном музее",
}, {
  title: "ОТДЕЛ ЛИЧНЫХ КОЛЛЕКЦИЙ",
  address: "ул. Волхонка, 10",
  imageSrc: personal,
  moreDetails: "Подробнее об учебном музее",
}, {
  title: "ГАЛЕРЕЯ",
  address: "ул. Волхонка, 14",
  imageSrc: gallary,
  moreDetails: "Подробнее о Галерее",
}];
