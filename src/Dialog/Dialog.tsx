import FocusTrap from 'focus-trap-react';
import classNames from 'classnames';
import './Dialog.css';
import { useMemo } from 'react';
import { uuidv4 } from '../utils/guidUtils';

export interface DialogProps {
  title: string;
  open: boolean;
  className?: string;
  width: number | string;
  height: number | string;
  onClose: () => void;
  children: React.ReactNode;
}

export function Dialog({ title, className, open, children, width, height, onClose }: DialogProps) {
  const titleId = useMemo(() => uuidv4(), []);

  if (!open) {
    return null;
  }

  return <FocusTrap>
    <div className="dialog-overlay">
      <div aria-labelledby={titleId} className={classNames("dialog", className)} role="dialog" style={{ width, height }}>
        <header className="dialog__header">
          <h2 className="dialog__title" id={titleId}>{title}</h2>
          <button onClick={onClose}>Close</button>
        </header>
        <div className="dialog__content">
          {children}
        </div>
      </div>
    </div>
  </FocusTrap>
}
