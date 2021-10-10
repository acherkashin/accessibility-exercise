import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { TabPanelProps } from './TabPanel';

import './Tabs.css';

export interface TabsProps {
  // TODO: replace with correct type. We should be able to pass sinle element to tabs. look how it is impelemented in material-ui.
  children: JSX.Element[];
}

/**
 * https://medium.com/@andreasmcd/creating-an-accessible-tab-component-with-react-24ed30fde86a
 * @returns
 */
export function Tabs({ children }: TabsProps) {
  const tabs = React.Children.map(children, (item) => item.props as TabPanelProps);
  const activeTabElement = useRef<HTMLButtonElement>(null);
  const [selectedTab, selectTab] = useState(
    tabs.find((tab) => tab.selected)?.title ?? tabs[0].title
  );

  const selectNextTab = (tabTitle: string) => {
    const index = tabs.findIndex((item) => item.title === tabTitle);
    if (index < tabs.length - 1) {
      console.log('Select Next Tab');
      selectTab(tabs[index + 1].title);
    }
  };

  const selectPrevTab = (tabTitle: string) => {
    const index = tabs.findIndex((item) => item.title === tabTitle);
    if (index > 0) {
      console.log('Select Prev Tab');
      selectTab(tabs[index - 1].title);
    }
  };

  useEffect(() => {
    activeTabElement.current?.focus();
  }, [selectedTab]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // prevent page scroll
    e.preventDefault();
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLButtonElement>, tabTitle: string) => {
    switch (e.key) {
      case 'Enter':
        selectTab(tabTitle);
        break;
      case 'ArrowLeft':
        selectPrevTab(tabTitle);
        break;
      case 'ArrowRight':
        selectNextTab(tabTitle);
        break;
    }
  };

  return (
    <div className="tabs">
      <div className="tabs__tab-list" role="tablist" onKeyDown={handleKeyDown}>
        {tabs.map((item) => {
          const isSelected = selectedTab === item.title;

          return (
            <button
              className={classNames('tabs__tab', {
                'tabs__tab--active': isSelected,
              })}
              role="tab"
              tabIndex={isSelected ? 0 : -1}
              onClick={() => selectTab(item.title)}
              onKeyUp={(e) => handleKeyUp(e, item.title)}
              ref={isSelected ? activeTabElement : null}
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
            selected: selectedTab === (item.props as TabPanelProps).title,
          })
        )}
      </div>
    </div>
  );
}
