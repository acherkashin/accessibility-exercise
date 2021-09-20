import { Dialog } from './Dialog';
import './LoginDialog.css';

export interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

export function LoginDialog({ open, onClose }: LoginDialogProps) {
  return <Dialog className="login-dialog" open={open} title="Вход в личный кабинет" width={700} height={550} onClose={onClose}>
    <div className="login-dialog__content">
      <label className="login-dialog__label">Логин</label>
      <input className="login-dialog__input" type="text"></input>

      <label className="login-dialog__label">Пароль</label>
      <input className="login-dialog__input" type="text"></input>

      <button className="login-dialog__login">Войти</button>
    </div>
  </Dialog>;
}
