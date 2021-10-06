import classNames from "classnames";
import React, { useState } from "react";
import { TabPanelProps } from "./TabPanel";

import './Tabs.css'

export interface TabsProps {
  // TODO: replace with correct type. We should be able to pass sinle element to tabs. look how it is impelemented in material-ui.
  children: JSX.Element[];
}

/**
 * https://medium.com/@andreasmcd/creating-an-accessible-tab-component-with-react-24ed30fde86a
 * @returns
 */
export function Tabs({ children }: TabsProps) {
  const tabs = React.Children.map(children, item => item.props as TabPanelProps)
  const [selectedTab, selectTab] = useState(tabs.find(tab => tab.selected)?.title ?? tabs[0].title);

  return <div className="tabs">
    <div className="tabs__tab-list" role="tablist">
      {tabs.map(item => <button className={classNames("tabs__tab", {
        "tabs__tab--active": selectedTab === item.title
      })} role="tab" onClick={() => selectTab(item.title)}>{item.title}</button>)}
    </div>
    <div>
      {React.Children.map(children, (item, i) => React.cloneElement(item, {
        index: i,
        selected: selectedTab === (item.props as TabPanelProps).title
      }))}
    </div>
  </div >
}
