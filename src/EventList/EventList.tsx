import { EventListItem, EventListItemProps } from "./EventListItem";
import './EventList.css';


export interface EventListProps {
  events: EventListItemProps[];
}

export function EventList({ events: items }: EventListProps) {
  return <ul className="events__list">
    {items.map(item => <EventListItem {...item} />)}
  </ul>
}

