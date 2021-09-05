import './MuseumListItem.css';

export interface MuseumListItemProps {
  imageSrc: string;
  title: string;
  address: string;
  moreDetails: string;
}

export function MuseumListItem({ imageSrc, title, address, moreDetails }: MuseumListItemProps) {
  return (
    <li className="museum-item">
      <img src={imageSrc} role="presentation" alt="" />
      <h3>{title}</h3>
      <div>{address}</div>
      <a href="#" aria-label={moreDetails}>Подробнее</a>
    </li>
  );
}
