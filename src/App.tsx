import './App.css';
import { EventList } from './EventList/EventList';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import { MuseumList } from './MuseumList/MuseumList';
import { Footer } from './Footer/Footer';
import { useCallback, useState } from 'react';
import { LoginDialog } from './Dialog/LoginDialog';
import { Carousel } from './Carousel/Carousel';
import carousel1 from './images/carousel/1.jpg';
import carousel2 from './images/carousel/2.jpg';
import carousel3 from './images/carousel/3.jpg';
import { Tabs } from './Tabs/Tabs';
import { TabPanel } from './Tabs/TabPanel';

import { museumListData } from './MuseumList/MuseumListData';
import { eventListData } from './EventList/EventListData';


function App() {
  const [isLoginOpened, setLoginOpened] = useState(false);
  const close = useCallback(() => {
    setLoginOpened(false);
  }, [])
  const open = useCallback(() => {
    setLoginOpened(true);
  }, []);

  return (
    <>
      <div className="page">
        <a id="skip-to-content" href="#content">Перейти к основному содержимому страницы</a>
        <Header className="page__header" onLoginClick={open} />
        <Navigation />
        <main id="content" className="page__main">
          <h1 className="visually-hidden">Пушкинский музей</h1>
          <Carousel
            name="Анонсы мероприятий"
            slides={[{
              id: '1',
              altText: "От Дюрера до Матисса. Избранные рисунки из собрания ГМИИ им Александра Сергеевича Пушкина. С 10 июля по 1 ноября. Главное издание.",
              imageUrl: carousel1
            }, {
              id: '2',
              altText: "Смена экспозиции. Главное здание. Дневник проекта.",
              imageUrl: carousel2,
            }, {
              id: '3',
              altText: "Красные виноградники в арле. Винсент ван Гог. Монмажур. 1888 год. Научно-исследовательский реставрационный проект",
              imageUrl: carousel3,
            }]} />
          <section aria-describedby="events">
            <h2 id="events">Выставки и события</h2>
            <span id="buy_ticket" className="visually-hidden">Купить билет</span>
            <Tabs>
              <TabPanel title="Все" selected>
                <EventList events={eventListData} />
              </TabPanel>
              <TabPanel title="Сегодня">
                <EventList events={[eventListData[0]]} />
              </TabPanel>
              <TabPanel title="Завтра">
                <EventList events={[eventListData[1]]} />
              </TabPanel>
            </Tabs>
          </section>

          <section aria-labelledby="museum">
            <h2 id="museum">Музей</h2>
            <MuseumList items={museumListData}/>
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
      </div>
      <LoginDialog open={isLoginOpened} onClose={close} />
    </>
  );
}

export default App;
