import './App.css';
import { EventList } from './EventList/EventList';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import coverBig from './images/cover-big.jpg';
import { MuseumList } from './MuseumList/MuseumList';
import { Footer } from './Footer/Footer';
import { useState } from 'react';
import { Dialog } from './Dialog/Dialog';

function App() {
  const [isLoginOpened, setLoginOpened] = useState(false);

  return (
    <div className="page">
      <a id="skip-to-content" href="#content">Перейти к основному содержимому страницы</a>
      <Header className="page__header" onLoginClick={() => setLoginOpened(true)} />
      <Navigation />
      <main id="content" className="page__main">
        <h1 className="visually-hidden">Пушкинский музей</h1>
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
          <MuseumList />
        </section>
        <section aria-describedby="online-translation">
          <h2 id="online-translation">Онлайн трансляция</h2>
          <iframe src="https://www.youtube.com/embed/5qRR-5H1XgU" title="Ай Вейвей: движение к общечеловеческому"
            width="1030" height="600"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </section>

        <section aria-labelledby="live">
          <h2 id="live">Экскурсии и лекции в прямом эфире</h2>
          <p>
            С 1 июля вы можете присоединиться к нашим виртуальным мероприятиям — экскурсиям и лекциям для взрослых и
            детей, оплатив участие на сайте. Встречи будут проходить в прямом эфире на платформе <span
              lang="en">Zoom</span>; предусмотрен формат живого общения с возможностью задавать вопросы
            экскурсоводу (лектору).
            <a href="#" aria-label="Подробнее о виртуальных мероприятиях.">Подробнее.</a>
          </p>
          <p>
            Мы будем благодарны за любое <a href="#">пожертвование</a>. Все поступившие средства будут направлены на
            организацию онлайн-проектов для наших посетителей.
          </p>
        </section>
      </main>

      <Footer className="page__footer" />

      <Dialog open={isLoginOpened} title="Login Dialog" onClose={() => setLoginOpened(false)}>
        <input></input>
        <input></input>
      </Dialog>
    </div>
  );
}

export default App;
