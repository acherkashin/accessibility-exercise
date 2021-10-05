import React, { useState } from "react";
import { TabPanelProps } from "./TabPanel";


interface TabsProps {
  children: JSX.Element[];
}

/**
 * https://medium.com/@andreasmcd/creating-an-accessible-tab-component-with-react-24ed30fde86a
 * @returns
 */
export function Tabs({ children }: TabsProps) {
  const tabs = children.map(item => item.props as TabPanelProps)
  const [selectedTab, selectTab] = useState(tabs.find(tab => tab.selected)?.title ?? tabs[0].title);

  return <div className="tabs">
    <div role="tablist">
      {tabs.map(item => <button role="tab" onClick={() => selectTab(item.title)}>{item.title}</button>)}
    </div>
    <div>
      {children.map((item, i) => React.cloneElement(item, {
        index: i,
        selected: selectedTab === (item.props as TabPanelProps).title
      }))}
    </div>
  </div>
}
