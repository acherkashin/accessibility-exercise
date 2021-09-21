import { Validation } from "./LoginDialogUtils";

export interface ValidationListProps {
  validations?: Validation[];
}

export function ValidationList({ validations }: ValidationListProps) {
  if (validations == null || validations.length === 0) {
    return null;
  }

  //TODO: should I use ul>li?
  return <div className="validation-list">
    {validations.map(item => <div aria-live="polite" key={item.message}>{item.message}</div>)}
  </div>
}
