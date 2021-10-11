import { render, screen } from '@testing-library/react';
import { configureAxe } from 'jest-axe';
import 'jest-axe/extend-expect';
import { TabPanel } from './TabPanel';
import { Tabs } from './Tabs';

const axe = configureAxe({})

describe('Tabs', () => {
  it('tabs are accessible', async () => {
    const { container } = render(
      <Tabs>
        <TabPanel title="Tab 1">
          Content 1
        </TabPanel>
        <TabPanel title="Tab 2">
          Content 2
        </TabPanel>
      </Tabs>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
