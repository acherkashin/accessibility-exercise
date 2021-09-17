import { Dialog } from './Dialog';
import './LoginDialog.css';

export interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

export function LoginDialog({ open, onClose }: LoginDialogProps) {
  return <Dialog className="login-dialog" open={open} title="Вход в личный кабинет" width={792} height={579} onClose={onClose}>
    <div className="login-dialog__content">
      <label>
        Логин
        <input></input>
      </label>
      <label>
        Пароль
        <input></input>
      </label>
      <button>Войти</button>
    </div>
  </Dialog>;
}
