import FocusTrap from 'focus-trap-react';
import './Dialog.css';

export interface DialogProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Dialog({ title, open, children, onClose }: DialogProps) {

  return <FocusTrap active={open}>
    <div className="dialog-overlay">
      <div className="dialog" role="dialog">
        <header className="dialog__header">
          <h2>{title}</h2>
          <button onClick={onClose}>Close</button>
        </header>
        {children}
      </div>
    </div>
  </FocusTrap>
}
