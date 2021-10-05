import { TabPanel } from './TabPanel';
import { Tabs } from './Tabs';

export default {
  title: 'Tabs',
}

export const LoggedOut = () => {
  return (
    <Tabs>
      <TabPanel title="Все" selected>
        <div>Все</div>
      </TabPanel>
      <TabPanel title="Сегодня">
        <div>Сегодня</div>
      </TabPanel>
      <TabPanel title="Завтра">
        <div>Завтра</div>
      </TabPanel>
    </Tabs>
  )
};
