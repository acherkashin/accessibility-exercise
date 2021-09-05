import React from 'react';
import './App.css';
import { EventList } from './EventList/EventList';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import coverBig from './images/cover-big.jpg';

function App() {
  return (
    <div className="App">
      <a id="skip-to-content" href="#content">Перейти к основному содержимому страницы</a>
      <Header />
      <Navigation />
      <main id="content" className="page__main">
        <section aria-labelledby="announces">
          <h2 id="announces" className="visually-hidden">Анонсы мероприятий</h2>
          <img src={coverBig}
            alt="От Дюрера до Матисса. Избранные рисунки из собрания ГМИИ им Александра Сергеевича Пушкина. С 10 июля по 1 ноября. Главное издание." />
        </section>
        <section aria-describedby="events">
          <h2 id="events">Выставки и события</h2>
          <span id="buy_ticket" className="visually-hidden">Купить билет</span>
          <EventList />
        </section>

        <section aria-labelledby="museum">
          <h2 id="museum">Музей</h2>
          <ul className="museum-list">
</ul>
        </section>
      </main>
    </div>
  );
}

export default App;
