
import './Navigation.css';

export interface NavigationProps {

}

export function Navigation({ }: NavigationProps) {
  return (
    <nav className="page__navigation navigation" aria-label="Основная">
      <a className="navigation__item" href="#events">Выставки и события</a>
      <a className="navigation__item" href="#museum">Музей</a>
      <a className="navigation__item" href="#online-translation">Онлайн трансляция</a>
      <a className="navigation__item" href="#live">Прямой эфир</a>
    </nav>
  )
}