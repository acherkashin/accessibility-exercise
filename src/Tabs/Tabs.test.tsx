import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { configureAxe } from 'jest-axe';
import 'jest-axe/extend-expect';
import { act } from 'react-dom/test-utils';
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
        <TabPanel title="Tab 3">
          Content 3
        </TabPanel>
      </Tabs>
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('first tab is selected', () => {
    render(
      <Tabs>
        <TabPanel title="Tab 1">
          Content 1
        </TabPanel>
        <TabPanel title="Tab 2">
          Content 2
        </TabPanel>
        <TabPanel title="Tab 3">
          Content 3
        </TabPanel>
      </Tabs>
    );
    const [firstTab,] = screen.getAllByRole('tab');

    expect(firstTab).toHaveAttribute('aria-selected', "true");
  });


  describe('Keyboard Navigation', () => {
    it('selects next tab', () => {
      render(
        <Tabs>
          <TabPanel title="Tab 1">
            Content 1
          </TabPanel>
          <TabPanel title="Tab 2">
            Content 2
          </TabPanel>
          <TabPanel title="Tab 3">
            Content 3
          </TabPanel>
        </Tabs>
      );

      const [firstTab, secondTab] = screen.getAllByRole('tab');
      fireEvent.focus(firstTab);
      fireEvent.keyDown(firstTab, { key: "ArrowRight" });

      expect(secondTab).toHaveAttribute('aria-selected', "true");
      expect(firstTab).toHaveAttribute('aria-selected', "false");
    });

    it('selects previous tab', async () => {
      render(
        <Tabs>
          <TabPanel title="Tab 1">
            Content 1
          </TabPanel>
          <TabPanel title="Tab 2">
            Content 2
          </TabPanel>
          <TabPanel title="Tab 3" selected>
            Content 3
          </TabPanel>
        </Tabs>
      );

      const [, secondTab, thirdTab] = screen.getAllByRole('tab');
      fireEvent.focus(thirdTab);
      fireEvent.keyDown(thirdTab, { key: "ArrowLeft" });

      expect(secondTab).toHaveAttribute('aria-selected', "true");
      expect(thirdTab).toHaveAttribute('aria-selected', "false");
    });

    it('selects last item', async () => {
      render(
        <Tabs>
          <TabPanel title="Tab 1" selected>
            Content 1
          </TabPanel>
          <TabPanel title="Tab 2">
            Content 2
          </TabPanel>
          <TabPanel title="Tab 3">
            Content 3
          </TabPanel>
        </Tabs>
      );

      const [firstTab, , thirdTab] = screen.getAllByRole('tab');
      fireEvent.focus(firstTab);
      fireEvent.keyDown(firstTab, { key: "End" });

      expect(firstTab).toHaveAttribute('aria-selected', "false");
      expect(thirdTab).toHaveAttribute('aria-selected', "true");
    });

    it('selects first item', async () => {
      render(
        <Tabs>
          <TabPanel title="Tab 1">
            Content 1
          </TabPanel>
          <TabPanel title="Tab 2">
            Content 2
          </TabPanel>
          <TabPanel title="Tab 3" selected>
            Content 3
          </TabPanel>
        </Tabs>
      );

      const [firstTab, , thirdTab] = screen.getAllByRole('tab');
      fireEvent.focus(thirdTab);
      fireEvent.keyDown(thirdTab, { key: "Home" });

      expect(firstTab).toHaveAttribute('aria-selected', "true")
      expect(thirdTab).toHaveAttribute('aria-selected', "false")
    });
  });
});
