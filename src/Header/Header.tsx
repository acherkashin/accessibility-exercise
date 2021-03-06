import classNames from "classnames";
import { MouseEventHandler } from "react";
import logo from '../images/logo.png';

import './Header.css';

export interface HeaderProps {
  className?: string;
  onLoginClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Header({ className, onLoginClick, }: HeaderProps) {
  return (
    <header className={classNames("header", className)}>
      <img src={logo} alt="Логотип музея изобразительных искусств имени Александра Сергеевича Пушкина" />
      <div className="header__right">
        <form className="header__search-form" role="search">
          <input className="header__search" type="search" aria-label="Поиск" />
          <button className="header__search-submit" type="submit" aria-label="Искать"></button>
        </form>
        <nav className="header__langs" aria-label="Выбрать язык">
          <span className="header__lang-switch header__lang-switch--active">
            <span aria-hidden="true">Рус</span>
            <span className="visually-hidden">Русский</span>
          </span>
          <a className="header__lang-switch" href="#" aria-label="English">Eng</a>
        </nav>
        <button className="header__login" aria-label="Авторизоваться" aria-haspopup="true" onClick={onLoginClick}>
          <svg width="46" height="46" viewBox="0 0 46 46" focusable="false" aria-hidden="true">
            <path
              d="M22.7 22.2c3 0 5.7-1.1 7.8-3.3a10.7 10.7 0 003.3-7.8c0-3-1.1-5.7-3.3-7.8A10.7 10.7 0 0022.7 0c-3 0-5.7 1.1-7.9 3.3a10.7 10.7 0 00-3.2 7.8c0 3 1 5.7 3.2 7.8a10.7 10.7 0 007.9 3.3zm-6-17a8 8 0 016-2.5 8 8 0 015.9 2.5 8 8 0 012.5 5.9 8 8 0 01-2.5 6 8 8 0 01-6 2.4 8 8 0 01-5.8-2.5 8 8 0 01-2.5-6 8 8 0 012.4-5.9zm25.4 30.2a27.4 27.4 0 00-1.1-5.9l-1.2-2.7c-.6-.9-1.2-1.7-1.8-2.3a8 8 0 00-2.6-1.7 9 9 0 00-3.4-.6c-.4 0-.9.2-1.8.8l-1.8 1.2c-.6.4-1.5.7-2.5 1a9.6 9.6 0 01-6 0c-1-.3-1.7-.6-2.3-1l-2-1.2c-.8-.6-1.2-.8-1.7-.8a9 9 0 00-3.3.6c-1 .4-2 1-2.6 1.7-.7.6-1.3 1.4-1.9 2.3-.5 1-.9 1.8-1.2 2.8a27.2 27.2 0 00-1 5.8L3.8 38c0 2.4.7 4.3 2.2 5.8A8.2 8.2 0 0012 46H34c2.4 0 4.4-.7 5.9-2.1a7.7 7.7 0 002.3-5.8l-.1-2.7zm-4 6.5a5.5 5.5 0 01-4 1.4H11.8c-1.7 0-3-.5-4-1.4-1-.9-1.4-2.2-1.4-3.8a24.5 24.5 0 011-7.7l1-2.3 1.3-1.7a5.3 5.3 0 011.8-1 6.2 6.2 0 012-.5l.6.3 2 1.3c.7.5 1.7 1 3 1.3a12.3 12.3 0 007.6 0 14 14 0 003-1.3 241.6 241.6 0 002.4-1.6 6.2 6.2 0 012.2.4 5.3 5.3 0 011.7 1.1 12.3 12.3 0 012.3 4 24.7 24.7 0 011 5.2V38c0 1.7-.4 2.9-1.4 3.8z"
              fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
