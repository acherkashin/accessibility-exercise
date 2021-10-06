import classNames from "classnames"

export interface TabPanelProps {
  index?: number;
  title: string;
  selected?: boolean;
  children: React.ReactChild;
}

export function TabPanel({ children, index, selected }: TabPanelProps) {
  return <div id={`tabpanel_${index}`}
    className={classNames('tabs__panel', { 'tabs__panel--active': selected })}
    hidden={!selected}
  >
    {children}
  </div>
}
