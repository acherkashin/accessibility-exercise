import './EventListItem.css';

export interface EventListItemProps {
  id: string;
  imageSrc: string;
  title: string;
  date: string;
}

export function EventListItem({ id, imageSrc, title, date }: EventListItemProps) {
  return (
    <li className="events__list-item">
      <img src={imageSrc} alt="" role="presentation" />
      <h3 id={`event-name-${id}`}>{title}</h3>
      <div id={`event-date-${id}`}>{date}</div>
      <a href="#" aria-labelledby={`buy_ticket event-name-${id} event-date-${id}`}>Купить билет</a>
    </li>
  );
}
