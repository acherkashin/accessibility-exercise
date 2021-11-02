import { TabPanel } from './TabPanel';
import { Tabs } from './Tabs';

export default {
  title: 'Tabs',
}

export const Default = () => {
  return (
    <Tabs name="story">
      <TabPanel value="all" title="Все" selected>
        <div>Все</div>
      </TabPanel>
      <TabPanel value="today" title="Сегодня">
        <div>Сегодня</div>
      </TabPanel>
      <TabPanel value="tomorrow" title="Завтра">
        <div>Завтра</div>
      </TabPanel>
    </Tabs>
  )
};
