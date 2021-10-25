import classNames from "classnames"

export interface TabPanelProps {
  index?: number;
  title: string;
  /**
   * TODO: better to move "selected" to "Tabs" and pass it to TabPanel via React Context
   */
  selected?: boolean;
  children: React.ReactChild;
  tabName?: string;
}

export function TabPanel({ children, index, selected, tabName }: TabPanelProps) {
  return <div
    id={`${tabName}-panel-${index}`}
    aria-labelledby={`${tabName}-tab-${index}`}
    className={classNames('tabs__panel', { 'tabs__panel--active': selected })}
    hidden={!selected}
    role="tabpanel"
  >
    {children}
  </div>
}
