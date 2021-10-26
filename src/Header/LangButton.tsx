import classNames from "classnames";

interface LangButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
}

export function LangButton({ isSelected, ...otherProps }: LangButtonProps) {
  return (
    <button
      className={getSwitchClassName(isSelected)}
      {...otherProps}
    />
  );
}

function getSwitchClassName(isActive: boolean) {
  return classNames("header__lang-switch", {
    "header__lang-switch--active": isActive
  });
}
