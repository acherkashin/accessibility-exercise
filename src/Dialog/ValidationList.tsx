import { AlertMessage } from "./LoginDialogUtils";

export interface ValidationListProps {
  id: string;
  validations?: AlertMessage[];
}

export function ValidationList({ id, validations }: ValidationListProps) {
  // https://www.w3.org/WAI/tutorials/forms/notifications/ Approach 3: On focus change
  return <ul id={id} role="status" className="validation-list">
    {/* TODO: read article about live-regions in frameworks https://dev.to/steady5063/aria-live-in-javascript-frameworks-4f9p */}
    {validations != null && validations.length !== 0 && validations.map(item => <li key={item.message}>{item.message}</li>)}
  </ul>
}
