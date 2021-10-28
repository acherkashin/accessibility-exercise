
import { useTranslation } from 'react-i18next';
import './Navigation.css';

export interface NavigationProps {

}

export function Navigation({ }: NavigationProps) {
  const { t } = useTranslation();

  return (
    <nav className="page__navigation navigation" aria-label="Основная">
      <a className="navigation__item" href="#events">{t('exhibitionsAndEvents')}</a>
      <a className="navigation__item" href="#museum">{t('museum')}</a>
      <a className="navigation__item" href="#online-translation">{t('onlineStreaming')}</a>
      <a className="navigation__item" href="#live">{t('liveBroadcast')}</a>
    </nav>
  )
}
