import { EventListItem } from "./EventListItem";
import './EventList.css';
import richter from './../images/events/richter.png';
import tatoo from './../images/events/tatoo.png';
import matisse from './../images/events/matisse.png';

//TODO: EventList should recieve array of events instead of using hardcoded ones.
export function EventList() {
  return <ul className="events__list">
    <EventListItem id="1" imageSrc={richter} title="Святослав Рихтер в кругу друзей.Москва — Коктебель" date="до 20 ноября" />
    <EventListItem id="2" imageSrc={tatoo} title="Тату" date="до 27 сентября" />
    <EventListItem id="3" imageSrc={matisse} title="От Дюрера до Матисса.Избранные рисунки из собрания ГМИИ им.А.С.Пушкина" date="до 1 ноября" />
  </ul>
}
