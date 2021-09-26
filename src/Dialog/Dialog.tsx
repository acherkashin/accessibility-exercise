import FocusTrap from 'focus-trap-react';
import classNames from 'classnames';
import './Dialog.css';
import { KeyboardEventHandler, MouseEventHandler, useCallback, useMemo } from 'react';
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

  const handleKeyUp: KeyboardEventHandler<HTMLDivElement> = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleOverlayClick: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  if (!open) {
    return null;
  }

  return <FocusTrap>
    <div className="dialog-overlay" onClick={handleOverlayClick} >
      <div
        aria-labelledby={titleId}
        className={classNames("dialog", className)}
        role="dialog"
        style={{ width, height }}
        onKeyUp={handleKeyUp}>
        <header className="dialog__header">
          <h2 className="dialog__title" id={titleId}>{title}</h2>
          <button className="dialog__close" onClick={onClose} aria-label="close">
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        </header>
        <div className="dialog__content">
          {children}
        </div>
      </div>
    </div>
  </FocusTrap>
}
