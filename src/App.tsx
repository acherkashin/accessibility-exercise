import './App.css';
import { EventList } from './EventList/EventList';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import coverBig from './images/cover-big.jpg';
import { MuseumList } from './MuseumList/MuseumList';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <a id="skip-to-content" href="#content">Перейти к основному содержимому страницы</a>
      <Header className="page__header"/>
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
          <MuseumList />
        </section>
      </main>
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

      <Footer className="page__footer"/>
    </div>
  );
}

export default App;
