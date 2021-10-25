import { MuseumListItem, MuseumListItemProps } from "./MuseumListItem";
import './MuseumList.css';

export interface MuseumListProps {
  items: MuseumListItemProps[];
}

export function MuseumList({ items }: MuseumListProps) {
  return (
    <ul className="museum-list">
      {items.map(item => <MuseumListItem {...item} />)}
    </ul>
  )
}
