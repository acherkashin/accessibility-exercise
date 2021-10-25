import richter from './../images/events/richter.png';
import tatoo from './../images/events/tatoo.png';
import matisse from './../images/events/matisse.png';
import { EventListItemProps } from './EventListItem';

export const eventListData: EventListItemProps[] = [{
  id: "1",
  imageSrc: richter,
  title: "Святослав Рихтер в кругу друзей.Москва — Коктебель",
  date: "до 20 ноября"
}, {
  id: "2",
  imageSrc: tatoo,
  title: "Тату",
  date: "до 27 сентября"
}, {
  id: "3",
  imageSrc: matisse,
  title: "От Дюрера до Матисса.Избранные рисунки из собрания ГМИИ им.А.С.Пушкина",
  date: "до 1 ноября"
}];
