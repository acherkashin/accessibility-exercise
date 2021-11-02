import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { TabPanelProps } from './TabPanel';

import './Tabs.css';

export interface TabsProps {
  // TODO: replace with correct type. We should be able to pass sinle element to tabs. look how it is impelemented in material-ui.
  children: JSX.Element[];
  /**
   * Required for a11y to automatically link tabs with their panels
   */
  name: string;
}

/**
 * https://medium.com/@andreasmcd/creating-an-accessible-tab-component-with-react-24ed30fde86a
 * https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
 * @returns
 */
export function Tabs({ children, name }: TabsProps) {
  const tabs = React.Children.map(children, (item) => item.props as TabPanelProps);
  const activeTabElement = useRef<HTMLButtonElement>(null);
  const [selectedTab, selectTab] = useState(
    tabs.find((tab) => tab.selected)?.value ?? tabs[0].value
  );

  const selectNextTab = (tabValue: string) => {
    const index = tabs.findIndex((item) => item.value === tabValue);
    if (index < tabs.length - 1) {
      selectTab(tabs[index + 1].value);
    }
  };

  const selectPrevTab = (tabValue: string) => {
    const index = tabs.findIndex((item) => item.value === tabValue);
    if (index > 0) {
      selectTab(tabs[index - 1].value);
    }
  };

  const selectFirstTab = () => {
    selectTab(tabs[0].value);
  };

  const selectLastTab = () => {
    selectTab(tabs[tabs.length - 1].value);
  };

  useEffect(() => {
    activeTabElement.current?.focus();
  }, [selectedTab]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, tabValue: string) => {
    switch (e.key) {
      case 'Enter':
        // prevent page scroll
        e.preventDefault();
        selectTab(tabValue);
        break;
      case 'ArrowLeft':
        // prevent page scroll
        e.preventDefault();
        selectPrevTab(tabValue);
        break;
      case 'ArrowRight':
        // prevent page scroll
        e.preventDefault();
        selectNextTab(tabValue);
        break;
      case 'Home':
        // prevent page scroll
        e.preventDefault();
        selectFirstTab();
        break;
      case 'End':
        // prevent page scroll
        e.preventDefault();
        selectLastTab();
        break;
    }
  };

  return (
    <div className="tabs">
      <div className="tabs__tab-list" role="tablist">
        {tabs.map((item, index) => {
          const isSelected = selectedTab === item.value;

          return (
            <button
              key={item.value}
              id={`${name}-tab-${index}`}
              className={classNames('tabs__tab', {
                'tabs__tab--active': isSelected,
              })}
              role="tab"
              tabIndex={isSelected ? 0 : -1}
              onClick={() => selectTab(item.value)}
              onKeyDown={(e) => handleKeyDown(e, item.value)}
              ref={isSelected ? activeTabElement : null}
              aria-selected={isSelected}
              aria-controls={`${name}-panel-${index}`}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div>
        {React.Children.map(children, (item, i) =>
          React.cloneElement(item, {
            index: i,
            selected: selectedTab === (item.props as TabPanelProps).value,
            tabName: name
          } as TabPanelProps)
        )}
      </div>
    </div>
  );
}
